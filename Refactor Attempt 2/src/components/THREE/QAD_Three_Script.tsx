
function QAD_DO() {
  console.log("QAD_Three.tsx: useEffect()");
  const canvas = document.querySelector('.tiny-globe');
  const overlay = canvas.getContext('2d');
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    55, window.innerWidth / window.innerHeight, 1, 1500
  );

  const ENABLE_COOL_FEATURES = false;

  const useDefaultProjects = !ENABLE_COOL_FEATURES;
  const randomOrbitals = ENABLE_COOL_FEATURES; // Is pretty cool, set to true to see!

  const orbitalDistance = 100; // Changes distance of projects from center

  // Enable when debugging :)
  const shouldDebug = ENABLE_COOL_FEATURES;
  const showExtraObjects = false;

  let debugCounter = 0;

  const numExtraProjects = ENABLE_COOL_FEATURES ? 20 : 10; // Only applies when useDefaultProjects is false

  let projects;
  if (useDefaultProjects) {
    projects = [
      {
        name: 'Lightbox',
        coords: { x: -52, y: 72, z: 35 },
        url: '/#',
      },
      {
        name: 'T2D',
        coords: { x: -36, y: 16, z: 99 },
        url: '/#',
      },
      {
        name: 'Port Kembla',
        coords: { x: 67, y: 62, z: -2 },
        url: '/#',
      },
      {
        name: 'Inland Rail',
        coords: { x: 0, y: 92, z: -8 },
        url: '/#',
      },
      {
        name: 'Harbour Park',
        coords: { x: 47, y: -91, z: -17 },
        url: '/#',
      },
    ];
  } else {
    projects = []
  }

  function randomNum(range = 1) {
    return (Math.random() - 0.5) * range * 2
  }

  function generateRandomOrbitalVector(distance) {
    const vec = new THREE.Vector3(randomNum(distance), randomNum(distance), randomNum(distance))
    vec.project(camera)
    vec.setLength(distance)
    return vec
  }

  if (!useDefaultProjects) {
    for (let i = 0; i < numExtraProjects; i++) {
      const orbit = generateRandomOrbitalVector(orbitalDistance)
      //console.log(orbit)
      projects.push({
        name: 'Random: ' + i,
        coords: { x: orbit.x, y: orbit.y, z: orbit.z },
        url: '/#',
      })
      if (randomOrbitals) { projects[projects.length - 1].orbitalAxis = new THREE.Vector3(randomNum(1), randomNum(1), randomNum(1)) }
    }
  }

  //if (shouldDebug) projects = []

  let group = new THREE.Group(); // MUST Sync with projects (not bothered to refactor at the moment)
  let sunlight;
  let renderer;
  let controls;
  let zoomLevel;
  let markerPoints2D;

  let planet; // Object for planet
  let planetGraphics; // Group for loaded planet graphics

  init();
  animate();


  /*
    * Initialise canvas
    */
  function init() {
    window.addEventListener('resize', handleWindowResize, false);

    // Helpers
    if (shouldDebug) {
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
      './assets/objects/low-poly-planet.gltf',
      object => {
        planetGraphics = object.scene
        scene.add(planetGraphics)
        if (shouldDebug) console.log("PlanetG added", planetGraphics)
      },
      xhr => console.log("Poly (planet) " + (xhr.loaded / xhr.total * 100) + '% loaded'),
      error => console.log('An error happened:', error),
    );

    let planetGeometry = new THREE.SphereGeometry(100) // HARDCODED just note it techniquely should scale from above graphics import (not bothered right now)
    let planetMaterial = new THREE.MeshPhysicalMaterial({ color: 0x0fff0f })
    planet = new THREE.Mesh(planetGeometry, planetMaterial)
    scene.add(planet)
    if (!showExtraObjects) planet.visible = false


    // Lighting
    sunlight = new THREE.DirectionalLight(0xf0fff0, 3.25);
    sunlight.position.set(-800, 800, 1000);

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
      mesh.visible = showExtraObjects;
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
    debugCounter++;
    zoomLevel = controls.target.distanceTo(controls.object.position);
    //console.log(controls.object.position) // 'Camera' position
    const axis = new THREE.Vector3(0, 1, 0) // Y axis to revolve around

    /********************* NEW ****************** */
    const increase = 0.005; // Rotates by this amount
    group.children.forEach((projectRef, index) => {
      projectRef.position.applyAxisAngle(projects[index]?.orbitalAxis ?? axis, increase); // Apply rotation to each individual project point
    })
    if (planetGraphics) planetGraphics.rotation.y += increase;
    //group.rotation.y += 0.005; // ********* OLD BUGGY LINE ************

    controls.update();
    renderer.render(scene, camera);
    //group.updateMatrixWorld; // Don't know what that was there!
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


  function getRealPixelsTopLeft(vector, aCamera) {
    vector = vector.clone()
    vector.project(aCamera)
    vector.x = Math.round((0.5 + vector.x / 2) * (renderer.domElement.width / window.devicePixelRatio));
    vector.y = Math.round((0.5 - vector.y / 2) * (renderer.domElement.height / window.devicePixelRatio));
    return vector
  }

  /*
    * Update hotspot positions.
    */
  function updateMarkerPositions() {
    const axis = new THREE.Vector3(0, 1, 0); // Y axis

    projects.forEach((project, index) => {

      let vector = group.children[index].position.clone()
      vector.project(camera);
      const point = vector.clone()

      vector.x = Math.round((0.5 + vector.x / 2) * (renderer.domElement.width / window.devicePixelRatio));
      vector.y = Math.round((0.5 - vector.y / 2) * (renderer.domElement.height / window.devicePixelRatio));

      project.element.style.top = `${vector.y}px`;
      project.element.style.left = `${vector.x}px`;

      let should = false; // Whether the project point is behind or not

      const raycaster = new THREE.Raycaster()
      raycaster.setFromCamera(point, camera);
      const intersects = raycaster.intersectObjects(scene.children)
      //if (debugCounter % 1000 == 69) console.log(intersects)
      let seenSelf = false;
      intersects.forEach((intersect, i) => {
        if (intersect.object == project.mesh) seenSelf = true
        if (intersect.object == planet) {
          //console.log("Planet spotted ...")
          if (seenSelf);//console.log("INFRONT!")
          else {
            //console.log("BEHIND")
            should = true
          }
        }
      })

      project.element.classList.toggle(
        'is-behind',
        should
      );
      //console.log(project.point.position);
    });
  }
}

export default QAD_DO