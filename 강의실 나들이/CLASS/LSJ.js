// 테이블
function makeBoard(Desk, scale_z) {
    var cubeGeometry = new THREE.BoxGeometry(15.6, 0.6, 42.6);
    var texture = new THREE.TextureLoader().load('table.jpg');
    texture.rotation = Math.PI / 360 * 180;
    var cubeMaterial = new THREE.MeshPhongMaterial({ map: texture });
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.castShadow = true;
    cube.receiveShadow = true;
    cube.position.x = 2.5;
    cube.position.y = 10.5;
    cube.position.z = 0;
    cube.scale.z = scale_z;
    Desk.add(cube)
}

// 테이블 바로 밑 덧붙임 판
function deskFrame1(Desk, scale_z) {
    var geometry = new THREE.BoxGeometry(7, 0.6, 42);
    var material = new THREE.MeshPhongMaterial({ color: 0x333333 });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.position.y = 9.9
    mesh.scale.z = scale_z;
    Desk.add(mesh);
}

// 받침대
function deskFrame2(Desk, scale_z) {
    var geometry = new THREE.BoxGeometry(10, 0.2, 32.5);
    var material = new THREE.MeshPhongMaterial({ color: 0x333333 });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.position.x = 2.5;
    mesh.position.y = 5.5;
    mesh.scale.z = scale_z;
    Desk.add(mesh);
}

// 다리쪽 가림막
function deskFrame3(Desk, scale_z) {
    var geometry = new THREE.BoxGeometry(7, 0.2, 36);
    var material = new THREE.MeshPhongMaterial({ color: 0x333333 });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.rotateZ(Math.PI / 360 * 125.5);
    mesh.position.x = -4;
    mesh.position.y = 4.5;
    mesh.scale.z = scale_z;
    Desk.add(mesh);
}

// 다리쪽 가림막 지지대
function frameHolder1(Desk, deskSize) {
    var geometry = new THREE.CylinderBufferGeometry(1.3, 1.3, 1.5, 32);
    var material = new THREE.MeshLambertMaterial({ color: 0x333333 });
    var cylinder = new THREE.Mesh(geometry, material);
    cylinder.castShadow = true;
    cylinder.receiveShadow = true;
    cylinder.position.x = -3.7;
    cylinder.position.y = 2;
    cylinder.position.z = 17.5 * deskSize;
    cylinder.rotateZ(-Math.PI / 360 * 54.5);
    Desk.add(cylinder);
}
function frameHolder2(Desk, deskSize) {
    var geometry = new THREE.CylinderBufferGeometry(1.3, 1.3, 1.5, 32);
    var material = new THREE.MeshLambertMaterial({ color: 0x333333 });
    var cylinder = new THREE.Mesh(geometry, material);
    cylinder.castShadow = true;
    cylinder.receiveShadow = true;
    cylinder.position.x = -3.7;
    cylinder.position.y = 2;
    cylinder.position.z = -17.5 * deskSize;
    cylinder.rotateZ(-Math.PI / 360 * 54.5);
    Desk.add(cylinder);
}

function makeLeg1(Desk, deskSize) {
    var legPoints = [
        new THREE.Vector3(0, 10, 19.5),
        new THREE.Vector3(-4, 0, 19.5),
        new THREE.Vector3(0, -4, 19.5),
        new THREE.Vector3(7, -10, 19.5),
        new THREE.Vector3(7, -12, 19.5)
    ];
    for(i=0; i<legPoints.length; i++) {
        legPoints[i].z = legPoints[i].z * deskSize;
    }

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
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    Desk.add(mesh);
}

function makeLeg2(Desk, deskSize) {
    var legPoints = [
        new THREE.Vector3(0, 10, 17.5),
        new THREE.Vector3(-4, 0, 17.5),
        new THREE.Vector3(-4.5, -10, 17.5),
        new THREE.Vector3(-4.5, -12, 17.5)
    ];
    for(i=0; i<legPoints.length; i++) {
        legPoints[i].z = legPoints[i].z * deskSize;
    }

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
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    Desk.add(mesh);
}

