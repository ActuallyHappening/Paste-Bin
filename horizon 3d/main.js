import '/style.css'
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';

const canvas = document.querySelector('.tiny-globe');
const overlay = canvas.getContext('2d');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    55, window.innerWidth / window.innerHeight, 1, 1500
);


const orbitalDistance = 75;
const leeWayFactor = 1; // Determines the grace given due to planet curvature

const shouldDebug = true;
let debugCounter = 0;

let quickAndDirtyDegreeCounter = 0; /****************** NEW **********************/

const projects = [{
        name: 'Center',
        coords: { x: 0, y: 0, z: 0 },
        url: '/#',
    },
    {
        name: 'A',
        coords: { x: orbitalDistance, y: orbitalDistance, z: orbitalDistance },
        url: '/#',
    },
    {
        name: 'B',
        coords: { x: -orbitalDistance, y: orbitalDistance, z: orbitalDistance },
        url: '/#',
    },
    {
        name: 'C',
        coords: { x: -orbitalDistance, y: -orbitalDistance, z: orbitalDistance },
        url: '/#',
    },
    {
        name: 'D',
        coords: { x: orbitalDistance, y: -orbitalDistance, z: orbitalDistance },
        url: '/#',
    },
];

let group = new THREE.Group();
let sunlight;
let renderer;
let controls;
let zoomLevel;
let markerPoints2D;

init();
animate();


/*
 * Initialise canvas
 */
function init() {
  window.addEventListener('resize', handleWindowResize, false);

  // Helpers
  if (shouldDebug){
    scene.add(new THREE.GridHelper(1500, 100));
    scene.add(new THREE.AxesHelper(500));
  }

  // Camera
  camera.position.x = 0;
  camera.position.y = 10;
  camera.position.z = 400;

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  canvas.insertAdjacentElement('afterend', renderer.domElement);

  // Planet object
  // Group globe and markers together
  const loader = new GLTFLoader();
  loader.load(
    'low-poly-planet.gltf',
    object => { if (!false) { scene.add(object.scene) } },
    xhr => console.log("Poly (planet) " + (xhr.loaded / xhr.total * 100 ) + '% loaded'),
    error => console.log('An error happened:', error),
  );
  //loader.scale = 0.5;

  // Lighting
  sunlight = new THREE.DirectionalLight(0xf0fff0, 3.5);
  sunlight.position.set(0, 0, 100);

  // Controls
  controls = new TrackballControls(camera, renderer.domElement);
  controls.minDistance = 250;
  controls.maxDistance = 1499;
  controls.rotateSpeed = 1.0;
  controls.zoomSpeed = 1.2;
  controls.panSpeed = 0.8;

  // Project markers
  projects.forEach((project, index) => {
    let html =
      `<div class="marker" id="project-${index + 1}">
				<a class="marker__label" href="${project?.url}">
					<strong>${project.name}</strong>
				</a>
				<div class="marker__pointer"></div>
			</div>`;

    let geometry = new THREE.SphereGeometry(10, 10, 10);
    let material = new THREE.MeshPhysicalMaterial({ color: 0x0000ff });
    let mesh = new THREE.Mesh(geometry, material);

    mesh.position.set(
      project.coords.x,
      project.coords.y,
      project.coords.z,
    );
    mesh.visible = shouldDebug;
    group.add(mesh);

    canvas.insertAdjacentHTML('afterend', html);
    project.element = document.querySelector(`#project-${index + 1}`);
    project.mesh = mesh;
  });

  markerPoints2D = document.querySelectorAll('.marker__pointer');

  scene.background = new THREE.Color(0x07131C);
  scene.add(group, sunlight);
}


/*
 * Updates animation frame.
 */
function animate() {
    zoomLevel = controls.target.distanceTo(controls.object.position);
    //console.log(controls.object.position) // 'Camera' position
  const axis = new THREE.Vector3(0, 1, 0) // Y axis to revolve around
  
  /********************* NEW ****************** */
  group.children.forEach((projectRef, index) => {
    const increase = 0.01; // Rotates by this amount
    projectRef.position.applyAxisAngle(axis, increase); // Apply rotation to each individual project point
    quickAndDirtyDegreeCounter += increase; // Also, to make calculating the label positions work, use this quick and dirty solution :)
  })

    //group.rotation.y += 0.005; // ********* OLD BUGGY LINE ************

    controls.update();
    renderer.render(scene, camera);
    //group.updateMatrixWorld; // Don't know what that was there!
    //updateCoolLines();
    updateMarkerSizes();
    updateMarkerPositions();
    requestAnimationFrame(animate);
}


/*
 * Recalculate canvas upon resize.
 */
function handleWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}


/*
 * Update marker based on camera zoom.
 */
function updateMarkerSizes() {
    const markerScaleMin = 0.3;

    let markerScale;
    let percentage = 100 - (
        (zoomLevel - controls.minDistance) /
        (controls.maxDistance - controls.minDistance) *
        100
    );

    percentage = Math.min(Math.max(percentage, 0), 100);
    markerScale = markerScaleMin + Math.pow(0.0095 * percentage, 2);

    markerPoints2D.forEach(marker => {
        marker.style.setProperty('--scale', markerScale);
    });
}


/*
 * Update hotspot positions.
 */
function updateMarkerPositions() {
    const axis = new THREE.Vector3(0, 1, 0); // Y axis

    projects.forEach((project, index) => {

        let vector = new THREE.Vector3(
            project.coords.x,
            project.coords.y,
            project.coords.z,
        ).clone();
        /* ******* CHANGED ****** */
      vector.applyAxisAngle(axis, quickAndDirtyDegreeCounter/5); // BLACK MAGIC the number 5 works for some reason!
      // Any workaround is going to have to manually compute above line! TODO
      vector.project(camera);

      vector.x = Math.round((0.5 + vector.x / 2) * (renderer.domElement.width / window.devicePixelRatio));
      vector.y = Math.round((0.5 - vector.y / 2) * (renderer.domElement.height / window.devicePixelRatio));

      project.element.style.top = `${vector.y}px`;
      project.element.style.left = `${vector.x}px`;

    
        /* **** Only Refactored ***** */
      // Track if items move behind globe
      const distanceToCenter = camera.position.distanceTo(new THREE.Vector3(0, 0, 0));
      const distanceToProject = camera.position.distanceTo(project.mesh.position);



      let should = false; // Whether the project point is behind or not
      if (distanceToProject > distanceToCenter) { should = true; }
      project.element.classList.toggle(
          'is-behind',
          should
      );
      //console.log(project.point.position);
    });
}