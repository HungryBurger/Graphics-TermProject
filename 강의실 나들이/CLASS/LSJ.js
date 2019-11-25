// 테이블
function makeBoard(scene) {
    var cubeGeometry = new THREE.BoxGeometry(15.6, 0.6, 42.6);
    var texture = new THREE.TextureLoader().load('table.jpg');
    texture.rotation = Math.PI / 360 * 180;
    var cubeMaterial = new THREE.MeshBasicMaterial({ map: texture });
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    //cube.castShadow = true;
    cube.position.x = 2.5;
    cube.position.y = 10.5;
    cube.position.z = 0;
    scene.add(cube);

    return cube;
}

// 테이블 바로 밑 덧붙임 판
function deskFrame1(scene) {
    var geometry = new THREE.BoxGeometry(7, 0.6, 42);
    var material = new THREE.MeshBasicMaterial({ color: 0x333333 });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.y = 9.9

    scene.add(mesh);

    return mesh;
}

// 받침대
function deskFrame2(scene) {
    var geometry = new THREE.BoxGeometry(10, 0.2, 32.5);
    var material = new THREE.MeshBasicMaterial({ color: 0x333333 });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = 1.5;
    mesh.position.y = 5.5;

    scene.add(mesh);

    return mesh;
}

// 다리쪽 가림막
function deskFrame3(scene) {
    var geometry = new THREE.BoxGeometry(7, 0.2, 36);
    var material = new THREE.MeshBasicMaterial({ color: 0x333333 });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.rotateZ(Math.PI / 360 * 125.5);
    mesh.position.x = -4;
    mesh.position.y = 4.5;

    scene.add(mesh);

    return mesh;
}

// 다리쪽 가림막 지지대
function frameHolder1(scene) {
    var geometry = new THREE.CylinderBufferGeometry(1.3, 1.3, 1.5, 32);
    var material = new THREE.MeshLambertMaterial({ color: 0x333333 });
    var cylinder = new THREE.Mesh(geometry, material);
    cylinder.position.x = -3.7;
    cylinder.position.y = 2;
    cylinder.position.z = 17.5;
    cylinder.rotateZ(-Math.PI / 360 * 54.5);
    scene.add(cylinder);
}
function frameHolder2(scene) {
    var geometry = new THREE.CylinderBufferGeometry(1.3, 1.3, 1.5, 32);
    var material = new THREE.MeshLambertMaterial({ color: 0x333333 });
    var cylinder = new THREE.Mesh(geometry, material);
    cylinder.position.x = -3.7;
    cylinder.position.y = 2;
    cylinder.position.z = -17.5;
    cylinder.rotateZ(-Math.PI / 360 * 54.5);
    scene.add(cylinder);
}

function makeLeg1(scene) {
    var legPoints = [
        new THREE.Vector3(0, 10, 19.5),
        new THREE.Vector3(-4, 0, 19.5),
        new THREE.Vector3(0, -4, 19.5),
        new THREE.Vector3(7, -10, 19.5),
        new THREE.Vector3(7, -12, 19.5)
    ];

    var legSpline = new THREE.CatmullRomCurve3(legPoints);

    var extrudeSettings = {
        steps: 200,
        bevelEnabled: false,
        extrudePath: legSpline
    };
    var pts = [], numPts = 100;
    for (var i = 0; i < numPts * 2; i++) {
        var l = 1;
        var a = i / numPts * Math.PI;
        pts.push(new THREE.Vector2(Math.cos(a) * l, Math.sin(a) * l));
    }
    var shape = new THREE.Shape(pts);
    var geometry = new THREE.ExtrudeBufferGeometry(shape, extrudeSettings);
    var material2 = new THREE.MeshLambertMaterial({ color: 0xE7E7E7, wireframe: false });
    var mesh = new THREE.Mesh(geometry, material2);
    scene.add(mesh);

    return mesh
}
function makeLeg2(scene) {
    var legPoints = [
        new THREE.Vector3(0, 10, 17.5),
        new THREE.Vector3(-4, 0, 17.5),
        new THREE.Vector3(-4.5, -10, 17.5),
        new THREE.Vector3(-4.5, -12, 17.5)
    ];

    var legSpline = new THREE.CatmullRomCurve3(legPoints);

    var extrudeSettings = {
        steps: 200,
        bevelEnabled: false,
        extrudePath: legSpline
    };
    var pts = [], numPts = 100;
    for (var i = 0; i < numPts * 2; i++) {
        var l = 1;
        var a = i / numPts * Math.PI;
        pts.push(new THREE.Vector2(Math.cos(a) * l, Math.sin(a) * l));
    }
    var shape = new THREE.Shape(pts);
    var geometry = new THREE.ExtrudeBufferGeometry(shape, extrudeSettings);
    var material2 = new THREE.MeshLambertMaterial({ color: 0xE7E7E7, wireframe: false });
    var mesh = new THREE.Mesh(geometry, material2);
    scene.add(mesh);

    return mesh
}