function legFrame(Desk, deskSize) {
    var geometry = new THREE.CylinderBufferGeometry(1.3, 1.3, 6, 32);
    var material = new THREE.MeshLambertMaterial({ color: 0x333333 });
    var cylinder = new THREE.Mesh(geometry, material);
    cylinder.castShadow = true;
    cylinder.receiveShadow = true;
    cylinder.position.x = -1.05;
    cylinder.position.y = 7.5;
    cylinder.position.z = 19.5 * deskSize;
    cylinder.rotateZ(-Math.PI / 360 * 54.5);
    Desk.add(cylinder);

    var geometry2 = new THREE.CylinderBufferGeometry(1.3, 1.3, 6, 32);
    var material2 = new THREE.MeshLambertMaterial({ color: 0x333333 });
    var cylinder2 = new THREE.Mesh(geometry2, material2);
    cylinder2.castShadow = true;
    cylinder2.receiveShadow = true;
    cylinder2.position.x = -1.05;
    cylinder2.position.y = 7.5;
    cylinder2.position.z = 17.5 * deskSize;
    cylinder2.rotateZ(-Math.PI / 360 * 54.5);
    Desk.add(cylinder2);
}

function makeLeg1_2(Desk, deskSize) {
    var legPoints = [
        new THREE.Vector3(0, 10, -19.5),
        new THREE.Vector3(-4, 0, -19.5),
        new THREE.Vector3(0, -4, -19.5),
        new THREE.Vector3(7, -10, -19.5),
        new THREE.Vector3(7, -12, -19.5)
    ];
    for(i=0; i<legPoints.length; i++) {
        legPoints[i].z = legPoints[i].z * deskSize;
    }

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
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    Desk.add(mesh);
}
function makeLeg2_2(Desk, deskSize) {
    var legPoints = [
        new THREE.Vector3(0, 10, -17.5),
        new THREE.Vector3(-4, 0, -17.5),
        new THREE.Vector3(-4.5, -10, -17.5),
        new THREE.Vector3(-4.5, -12, -17.5)
    ];
    for(i=0; i<legPoints.length; i++) {
        legPoints[i].z = legPoints[i].z * deskSize;
    }

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
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    Desk.add(mesh);
}

function legFrame2(Desk, deskSize) {
    var geometry = new THREE.CylinderBufferGeometry(1.3, 1.3, 6, 32);
    var material = new THREE.MeshLambertMaterial({ color: 0x333333 });
    var cylinder = new THREE.Mesh(geometry, material);
    cylinder.castShadow = true;
    cylinder.receiveShadow = true;
    cylinder.position.x = -1.05;
    cylinder.position.y = 7.5;
    cylinder.position.z = -19.5 * deskSize;
    cylinder.rotateZ(-Math.PI / 360 * 54.5);
    Desk.add(cylinder);

    var geometry2 = new THREE.CylinderBufferGeometry(1.3, 1.3, 6, 32);
    var material2 = new THREE.MeshLambertMaterial({ color: 0x333333 });
    var cylinder2 = new THREE.Mesh(geometry2, material2);
    cylinder2.castShadow = true;
    cylinder2.receiveShadow = true;
    cylinder2.position.x = -1.05;
    cylinder2.position.y = 7.5;
    cylinder2.position.z = -17.5 * deskSize;
    cylinder2.rotateZ(-Math.PI / 360 * 54.5);
    Desk.add(cylinder2);
}

function wheel(Desk, x, y, z) {
    var geometry = new THREE.CylinderBufferGeometry(1.05, 1.05, 0.3, 32);
    var material = new THREE.MeshLambertMaterial({ color: 0x333333 });
    var cylinder = new THREE.Mesh(geometry, material);
    cylinder.castShadow = true;
    cylinder.receiveShadow = true;

    var geometry = new THREE.CylinderBufferGeometry(0.5, 0.5, 1, 32);
    var material = new THREE.MeshLambertMaterial({ color: 0x555555 });
    var cylinder2 = new THREE.Mesh(geometry, material);
    cylinder2.castShadow = true;
    cylinder2.receiveShadow = true;
    cylinder2.position.y = -0.3;

    var geometry = new THREE.CylinderBufferGeometry(0.8, 0.8, 1.5, 32);
    var material = new THREE.MeshLambertMaterial({ color: 0x423800 });
    var cylinder3 = new THREE.Mesh(geometry, material);
    cylinder3.castShadow = true;
    cylinder3.receiveShadow = true;
    cylinder3.position.y = -1.2;

    var geometry = new THREE.CylinderBufferGeometry(1.5, 1.5, 1.5, 32);
    var material = new THREE.MeshLambertMaterial({ color: 0x423800 });
    var cylinder4 = new THREE.Mesh(geometry, material);
    cylinder4.castShadow = true;
    cylinder4.receiveShadow = true;
    cylinder4.position.y = -2.1;
    cylinder4.position.z = -0.7;
    cylinder4.rotateZ(Math.PI / 360 * 180);

    var geometry = new THREE.CylinderBufferGeometry(1.5, 1.5, 0.3, 32);
    var material = new THREE.MeshLambertMaterial({ color: 0x333333 });
    var cylinder5 = new THREE.Mesh(geometry, material);
    cylinder5.castShadow = true;
    cylinder5.receiveShadow = true;
    cylinder5.position.x = 1;
    cylinder5.position.y = -2.3;
    cylinder5.position.z = -0.7;
    cylinder5.rotateZ(Math.PI / 360 * 180);

    var geometry = new THREE.CylinderBufferGeometry(1.5, 1.5, 0.3, 32);
    var material = new THREE.MeshLambertMaterial({ color: 0x333333 });
    var cylinder6 = new THREE.Mesh(geometry, material);
    cylinder6.castShadow = true;
    cylinder6.receiveShadow = true;
    cylinder6.position.x = -1;
    cylinder6.position.y = -2.3;
    cylinder6.position.z = -0.7;
    cylinder6.rotateZ(Math.PI / 360 * 180);

    var geometry = new THREE.CylinderBufferGeometry(1.25, 1.25, 2.35, 32);
    var material = new THREE.MeshLambertMaterial({ color: 0x423800 });
    var cylinder7 = new THREE.Mesh(geometry, material);
    cylinder7.castShadow = true;
    cylinder7.receiveShadow = true;
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

    Desk.add(group);
}

