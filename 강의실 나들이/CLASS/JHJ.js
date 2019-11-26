var ClassRoom = new THREE.Group();
var Aisle = new THREE.Group();

function makeGround(x, y, z, pos_x, pos_y, pos_z) {
    var cubeGeometry = new THREE.BoxGeometry(x, y, z);
    var texture = new THREE.TextureLoader().load('ClassRoomGround.jpg');
    var cubeMaterial = new THREE.MeshBasicMaterial({ map: texture });
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    //cube.castShadow = true;
    cube.position.x = pos_x;
    cube.position.y = pos_y;
    cube.position.z = pos_z;
    ClassRoom.add(cube);
}
function makeWall(x, y, z, pos_x, pos_y, pos_z) {
    var cubeGeometry = new THREE.BoxGeometry(x, y, z);
    var texture = new THREE.TextureLoader().load('ClassRoomGround.jpg');
    texture.rotation = Math.PI / 360 * 180;
    var cubeMaterial = new THREE.MeshBasicMaterial({ map: texture });
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    //cube.castShadow = true;
    cube.position.x = pos_x;
    cube.position.y = pos_y;
    cube.position.z = pos_z;
    ClassRoom.add(cube);
}

function drawClassRoom(scene) {
    for (var i = 0; i < 16; i++) {
        for (var j = 0; j < 9; j++) {
            makeGround(100.6, 0.6, 100.6, 2.5 + 100 * i, -15.5, 0 + 100 * j);
            makeGround(100.6, 0.6, 100.6, 2.5 + 100 * i, -15.5, 0 + 100 * j);
        }
    }
    scene.add(ClassRoom);
}