function legFrame(scene) {
    var geometry = new THREE.CylinderBufferGeometry(1.3, 1.3, 6, 32);
    var material = new THREE.MeshLambertMaterial({ color: 0x333333 });
    var cylinder = new THREE.Mesh(geometry, material);
    cylinder.position.x = -1.05;
    cylinder.position.y = 7.5;
    cylinder.position.z = 19.5;
    cylinder.rotateZ(-Math.PI / 360 * 54.5);
    scene.add(cylinder);

    var geometry2 = new THREE.CylinderBufferGeometry(1.3, 1.3, 6, 32);
    var material2 = new THREE.MeshLambertMaterial({ color: 0x333333 });
    var cylinder2 = new THREE.Mesh(geometry2, material2);
    cylinder2.position.x = -1.05;
    cylinder2.position.y = 7.5;
    cylinder2.position.z = 17.5;
    cylinder2.rotateZ(-Math.PI / 360 * 54.5);
    scene.add(cylinder2);
}

function makeLeg1_2(scene) {
    var legPoints = [
        new THREE.Vector3(0, 10, -19.5),
        new THREE.Vector3(-4, 0, -19.5),
        new THREE.Vector3(0, -4, -19.5),
        new THREE.Vector3(7, -10, -19.5),
        new THREE.Vector3(7, -12, -19.5)
    ];

    var legSpline = new THREE.CatmullRomCurve3(legPoints);

    var extrudeSettings = {
        steps: 200,
        bevelEnabled: false,
        extrudePath: legSpline
    };
    var pts = [], numPts = 100;
    for (var i = 0; i < numPts * 2; i++) {
        var l = 1;
        var a = i / numPts * Math.PI;
        pts.push(new THREE.Vector2(Math.cos(a) * l, Math.sin(a) * l));
    }
    var shape = new THREE.Shape(pts);
    var geometry = new THREE.ExtrudeBufferGeometry(shape, extrudeSettings);
    var material2 = new THREE.MeshLambertMaterial({ color: 0xE7E7E7, wireframe: false });
    var mesh = new THREE.Mesh(geometry, material2);
    scene.add(mesh);

    return mesh
}
function makeLeg2_2(scene) {
    var legPoints = [
        new THREE.Vector3(0, 10, -17.5),
        new THREE.Vector3(-4, 0, -17.5),
        new THREE.Vector3(-4.5, -10, -17.5),
        new THREE.Vector3(-4.5, -12, -17.5)
    ];

    var legSpline = new THREE.CatmullRomCurve3(legPoints);

    var extrudeSettings = {
        steps: 200,
        bevelEnabled: false,
        extrudePath: legSpline
    };
    var pts = [], numPts = 100;
    for (var i = 0; i < numPts * 2; i++) {
        var l = 1;
        var a = i / numPts * Math.PI;
        pts.push(new THREE.Vector2(Math.cos(a) * l, Math.sin(a) * l));
    }
    var shape = new THREE.Shape(pts);
    var geometry = new THREE.ExtrudeBufferGeometry(shape, extrudeSettings);
    var material2 = new THREE.MeshLambertMaterial({ color: 0xE7E7E7, wireframe: false });
    var mesh = new THREE.Mesh(geometry, material2);
    scene.add(mesh);

    return mesh
}

function legFrame2(scene) {
    var geometry = new THREE.CylinderBufferGeometry(1.3, 1.3, 6, 32);
    var material = new THREE.MeshLambertMaterial({ color: 0x333333 });
    var cylinder = new THREE.Mesh(geometry, material);
    cylinder.position.x = -1.05;
    cylinder.position.y = 7.5;
    cylinder.position.z = -19.5;
    cylinder.rotateZ(-Math.PI / 360 * 54.5);
    scene.add(cylinder);

    var geometry2 = new THREE.CylinderBufferGeometry(1.3, 1.3, 6, 32);
    var material2 = new THREE.MeshLambertMaterial({ color: 0x333333 });
    var cylinder2 = new THREE.Mesh(geometry2, material2);
    cylinder2.position.x = -1.05;
    cylinder2.position.y = 7.5;
    cylinder2.position.z = -17.5;
    cylinder2.rotateZ(-Math.PI / 360 * 54.5);
    scene.add(cylinder2);
}