function two_drawDesk(set, x, y, z) {
    var Desk = new THREE.Group();
    var deskSize = 1;
    this.makeBoard(Desk, 1);
    this.makeLeg1(Desk, 1);
    this.makeLeg2(Desk, 1);
    this.legFrame(Desk, 1);
    this.makeLeg1_2(Desk, 1);
    this.makeLeg2_2(Desk, 1);
    this.legFrame2(Desk, 1);
    this.wheel(Desk, 7, -12, 19.5 * deskSize)
    this.wheel(Desk, -4.5, -12, 17.5 * deskSize)
    this.wheel(Desk, 7, -12, -19.5 * deskSize)
    this.wheel(Desk, -4.5, -12, -17.5 * deskSize)
    this.deskFrame1(Desk, 1);
    this.deskFrame2(Desk, 1);
    this.deskFrame3(Desk, 1);
    this.frameHolder1(Desk, 1);
    this.frameHolder2(Desk, 1);

    Desk.position.x = x;
    Desk.position.y = y;
    Desk.position.z = z;

    set.add(Desk);
}

function three_drawDesk(set, x, y, z) {
    var Desk = new THREE.Group();
    var deskSize = 1.5;
    this.makeBoard(Desk, 1.5);
    this.makeLeg1(Desk, 1.5);
    this.makeLeg2(Desk, 1.5);
    this.legFrame(Desk, 1.5);
    this.makeLeg1_2(Desk, 1.5);
    this.makeLeg2_2(Desk, 1.5);
    this.legFrame2(Desk, 1.5);
    this.wheel(Desk, 7, -12, 19.5 * deskSize)
    this.wheel(Desk, -4.5, -12, 17.5 * deskSize)
    this.wheel(Desk, 7, -12, -19.5 * deskSize)
    this.wheel(Desk, -4.5, -12, -17.5 * deskSize)
    this.deskFrame1(Desk, 1.5);
    this.deskFrame2(Desk, 1.5);
    this.deskFrame3(Desk, 1.5);
    this.frameHolder1(Desk, 1.5);
    this.frameHolder2(Desk, 1.5);

    Desk.position.x = x;
    Desk.position.y = y;
    Desk.position.z = z;
    
    set.add(Desk);
}


