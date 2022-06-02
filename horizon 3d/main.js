import '/style.css'
import * as THREE from 'https://cdn.skypack.dev/three';
import { TrackballControls } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/TrackballControls.js';


const canvas = document.querySelector('.tiny-globe');
const overlay = canvas.getContext('2d');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    55, window.innerWidth / window.innerHeight, 1, 1500
);
let debugCounter = 0;

let quickAndDirtyDegreeCounter = 0;

//const coolTestLinePoints = [ /* new THREE.Vector3(10, 10, 400), new THREE.Vector3(10, 10, -400) */ ]
const coolLines = new THREE.Group() //new THREE.Line(new THREE.BufferGeometry().setFromPoints(coolTestLinePoints), new THREE.LineBasicMaterial({ color: 0xff0000 }));
const cameraLines = new THREE.Group()

const projects = [{
        name: 'Center',
        coords: { x: 0, y: 0, z: 0 },
        url: '/#',
    },
    {
        name: 'A',
        coords: { x: 100, y: 100, z: 100 },
        url: '/#',
    },
    {
        name: 'B',
        coords: { x: -100, y: 100, z: 100 },
        url: '/#',
    },
    {
        name: 'C',
        coords: { x: -100, y: -100, z: 100 },
        url: '/#',
    },
    {
        name: 'D',
        coords: { x: 100, y: -100, z: 100 },
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

    /* const material = new THREE.LineBasicMaterial({
        color: 0x0000ff
    });

    const points = [];
    points.push(new THREE.Vector3(-10, 0, 0));
    points.push(new THREE.Vector3(0, 10, 0));
    points.push(new THREE.Vector3(10, 0, 0));

    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    const line = new THREE.Line(geometry, material);
    scene.add(line); */

    // Helpers
    scene.add(new THREE.GridHelper(1500, 100));
    scene.add(new THREE.AxesHelper(500));

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
    // const loader = new GLTFLoader();
    // loader.load(
    // 	'https://communityportal.io/assets/objects/low-poly-planet.gltf',
    // 	object => group.add(object.scene),
    // 	xhr => console.log((xhr.loaded / xhr.total * 100 ) + '% loaded'),
    // 	error => console.log('An error happened'),
    // );

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
            `<div class="marker" id="project-${ index + 1 }">
				<a class="marker__label" href="${ project?.url }">
					<strong>${ project.name }</strong>
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
        mesh.visible = true; // TODO was changed to true, set to false once finished
        group.add(mesh);

        canvas.insertAdjacentHTML('afterend', html);
        project.element = document.querySelector(`#project-${ index + 1 }`);
        project.mesh = mesh;
    });

    markerPoints2D = document.querySelectorAll('.marker__pointer');

    scene.background = new THREE.Color(0x07131C);
    scene.add(group, sunlight);

    updateCoolLines();

    scene.add(coolLines)
    scene.add(cameraLines)
}

function updateCoolLines() {
    const cameraLinesPoints = [
        new THREE.Vector3(camera.position.x + 100, camera.position.y + 100, camera.position.z + 100),
    ]
    const cameraLinesGeometry = new THREE.BufferGeometry().setFromPoints(cameraLinesPoints);
    cameraLines.add(new THREE.Line(cameraLinesGeometry, new THREE.LineBasicMaterial({ color: 0xff00f0 })));
}


/*
 * Updates animation frame.
 */
function animate() {
    zoomLevel = controls.target.distanceTo(controls.object.position); // UM i think the wrong line :)
    //console.log(controls.object.position) // 'Camera' position
  const axis = new THREE.Vector3(0, 1, 0) // Y axis to revolve around
  
  group.children.forEach((projectRef, index) => {
    const increase = 0.01
    projectRef.position.applyAxisAngle(axis, increase);
    quickAndDirtyDegreeCounter += increase;
  })

    //group.rotation.y += 0.005; // TODO uncomment
    //console.log(group);

    controls.update();
    renderer.render(scene, camera);
    //group.updateMatrixWorld; // Don't know what that was there!
    updateCoolLines();
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
    const axis = new THREE.Vector3(0, 1, 0);

    const coolLinesNow = [ /* new THREE.Vector3(10, 10, 400) */ ];

    projects.forEach((project, index) => {

        let vector = new THREE.Vector3(
            project.coords.x,
            project.coords.y,
            project.coords.z,
        );
        const myCoolLinePoints = [];
        //console.log(camera.position);
        myCoolLinePoints.push(new THREE.Vector3(0, 0, 0));
        //myCoolLinePoints.push(camera.position);
        myCoolLinePoints.push(new THREE.Vector3(0, 0, 0));
        //myCoolLinePoints.push(vector.clone());
        myCoolLinePoints.push(new THREE.Vector3(0, 0, 0))

        //console.log(myLineGeometry);

      vector.applyAxisAngle(axis, quickAndDirtyDegreeCounter / (5)); // BLACK MAGIC WT* I HAVE GENUINELY NO IDEA WHY THIS WORKS!
        // Any workaround is going to have to manually compute above line! TODO
        vector.project(camera);

        vector.x = Math.round((0.5 + vector.x / 2) * (renderer.domElement.width / window.devicePixelRatio));
        vector.y = Math.round((0.5 - vector.y / 2) * (renderer.domElement.height / window.devicePixelRatio));

        project.element.style.top = `${vector.y}px`;
        project.element.style.left = `${vector.x}px`;

        // Track if items move behind globe
        // Distance to center
        const distanceToCenter = camera.position.distanceTo(new THREE.Vector3(0, 0, 0));
        const distanceToProject = camera.position.distanceTo(project.mesh.position);
        const distanceToProjectT = camera.position.distanceTo(group.children[index].position);
        let should = false;
        debugCounter += 1;
        if (debugCounter % 200 == 69) {
            console.table({ "name": project.name, "distanceToCenter": distanceToCenter, "distanceToProject": distanceToProject, "should": should, "distanceToProjectT": distanceToProjectT, "Position": `(x: ${project.mesh.position.x}, y: ${project.mesh.position.y}, z: ${project.mesh.position.z})` });
        }
        if (debugCounter % 500 == 69) {
            //console.log(group)
        }
        if (distanceToProject > distanceToCenter) { should = true; }
        project.element.classList.toggle(
            'is-behind',
            should
        );

        myCoolLinePoints.push(project.mesh.position);
        //myCoolLinePoints.push(vector);
        myCoolLinePoints.push(new THREE.Vector3(0, 0, 0));
        myCoolLinePoints.push(group.children[index].position);
        myCoolLinePoints.push(new THREE.Vector3(0, 0, 0));
        //myCoolLinePoints.push(controls.object.position);

        const myLineGeometry = new THREE.BufferGeometry().setFromPoints(myCoolLinePoints);
        if (coolLines.children[index] == undefined) {
            coolLines.children[index] = new THREE.Line(myLineGeometry, new THREE.LineBasicMaterial({ color: 0xff0000 }));
        }
        coolLines.children[index].geometry = myLineGeometry; // Updates my coolLines TODO remove!

        //scene.add(vector);
        //console.log(project.point.position);
    });

    //coolLines.children = coolLinesNow

    //console.log(coolLines);
}