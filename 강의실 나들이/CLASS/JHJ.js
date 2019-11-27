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
function makeCeiling(x, y, z, pos_x, pos_y, pos_z) {
    var cubeGeometry = new THREE.BoxGeometry(x, y, z);
    var texture = new THREE.TextureLoader().load('ClassRoomGround.jpg');
    var cubeMaterial = new THREE.MeshBasicMaterial({ map: texture });
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.rotation.x = -0.5 * Math.PI;
    cube.position.x = pos_x;
    cube.position.y = pos_y;
    cube.position.z = pos_z;
    ClassRoom.add(cube);
}
function makeWall1(x, y, z, pos_x, pos_y, pos_z) {
    var cubeGeometry = new THREE.BoxGeometry(x, y, z);
    var texture = new THREE.TextureLoader().load('wall2.jpg');
    var cubeMaterial = new THREE.MeshBasicMaterial({ map: texture });
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.rotation.x = -0.5 * Math.PI;
    cube.position.x = pos_x;
    cube.position.y = pos_y;
    cube.position.z = pos_z;
    ClassRoom.add(cube);
}
function makeWall2(x, y, z, pos_x, pos_y, pos_z) {
    var cubeGeometry = new THREE.BoxGeometry(x, y, z);
    var texture = new THREE.TextureLoader().load('wall2.jpg');
    var cubeMaterial = new THREE.MeshBasicMaterial({ map: texture });
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.rotation.z = Math.PI*-0.5;
    cube.position.x = pos_x-25;
    cube.position.y = pos_y;
    cube.position.z = pos_z+25;
    ClassRoom.add(cube);
}

function makeCeiling(x, y, z, pos_x, pos_y, pos_z) {
    var cubeGeometry = new THREE.BoxGeometry(x, y, z);
    var texture = new THREE.TextureLoader().load('ClassRoomGround.jpg');
    var cubeMaterial = new THREE.MeshBasicMaterial({ map: texture });
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.x = pos_x;
    cube.position.y = pos_y+200;
    cube.position.z = pos_z;
    ClassRoom.add(cube);
}

function drawClassRoom(scene) {
    for (var i = 0; i < 16; i++) {
        for (var j = 0; j < 9; j++) {
            makeGround(50.6, 0.6, 50.6, 2.5 + 50 * i, -15.5, 0 + 50 * j);
            makeCeiling(50.6, 0.6, 50.6, 2.5 + 50 * i, -15.5, 0 + 50 * j);
        }
    }
    for (var i = 0; i < 16; i++) {
        for (var j = 0; j < 4; j++) {
            makeWall1(50.6, 0.6, 50.6, 2.5 + 50 * i, 10 + 50 * j, -25);
            makeWall1(50.6, 0.6, 50.6, 2.5 + 50 * i, 10 + 50 * j, 425);
        }
    }
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 4; j++) {

            makeWall2(50.6, 0.6, 50.6, 2.5, 10 + 50 * j, -25 + 50 * i);
            if (!(i == 4 && j == 1)&&!(i == 4 && j == 0)&&!(i == 5 && j == 1)&&!(i == 5 && j == 0))
                makeWall2(50.6, 0.6, 50.6, 802.5, 10 + 50 * j, -25 + 50 * i);
        }
    }


    scene.add(ClassRoom);
}