// 의자 등받이
function chairBack1(Chair) {
    var legPoints = [
        new THREE.Vector3(0, 0, 6),
        new THREE.Vector3(0.8, 0, 3),
        new THREE.Vector3(1, 0, 0),
        new THREE.Vector3(0.8, 0, -3),
        new THREE.Vector3(0, 0, -6),
    ];

    var legSpline = new THREE.CatmullRomCurve3(legPoints);

    var extrudeSettings = {
        steps: 200,
        bevelEnabled: false,
        extrudePath: legSpline
    };
    var plane = new THREE.PlaneGeometry(7, 0.6);
    var pts = [];
    pts.push(plane.vertices[0]);
    pts.push(plane.vertices[1]);
    pts.push(plane.vertices[3]);
    pts.push(plane.vertices[2]);

    var shape = new THREE.Shape(pts);
    var geometry = new THREE.ExtrudeBufferGeometry(shape, extrudeSettings);
    var material2 = new THREE.MeshLambertMaterial({ color: 0x333333, wireframe: false });
    var mesh = new THREE.Mesh(geometry, material2);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.position.x = 15;
    mesh.position.y = 10;
    //mesh.rotateZ(-Math.PI / 360 * 20);
    Chair.add(mesh);
}
// 팔받힘대
function chairBack2(Chair) {
    var legPoints = [
        new THREE.Vector3(0, 0, 6),
        new THREE.Vector3(-1, 0, 6.5),
        new THREE.Vector3(-3.7, 0, 7)
    ];

    var legSpline = new THREE.CatmullRomCurve3(legPoints);

    var extrudeSettings = {
        steps: 200,
        bevelEnabled: true,
        extrudePath: legSpline
    };
    var plane = new THREE.PlaneGeometry(3, 0.6);
    var pts = [];
    pts.push(plane.vertices[0]);
    pts.push(plane.vertices[1]);
    pts.push(plane.vertices[3]);
    pts.push(plane.vertices[2]);

    var shape = new THREE.Shape(pts);
    var geometry = new THREE.ExtrudeBufferGeometry(shape, extrudeSettings);
    var material2 = new THREE.MeshLambertMaterial({ color: 0x333333, wireframe: false });
    var mesh = new THREE.Mesh(geometry, material2);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.position.x = 15;
    mesh.position.y = 8;
    //mesh.rotateZ(-Math.PI / 360 * 20);
    Chair.add(mesh);

    var geometry = new THREE.CylinderBufferGeometry(0.3, 0.3, 3, 32);
    var material = new THREE.MeshLambertMaterial({ color: 0x333333, wireframe: false });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.position.z = 6;
    mesh.position.x = 15;
    mesh.position.y = 8;

    Chair.add(mesh);
}
// 팔받힘대2
function chairBack3(Chair) {
    var legPoints = [
        new THREE.Vector3(0, 0, -6),
        new THREE.Vector3(-1, 0, -6.5),
        new THREE.Vector3(-3.7, 0, -7)
    ];

    var legSpline = new THREE.CatmullRomCurve3(legPoints);

    var extrudeSettings = {
        steps: 200,
        bevelEnabled: true,
        extrudePath: legSpline
    };
    var plane = new THREE.PlaneGeometry(3, 0.6);
    var pts = [];
    pts.push(plane.vertices[0]);
    pts.push(plane.vertices[1]);
    pts.push(plane.vertices[3]);
    pts.push(plane.vertices[2]);

    var shape = new THREE.Shape(pts);
    var geometry = new THREE.ExtrudeBufferGeometry(shape, extrudeSettings);
    var material2 = new THREE.MeshLambertMaterial({ color: 0x333333, wireframe: false });
    var mesh = new THREE.Mesh(geometry, material2);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.position.x = 15;
    mesh.position.y = 8;
    //mesh.rotateZ(-Math.PI / 360 * 20);
    Chair.add(mesh);

    var geometry = new THREE.CylinderBufferGeometry(0.3, 0.3, 3, 32);
    var material = new THREE.MeshLambertMaterial({ color: 0x333333, wireframe: false });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.position.z = -6;
    mesh.position.x = 15;
    mesh.position.y = 8;
    Chair.add(mesh);
}

//팔받힘대3
function armHolder(Chair, x, y, z, direction) {
    var trackShape = new THREE.Shape()
        .moveTo(4, 4)
        .lineTo(4, 16)
        .absarc(6, 16, 2, Math.PI, 0, true)
        .lineTo(8, 4)
        .absarc(6, 4, 2, 2 * Math.PI, Math.PI, true);

    var extrudeSettings = { depth: 1, bevelEnabled: true, bevelSegments: 10, steps: 5, bevelSize: 1, bevelThickness: 1 };
    var geometry = new THREE.ExtrudeBufferGeometry(trackShape, extrudeSettings);
    var shear = new THREE.Matrix4();
    if (direction == 1)
        shear.set(1, 1 / Math.tan(Math.PI / 180 * -85), 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1);
    if (direction == 0)
        shear.set(1, 1 / Math.tan(Math.PI / 180 * 85), 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1);
    geometry.applyMatrix(shear);
    var mesh = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({ color: 0x333333 }));
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.position.x = x;
    mesh.position.y = y;
    mesh.position.z = z;

    mesh.scale.set(0.25, 0.25, 0.25);
    mesh.rotateZ(Math.PI / 2);
    mesh.rotateY(Math.PI / 2);
    Chair.add(mesh);
}

