Steps to start dev server ...

( Get into this folder, or cd as written below )

*cd horizon 3d*
*npm i*
*npm run dev*

... then open localhost:3000 and view the amazingly solved problem!

# Steps to implement:

First, add a mutable variable. I called mine quickAndDirtyDegreeCounter:
```js
...
const canvas = document.querySelector('.tiny-globe');
const overlay = canvas.getContext('2d');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    55, window.innerWidth / window.innerHeight, 1, 1500
);

let quickAndDirtyDegreeCounter = 0; /****************** NEW **********************/

const projects = [{ ... }]
...
```

Then, add a line to make use of this variable:
```js
...
function animate() {
    zoomLevel = controls.target.distanceTo(controls.object.position);
    const axis = new THREE.Vector3(0, 1, 0)
  
    /********************* NEW ****************** */
    group.children.forEach((projectRef, index) => {
      const increase = 0.69; // Rotates by this amount
      projectRef.position.applyAxisAngle(axis, increase); // Apply rotation to each individual project point
      quickAndDirtyDegreeCounter += increase; // Also, to make calculating the label positions work, use this quick and dirty solution :)
    });
    /* END */

    //group.rotation.y += 0.005; // ********* OLD BUGGY LINE ************ */

    controls.update();
    renderer.render(scene, camera);
    //group.updateMatrixWorld; // Don't know what that was there!
    ...
}
...
```

Finally, do the black magic line:
```js
function updateMarkerPositions() {
  ...
  projects.forEach((project, index) => {

    let vector = new THREE.Vector3(
        project.coords.x,
        project.coords.y,
        project.coords.z,
    );

    /* ******* CHANGED ****** */
    vector.applyAxisAngle(axis, quickAndDirtyDegreeCounter / (5)); // BLACK MAGIC WT* I HAVE GENUINELY NO IDEA WHY 5 WORKS!
    /* END */
    vector.project(camera);

    vector.x = Math.round((0.5 + vector.x / 2) * (renderer.domElement.width / window.devicePixelRatio));
    vector.y = Math.round((0.5 - vector.y / 2) * (renderer.domElement.height / window.devicePixelRatio));
    ...
  }
  ...
}
```

**I still don't know why the number 5 works here! It may be specific to something on my end (pixel ratio, window size, processing e.t.c.) but I guessed it and not going back :)**

