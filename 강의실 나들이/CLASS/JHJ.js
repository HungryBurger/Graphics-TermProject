function makeCube(scene) {
    var cubeGeometry = new THREE.BoxGeometry(6, 6, 6);
    var cubeMeterial = new THREE.MeshPhongMaterial({ color: 0x0089A0 });
    var cube = new THREE.Mesh(cubeGeometry, cubeMeterial);
    cube.castShadow = true;
    cube.position.x = 0;
    cube.position.y = 10;
    cube.position.z = 10;
    scene.add(cube);
    return cube;
}

function makePlane(scene) {
    var planeGeometry = new THREE.PlaneGeometry(60, 30, 1, 1);
    var planeMaterial = new THREE.MeshPhongMaterial({ color: 0xCCCCCC });
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.receiveShadow = true;
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.y=-10;
    scene.add(plane);
    return plane;
}
function makeSphere1 (scene){
    var sphereGeometry = new THREE.SphereGeometry(4, 32, 32);
    var sphereMeterial = new THREE.MeshPhongMaterial({ color: 0xFE98A0 });
    var sphere = new THREE.Mesh(sphereGeometry, sphereMeterial);
    sphere.castShadow = true;
    sphere.position.x = -15;
    sphere.position.y = 4;
    sphere.position.z = 0;
    scene.add(sphere);
    return sphere;
}
function makeSphere2(scene){
    var sphereGeometry = new THREE.SphereGeometry(4, 32, 32);
    var sphereMeterial2 = new THREE.MeshPhongMaterial({ color: 0xFEE721 });
    var sphere2 = new THREE.Mesh(sphereGeometry, sphereMeterial2);
    sphere2.castShadow = true;
    sphere2.position.x = 15;
    sphere2.position.y = 4;
    sphere2.position.z = 0;
    scene.add(sphere2);
    return sphere2;
}