function chairLeg1(Chair, x, y, z) {
    var legPoints = [
        new THREE.Vector3(0, 8, 0),
        new THREE.Vector3(4, -1, 0),
        new THREE.Vector3(8, -10, 0),
        new THREE.Vector3(8, -13, 0)
    ];

    var legSpline = new THREE.CatmullRomCurve3(legPoints);

    var extrudeSettings = {
        steps: 200,
        bevelEnabled: false,
        extrudePath: legSpline
    };
    var pts = [], numPts = 100;
    for (var i = 0; i < numPts * 2; i++) {
        var l = 0.5;
        var a = i / numPts * Math.PI;
        pts.push(new THREE.Vector2(Math.cos(a) * l, Math.sin(a) * l));
    }
    var shape = new THREE.Shape(pts);
    var geometry = new THREE.ExtrudeBufferGeometry(shape, extrudeSettings);
    //var material = new THREE.MeshLambertMaterial({ color: 0xf6f6f6, wireframe: false });
    var material = new THREE.MeshStandardMaterial({ color: 0xF6F6F6, metalness: 0.2, roughness: 0 });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.position.x = x;
    mesh.position.y = y;
    mesh.position.z = z;

    Chair.add(mesh);
}

// 의자 앞다리
function chairLeg2(Chair, x, y, z) {
    var legPoints = [
        new THREE.Vector3(0, 1, 0),
        new THREE.Vector3(-1, -4.5, 0),
        new THREE.Vector3(-2, -10, 0),
        new THREE.Vector3(-2, -13, 0)
    ];

    var legSpline = new THREE.CatmullRomCurve3(legPoints);

    var extrudeSettings = {
        steps: 200,
        bevelEnabled: false,
        extrudePath: legSpline
    };
    var pts = [], numPts = 100;
    for (var i = 0; i < numPts * 2; i++) {
        var l = 0.5;
        var a = i / numPts * Math.PI;
        pts.push(new THREE.Vector2(Math.cos(a) * l, Math.sin(a) * l));
    }
    var shape = new THREE.Shape(pts);
    var geometry = new THREE.ExtrudeBufferGeometry(shape, extrudeSettings);
    //var material = new THREE.MeshLambertMaterial({ color: 0xf6f6f6, wireframe: false });
    var material = new THREE.MeshStandardMaterial({ color: 0xF6F6F6, metalness: 0.2, roughness: 0 });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.position.x = x;
    mesh.position.y = y;
    mesh.position.z = z;

    Chair.add(mesh);
}
// 의자 앞 지지대
function chairFrame2(Chair, x, y, z, s_z) {
    var legPoints = [
        new THREE.Vector3(0, 1, 6),
        new THREE.Vector3(0, 0.8, 2),
        new THREE.Vector3(0, 0.8, -2),
        new THREE.Vector3(0, 1, -6)
    ];

    var legSpline = new THREE.CatmullRomCurve3(legPoints);

    var extrudeSettings = {
        steps: 200,
        bevelEnabled: false,
        extrudePath: legSpline
    };
    var pts = [], numPts = 100;
    for (var i = 0; i < numPts * 2; i++) {
        var l = 0.5;
        var a = i / numPts * Math.PI;
        pts.push(new THREE.Vector2(Math.cos(a) * l, Math.sin(a) * l));
    }
    var shape = new THREE.Shape(pts);
    var geometry = new THREE.ExtrudeBufferGeometry(shape, extrudeSettings);
    //var material = new THREE.MeshLambertMaterial({ color: 0xf6f6f6, wireframe: false });
    var material = new THREE.MeshStandardMaterial({ color: 0xF6F6F6, metalness: 0.2, roughness: 0 });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.position.x = x;
    mesh.position.y = y;
    mesh.position.z = z;
    mesh.scale.set(1, 1, s_z);

    Chair.add(mesh);
}

function chairFrame3(Chair, x, y, z) {
    var geometry = new THREE.CylinderBufferGeometry(0.5, 0.5, 9.25, 32);
    var material = new THREE.MeshStandardMaterial({ color: 0xF6F6F6, metalness: 0.2, roughness: 0 });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.rotateZ(Math.PI / 180 * 90);
    mesh.position.x = x;
    mesh.position.y = y;
    mesh.position.z = z;

    Chair.add(mesh);
}

