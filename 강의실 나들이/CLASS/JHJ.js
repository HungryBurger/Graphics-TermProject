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
    cube.rotation.z = Math.PI * -0.5;
    cube.position.x = pos_x - 25;
    cube.position.y = pos_y;
    cube.position.z = pos_z + 25;
    ClassRoom.add(cube);
}
//턱 벽면
function makeWall3(x, y, z, pos_x, pos_y, pos_z) {
    var cubeGeometry = new THREE.BoxGeometry(x, y, z);
    var texture = new THREE.TextureLoader().load('wall2.jpg');
    var cubeMaterial = new THREE.MeshBasicMaterial({ map: texture });
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.rotation.z = Math.PI * -0.5;
    cube.position.x = pos_x - 25;
    cube.position.y = pos_y;
    cube.position.z = pos_z + 25;
    ClassRoom.add(cube);
}
//턱 벽면
function makeWall4(x, y, z, pos_x, pos_y, pos_z) {
    var cubeGeometry = new THREE.BoxGeometry(x, y, z);
    var texture = new THREE.TextureLoader().load('wall2.jpg');
    var cubeMaterial = new THREE.MeshBasicMaterial({ map: texture });
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.rotation.x = Math.PI * -0.5;
    cube.position.x = pos_x - 25;
    cube.position.y = pos_y;
    cube.position.z = pos_z + 25;
    ClassRoom.add(cube);
}
//천장
function makeCeiling(x, y, z, pos_x, pos_y, pos_z) {
    var cubeGeometry = new THREE.BoxGeometry(x, y, z);
    var texture = new THREE.TextureLoader().load('ClassRoomGround.jpg');
    var cubeMaterial = new THREE.MeshBasicMaterial({ map: texture });
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.x = pos_x;
    cube.position.y = pos_y + 200;
    cube.position.z = pos_z;
    ClassRoom.add(cube);
}
//강의실 렌더링
function drawClassRoom(scene) {
    for (var i = 0; i < 16; i++) {
        for (var j = 0; j < 9; j++) {
            if (!(i == 15 && j == 4) && !(i == 15 && j == 5)){
               makeGround(50.6, 0.6, 50.6, 2.5 + 50 * i, 0.5, 0 + 50 * j);
            }
            else{
                makeGround(50.6, 0.6, 50.6, 2.5 + 50 * i, -15.5, 0 + 50 * j);
            }
            makeCeiling(50.6, 0.6, 50.6, 2.5 + 50 * i, -15.5, 0 + 50 * j);
        }
    }
    makeWall3(20.6, 0.6, 100.6, 2.5 + 750, -10.5, 0 + 200);
    makeWall4(50.6, 0.6, 20.6, 2.5 + 775, -10.5, 0 + 250);
    makeWall4(50.6, 0.6, 20.6, 2.5 + 775, -10.5, 0 + 150);
    
    
    for (var i = 0; i < 16; i++) {
        for (var j = 0; j < 4; j++) {
            makeWall1(50.6, 0.6, 50.6, 2.5 + 50 * i, 10 + 50 * j, -25);
            makeWall1(50.6, 0.6, 50.6, 2.5 + 50 * i, 10 + 50 * j, 425);
        }
    }
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 4; j++) {

            makeWall2(50.6, 0.6, 50.6, 2.5, 10 + 50 * j, -25 + 50 * i);
            if (!(i == 4 && j == 1) && !(i == 4 && j == 0) && !(i == 5 && j == 1) && !(i == 5 && j == 0))
                makeWall2(50.6, 0.6, 50.6, 802.5, 10 + 50 * j, -25 + 50 * i);
        }
    }
    scene.add(ClassRoom);
}

//여기서부터는 통로 제작
function makeWall7(x, y, z, pos_x, pos_y, pos_z) {
    var cubeGeometry = new THREE.BoxGeometry(x, y, z);
    var texture = new THREE.TextureLoader().load('Aisle_ground.jpg');
    var cubeMaterial = new THREE.MeshBasicMaterial({ map: texture });
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.rotation.z = Math.PI * -0.5;
    cube.position.x = pos_x - 25;
    cube.position.y = pos_y;
    cube.position.z = pos_z + 25;
    Aisle.add(cube);
}
function makeWall8(x, y, z, pos_x, pos_y, pos_z, Image) {
    var cubeGeometry = new THREE.BoxGeometry(x, y, z);
    var texture = new THREE.TextureLoader().load(Image);
    var cubeMaterial = new THREE.MeshBasicMaterial({ map: texture });
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.x = pos_x - 25;
    cube.position.y = pos_y;
    cube.position.z = pos_z + 25;
    Aisle.add(cube);
}
//입구 &막기
function makeWall9(x, y, z, pos_x, pos_y, pos_z, Image) {
    var cubeGeometry = new THREE.BoxGeometry(x, y, z);
    var texture = new THREE.TextureLoader().load(Image);
    var cubeMaterial = new THREE.MeshBasicMaterial({ map: texture });
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.rotation.x = Math.PI * -0.5;
    cube.position.x = pos_x - 25;
    cube.position.y = pos_y;
    cube.position.z = pos_z + 25;
    Aisle.add(cube);
}


function drawAisle(scene) {
    for (var i = 0; i < 16; i++) {
        for (var j = 0; j < 4; j++) {
            if (!(i == 4 && j == 1) && !(i == 4 && j == 0) && !(i == 5 && j == 1) && !(i == 5 && j == 0))
                makeWall7(50.6, 0.6, 50.6, 804.5, 10 + 50 * j, -28 + 50 * i);
        }
    }
    //옆판
    makeWall7(200.6, 0.6, 1104.6, 1204.5, 80 ,500);
    //붙는판
    makeWall7(200.6, 0.6, 704.6, 805, 80 ,750);
    //하판  
    makeWall8(400.6, 1.6, 1104.6, 1004.5, -15 ,500,'Aisle_ground.jpg');
    //천장
    makeWall8(400.6, 0.6, 1104.6, 1004.5, 178 ,500,'Aisle_ground.jpg');
    //입구
    makeWall9(400.6, 0.6, 200.6, 1004.5, 80 ,1000,'Aisle_ground.jpg');
    //반대편 입구
    makeWall9(400.6, 0.6, 200.6, 1004.5, 80 ,-50,'Aisle_ground.jpg');

    scene.add(Aisle);
}