function wheel(scene, x, y, z) {
    var geometry = new THREE.CylinderBufferGeometry(1.05, 1.05, 0.3, 32);
    var material = new THREE.MeshLambertMaterial({ color: 0x333333 });
    var cylinder = new THREE.Mesh(geometry, material);

    var geometry = new THREE.CylinderBufferGeometry(0.5, 0.5, 1, 32);
    var material = new THREE.MeshLambertMaterial({ color: 0x555555 });
    var cylinder2 = new THREE.Mesh(geometry, material);
    cylinder2.position.y = -0.3;

    var geometry = new THREE.CylinderBufferGeometry(0.8, 0.8, 1.5, 32);
    var material = new THREE.MeshLambertMaterial({ color: 0x423800 });
    var cylinder3 = new THREE.Mesh(geometry, material);
    cylinder3.position.y = -1.2;

    var geometry = new THREE.CylinderBufferGeometry(1.5, 1.5, 1.5, 32);
    var material = new THREE.MeshLambertMaterial({ color: 0x423800 });
    var cylinder4 = new THREE.Mesh(geometry, material);
    cylinder4.position.y = -2.1;
    cylinder4.position.z = -0.7;
    cylinder4.rotateZ(Math.PI / 360 * 180);

    var geometry = new THREE.CylinderBufferGeometry(1.5, 1.5, 0.3, 32);
    var material = new THREE.MeshLambertMaterial({ color: 0x333333 });
    var cylinder5 = new THREE.Mesh(geometry, material);
    cylinder5.position.x = 1;
    cylinder5.position.y = -2.3;
    cylinder5.position.z = -0.7;
    cylinder5.rotateZ(Math.PI / 360 * 180);

    var geometry = new THREE.CylinderBufferGeometry(1.5, 1.5, 0.3, 32);
    var material = new THREE.MeshLambertMaterial({ color: 0x333333 });
    var cylinder6 = new THREE.Mesh(geometry, material);
    cylinder6.position.x = -1;
    cylinder6.position.y = -2.3;
    cylinder6.position.z = -0.7;
    cylinder6.rotateZ(Math.PI / 360 * 180);

    var geometry = new THREE.CylinderBufferGeometry(1.25, 1.25, 2.35, 32);
    var material = new THREE.MeshLambertMaterial({ color: 0x423800 });
    var cylinder7 = new THREE.Mesh(geometry, material);
    cylinder7.position.y = -2.3;
    cylinder7.position.z = -0.7;
    cylinder7.rotateZ(Math.PI / 360 * 180);

    var group = new THREE.Group();
    group.position.x = x;
    group.position.y = y;
    group.position.z = z;
    group.add(cylinder);
    group.add(cylinder2);
    group.add(cylinder3);
    group.add(cylinder4);
    group.add(cylinder5);
    group.add(cylinder6);
    group.add(cylinder7);

    scene.add(group);
}


function Desk(scene) {
    this.makeBoard(scene);
    this.makeLeg1(scene);
    this.makeLeg2(scene);
    this.legFrame(scene);
    this.makeLeg1_2(scene);
    this.makeLeg2_2(scene);
    this.legFrame2(scene);
    this.wheel(scene, 7, -12, 19.5)
    this.wheel(scene, -4.5, -12, 17.5)
    this.wheel(scene, 7, -12, -19.5)
    this.wheel(scene, -4.5, -12, -17.5)

    this.deskFrame1(scene);
    this.deskFrame2(scene);
    this.deskFrame3(scene);
    this.frameHolder1(scene);
    this.frameHolder2(scene);
}

// function c_shape(scene) {
//     var outerGeometry = new THREE.CylinderGeometry( 5, 5, 20, 32, 1, true );
//     var innerGeometry = new THREE.CylinderGeometry( 4, 4, 20, 32, 1, true );
//     var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
//     var outerCylinder = new ThreeBSP(outerGeometry);
//     var innerCylinder = new ThreeBSP(innerGeometry);

//     var hollowedCylinder = innerCylinder.union(outerCylinder);

//     scene.add( hollowedCylinder.toMesh(material) );
// }