function chairFrame1(Chair, x, y, z) {
    var geometry = new THREE.CylinderBufferGeometry(0.7, 0.7, 4, 32);
    var shear = new THREE.Matrix4();
    shear.set(1, 1 / Math.tan(Math.PI / 180 * -67), 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1);
    geometry.applyMatrix(shear);
    var material = new THREE.MeshLambertMaterial({ color: 0x333333 });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.position.x = x;
    mesh.position.y = y;
    mesh.position.z = z;
    Chair.add(mesh);
}

function legCover(Chair, x, y, z) {
    var geometry = new THREE.CylinderBufferGeometry(0.57, 0.57, 1, 32);
    var material = new THREE.MeshLambertMaterial({ color: 0x333333 });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;

    mesh.position.x = x;
    mesh.position.y = y;
    mesh.position.z = z;
    Chair.add(mesh);

    var geometry = new THREE.CylinderBufferGeometry(0.57, 0.7, 0.5, 32);
    var material = new THREE.MeshLambertMaterial({ color: 0x333333 });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.position.x = x;
    mesh.position.y = y - 0.5;
    mesh.position.z = z;
    Chair.add(mesh);
}

// 앉는 곳
function chairSeat(Chair, x, y, z) {
    var legPoints = [
        new THREE.Vector3(0, 1.3, 6.5),
        new THREE.Vector3(0, 1.1, 2),
        new THREE.Vector3(0, 1.1, -2),
        new THREE.Vector3(0, 1.3, -6.5)
    ];

    var legSpline = new THREE.CatmullRomCurve3(legPoints);

    var extrudeSettings = {
        steps: 200,
        bevelEnabled: false,
        extrudePath: legSpline
    };
    var plane = new THREE.PlaneGeometry(13, 0.6);
    var pts = [];
    pts.push(plane.vertices[0]);
    pts.push(plane.vertices[1]);
    pts.push(plane.vertices[3]);
    pts.push(plane.vertices[2]);
    var shape = new THREE.Shape(pts);
    var geometry = new THREE.ExtrudeBufferGeometry(shape, extrudeSettings);
    //var material = new THREE.MeshLambertMaterial({ color: 0xf6f6f6, wireframe: false });
    var material = new THREE.MeshLambertMaterial({ color: 0x333333 });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.position.x = x;
    mesh.position.y = y;
    mesh.position.z = z;

    Chair.add(mesh);
}

function drawChair(set, x, y, z) {
    var Chair = new THREE.Group();

    chairBack1(Chair);
    chairBack2(Chair);
    chairBack3(Chair);
    chairFrame1(Chair, 11.25, 7.5, 7.25);
    chairFrame1(Chair, 11.25, 7.5, -7.25);
    chairFrame2(Chair, 5, -0.5, 0, 1);
    chairFrame2(Chair, 14.25, -0.5, 0, 1.16);
    chairFrame3(Chair, 9.625, 0.3, 2);
    chairFrame3(Chair, 9.625, 0.3, -2);
    chairLeg1(Chair, 11, 0, 7.25);
    chairLeg1(Chair, 11, 0, -7.25);
    chairLeg2(Chair, 5, 0, 6);
    chairLeg2(Chair, 5, 0, -6);
    armHolder(Chair, 14.25, 9.1, 8.425, 1);
    armHolder(Chair, 14.25, 9.1, -5.425, 0);
    legCover(Chair, 3, -12.5, 6)
    legCover(Chair, 19.05, -12.5, 7.25)
    legCover(Chair, 3, -12.5, -6)
    legCover(Chair, 19.05, -12.5, -7.25)
    chairSeat(Chair, 9, 0, 0);

    Chair.position.x = x;
    Chair.position.y = y;
    Chair.position.z = z;

    set.add(Chair);
}

function two_person_set(B208D, x, y, z, scale) {
    var set = new THREE.Group();
    two_drawDesk(set, 0, 0, 0);
    drawChair(set, 0, -2, 10);
    drawChair(set, 0, -2, -10);
    
    set.scale.set(scale, scale, scale);
    set.position.set(x, y, z);

    B208D.add(set);
}

function three_person_set(B208D, x, y, z, scale){
    var set = new THREE.Group();
    three_drawDesk(set, 0, 0, 0);
    drawChair(set, 0, -2, 0);
    drawChair(set, 0, -2, 18);
    drawChair(set, 0, -2, -18);
    
    set.scale.set(scale, scale, scale);
    set.position.set(x, y, z);

    B208D.add(set);
}