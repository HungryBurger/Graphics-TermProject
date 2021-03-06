// create projector main body (rounded cube)
function createProjectorBody0(B208D, a, b, c, p_x, p_y, p_z, scale) {
	var projector = new THREE.Group();
	function createBoxWithRoundedEdges0( width, height, depth, radius0, smoothness ) {
	  let shape = new THREE.Shape();
	  let eps = 0.00001;
	  let radius = radius0 - eps;
	  shape.absarc( eps, eps, eps, -Math.PI / 2, -Math.PI, true );
	  shape.absarc( eps, height -  radius * 2, eps, Math.PI, Math.PI / 2, true );
	  shape.absarc( width - radius * 2, height -  radius * 2, eps, Math.PI / 2, 0, true );
	  shape.absarc( width - radius * 2, eps, eps, 0, -Math.PI / 2, true );
	  let geometry = new THREE.ExtrudeBufferGeometry( shape, {
		amount: depth - radius0 * 2,
		bevelEnabled: true,
		bevelSegments: smoothness * 2,
		steps: 1,
		bevelSize: radius,
		bevelThickness: radius0,
		curveSegments: smoothness
	  });

	  geometry.center();
	  
	  return geometry;
	}
// cube texture material
	 let cubeMat = new THREE.MeshPhongMaterial( {
		color: 0xEAEAEA,
		metalness: 0,
		roughness: 0,
	 } );

	 let cube = new THREE.Mesh( createBoxWithRoundedEdges0( 2.5, 1, 2, 0.5 / 9, 16 ), cubeMat );
	 	 	        
     // add shadow 
	 cube.receiveShadow = true;

	 // scaling and rotation
	 cube.scale.setScalar( 1.25 );
	 x_ = cube.position.x = a;
	 y_ = cube.position.y = b;
	 z_ = cube.position.z = c;

	 // add object to projector group
	 projector.add( cube );
	
	 // call projector creation functions
	 createProjectorBody1(projector, x_, y_, z_);
	 createProjectorCamera(projector, x_, y_, z_);
	 // call projector hanger creation functions
	 createProjectorLeftHanger0(projector, x_ - 0.5, y_, z_);
	 createProjectorLeftHangerJoint0(projector, x_ - 0.5, y_, z_);
	 createProjectorLeftHanger1(projector, x_ - 0.5, y_, z_);
	 createProjectorLeftHangerJoint1(projector, x_ - 0.5, y_, z_);
	 createProjectorLeftHanger2(projector, x_- 0.5, y_, z_);
	 createProjectorLeftHangerJoint2(projector, x_ - 0.5, y_, z_);
	 createProjectorLeftHanger3(projector, x_ - 0.5, y_, z_);
	 // call projector hanger creation functions
	 createProjectorLeftHanger0(projector, x_ + 0.5, y_, z_);
	 createProjectorLeftHangerJoint0(projector, x_ + 0.5, y_, z_);
	 createProjectorLeftHanger1(projector, x_ + 0.5, y_, z_);
	 createProjectorLeftHangerJoint1(projector, x_ + 0.5, y_, z_);
	 createProjectorLeftHanger2(projector, x_ + 0.5, y_, z_);
	 createProjectorLeftHangerJoint2(projector, x_ + 0.5, y_, z_);
	 createProjectorLeftHanger3(projector, x_ + 0.5, y_, z_);
	 // call projector cable creation functions
	 createCable(projector, x_, y_, z_, 0.02, 0x2457B);
	 createCable(projector, x_, y_, z_ - 0.2, 0.03, 0xED0000);
	 // rotate Y axis and set scale, position
	 projector.rotateY(Math.PI / 180 * 90);
	 projector.position.set(p_x, p_y, p_z);
	 projector.scale.set(scale, scale, scale);
	 
	 // add projector to B208D scene
	 B208D.add(projector);

}
// create projector second body (rounded cube)
function createProjectorBody1(projector, _x_, _y_, _z_) {
	function createBoxWithRoundedEdges1( width, height, depth, radius0, smoothness ) {
	  let shape = new THREE.Shape();
	  let eps = 0.00001;
	  let radius = radius0 - eps;
	  shape.absarc( eps, eps, eps, -Math.PI / 2, -Math.PI, true );
	  shape.absarc( eps, height -  radius * 2, eps, Math.PI, Math.PI / 2, true );
	  shape.absarc( width - radius * 2, height -  radius * 2, eps, Math.PI / 2, 0, true );
	  shape.absarc( width - radius * 2, eps, eps, 0, -Math.PI / 2, true );
	  let geometry = new THREE.ExtrudeBufferGeometry( shape, {
		amount: depth - radius0 * 2,
		bevelEnabled: true,
		bevelSegments: smoothness * 2,
		steps: 1,
		bevelSize: radius,
		bevelThickness: radius0,
		curveSegments: smoothness
	  });
	  geometry.center();
	  return geometry;
	}
	 let cubeMat = new THREE.MeshStandardMaterial( {
	color: 0xEAEAEA,
	metalness: 0,
	roughness: 0,
	 } );
	 let cube = new THREE.Mesh( createBoxWithRoundedEdges1( 2.2, 0.5, 1.7, 0.3 / 9, 16 ), cubeMat );
	 	        
    //add shadow
	cube.castShadow = true;    
	cube.receiveShadow = true;

	 // scaling and rotation
	 cube.scale.setScalar( 1.25 );
	 cube.position.x = _x_;
	 cube.position.y = _y_ + 0.4;
	 cube.position.z = _z_;

	 // add object to projector group
	 projector.add( cube );
}
// create projector camera
function createProjectorCamera(projector, _x_, _y_, _z_) {
	
	var geometry = new THREE.CylinderGeometry( 0.5, 0.5, 2, 32, 5 );
	var cylinderMaterial = new THREE.MeshPhongMaterial( {color: 0XD5D5D5} );
	var cylinder = new THREE.Mesh( geometry, cylinderMaterial, 2, 5 );
	        
    //add shadow
	cylinder.receiveShadow = true;

	// rotation and set postition
	cylinder.position.x = _x_ + 0.6;
	cylinder.position.y = _y_;
	cylinder.position.z = _z_ - 0.35;
	cylinder.rotateX(Math.PI/360 * 180);

	// add object to projector group
	projector.add( cylinder );
}

// create projector hanger
function createProjectorLeftHanger0(projector, _x_, _y_, _z_) {
	var cubeGeometry0 = new THREE.BoxGeometry(0.07, 0.5, 0.2);
    var cubeMeterial = new THREE.MeshPhongMaterial({ color: 0X8C8C8C });
	var hanger0 = new THREE.Mesh(cubeGeometry0, cubeMeterial, 2, 5);

	// set position
    hanger0.position.x = _x_;
    hanger0.position.y = _y_ + 0.7;
	hanger0.position.z = _z_ - 0.34;
	
	// add object to projector group
	projector.add(hanger0);
}
// create projector hanger joint
function createProjectorLeftHangerJoint0(projector, _x_, _y_, _z_) {
	var geometry0 = new THREE.CylinderGeometry( 0.08, 0.08, 0.1, 32, 5 );
	var cylinderMaterial = new THREE.MeshPhongMaterial( {color: 0XD5D5D5} );
	var cylinder0 = new THREE.Mesh( geometry0, cylinderMaterial, 2, 5 );

	// rotation and set postition
	cylinder0.position.x = _x_;
	cylinder0.position.y = _y_ + 0.8;
	cylinder0.position.z = _z_ - 0.34;
	cylinder0.rotateZ(Math.PI/360 * 180);

	// add object to projector group
	projector.add( cylinder0 );
}
// create projector hanger
function createProjectorLeftHanger1(projector, _x_, _y_, _z_) {
	var cubeGeometry1 = new THREE.BoxGeometry(0.07, 1, 0.2);
    var cubeMeterial = new THREE.MeshPhongMaterial({ color: 0X8C8C8C });
	var hanger1 = new THREE.Mesh(cubeGeometry1, cubeMeterial, 2, 5);
	
	// rotation and set position
    hanger1.position.x = _x_;
    hanger1.position.y = _y_ + 1;
    hanger1.position.z = _z_;
	hanger1.rotateX(Math.PI/360 * (120));

	// add object to projector group
	projector.add(hanger1);
}
// create projector hanger joint
function createProjectorLeftHangerJoint1(projector, _x_, _y_, _z_) {
	var geometry1 = new THREE.CylinderGeometry( 0.08, 0.08, 0.1, 32, 5 );
	var cylinderMaterial = new THREE.MeshPhongMaterial( {color: 0XD5D5D5} );
	var cylinder1 = new THREE.Mesh( geometry1, cylinderMaterial, 2, 5 );
	cylinder1.position.x = _x_;
	cylinder1.position.y = _y_ + 1.2;
	cylinder1.position.z = _z_ + 0.34;
	cylinder1.rotateZ(Math.PI/360 * 180);

	// add object to projector group
	projector.add( cylinder1 );
}
// create projector hanger
function createProjectorLeftHanger2(projector, _x_, _y_, _z_) {
	var cubeGeometry2 = new THREE.BoxGeometry(0.07, 1, 0.2);
	var cubeMeterial = new THREE.MeshPhongMaterial({ color: 0X8C8C8C });
    var hanger2 = new THREE.Mesh(cubeGeometry2, cubeMeterial, 2, 5);
    hanger2.castShadow = true;
    hanger2.position.x = _x_;
    hanger2.position.y = _y_ + 1.4; //-0.533
    hanger2.position.z = _z_;
	hanger2.rotateX(Math.PI/360 * (-120));

	// add object to projector group
	projector.add(hanger2);
}
// create projector hanger joint
function createProjectorLeftHangerJoint2(projector, _x_, _y_, _z_) {
	var geometry2 = new THREE.CylinderGeometry( 0.08, 0.08, 0.1, 32, 5 );
	var cylinderMaterial = new THREE.MeshPhongMaterial( {color: 0XD5D5D5} );
	var cylinder2 = new THREE.Mesh( geometry2, cylinderMaterial, 2, 5 );
	cylinder2.position.x = _x_;
	cylinder2.position.y = _y_ + 1.6;
	cylinder2.position.z = _z_ - 0.34;
	cylinder2.rotateZ(Math.PI/360 * 180);

	// add object to projector group
	projector.add( cylinder2 );
}
// create projector hanger
function createProjectorLeftHanger3(projector, _x_, _y_, _z_) {
	var cubeGeometry3 = new THREE.BoxGeometry(0.07, 1, 0.2);
	var cubeMeterial = new THREE.MeshPhongMaterial({ color: 0X8C8C8C });
    var hanger3 = new THREE.Mesh(cubeGeometry3, cubeMeterial, 2, 5);
    hanger3.castShadow = true;
    hanger3.position.x = _x_;
    hanger3.position.y = _y_ + 1.8;
    hanger3.position.z = _z_;
	hanger3.rotateX(Math.PI/360 * (120));

	// add object to projector group
	projector.add(hanger3);
}
// create projector cable
function createCable(projector, _x_, _y_, _z_, r, c) {
    var legPoints = [
        new THREE.Vector3(_x_ + 1, _y_ + 0.2, _z_ + 0.8),
        new THREE.Vector3(_x_ + 1.8, _y_ + 0.7, _z_ + 1),
		new THREE.Vector3(_x_, _y_ + 2, _z_ + 0.5),
        new THREE.Vector3(_x_ , _y_ + 2.5, _z_ + 0.5)
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
        pts.push(new THREE.Vector2(Math.cos(a) * r, Math.sin(a) * r));
    }
    var shape = new THREE.Shape(pts);
    var geometry = new THREE.ExtrudeBufferGeometry(shape, extrudeSettings);
    var material2 = new THREE.MeshPhongMaterial({ color: c, wireframe: false });
	var mesh = new THREE.Mesh(geometry, material2);
	        
    //add shadow
    mesh.castShadow = true;
    mesh.receiveShadow = true;

	// add object to projector group
    projector.add(mesh);
}

//-----------------------------------------------------------------------------------
function createSpotLight(a, b, c, intensity, p_x, p_y, p_z){
	var spotLight = new THREE.SpotLight(0x939393, intensity, 0, (Math.PI / 180 * 100));
    spotLight.position.set(a + p_x, b + p_y, c + p_z);
    spotLight.castShadow = true;
	spotLight.target.position.set(a + p_x, 0, c + p_z);
	spotLight.shadow.mapSize.width = 5120;
	spotLight.shadow.mapSize.height = 5120;
	return spotLight;
    // B208D.add(spotLight.target);
	// B208D.add(spotLight);
}
function createFluorescentBase0(B208D, a, b, c, intensity, p_x, p_y, p_z, scale) {
	var fluorescent = new THREE.Group();
    
	
	var geometry = new THREE.BoxGeometry( 0.1, 7, 2 );
	var material = new THREE.MeshBasicMaterial( { color: 0xEDEDED } );
	var cube = new THREE.Mesh( geometry, material );
	x_ = cube.position.x = a;
	y_ = cube.position.y = b;
	z_ = cube.position.z = c;

	cube.rotateZ(Math.PI/360 * 180);
	fluorescent.add(cube);

	 // call fluorescent creation functions
	createFluorescentBase1(fluorescent, x_, y_, z_);
	createFluorescentBase2(fluorescent, x_, y_, z_);
	createFluorescentBase3(fluorescent, x_, y_, z_);
	createFluorescentBase5(fluorescent, x_, y_, z_);
	createFluorescentBase6(fluorescent, x_, y_, z_);
	createFluorescentLamp0(fluorescent, x_, y_, z_);
	createFluorescentLamp1(fluorescent, x_, y_, z_);
	createFluorescentLampBase0(fluorescent, x_, y_, z_);
	createFluorescentLampBase1(fluorescent, x_, y_, z_);
	createFluorescentLampBase2(fluorescent, x_, y_, z_);
	createFluorescentLampBase3(fluorescent, x_, y_, z_);
	
	// group rotation and scaling, setting position
	fluorescent.rotateY(Math.PI / 180 * 90);
	fluorescent.scale.set(scale, scale, scale);
	fluorescent.position.set(p_x, p_y, p_z);

	// add fluorescent group to B208D group
	B208D.add(fluorescent);
}
// create fluorescent base
function createFluorescentBase1(fluorescent, _x_, _y_, _z_) {
	var geometry = new THREE.BoxGeometry( 0.25, 7, 0.2 );
	var material = new THREE.MeshBasicMaterial( { color: 0xEDEDED } );
	var cube = new THREE.Mesh( geometry, material );

	// object rotation and set position
	cube.position.x = _x_;
	cube.position.y = _y_ - 0.18;
	cube.position.z = _z_ - 0.9;
	cube.rotateZ(Math.PI/360 * 180);

	// add obejct to fluorescent group
	fluorescent.add(cube);
}
function createFluorescentBase2(fluorescent, _x_, _y_, _z_) {
	var geometry = new THREE.BoxGeometry( 0.25, 7, 0.2 );
	var material = new THREE.MeshBasicMaterial( { color: 0xEDEDED } );
	var cube = new THREE.Mesh( geometry, material );

	// object rotation and set position
	cube.position.x = _x_;
	cube.position.y = _y_ - 0.18;
	cube.position.z = _z_ + 0.9;
	cube.rotateZ(Math.PI/360 * 180);

	// add obejct to fluorescent group
	fluorescent.add(cube);
}
// create fluorescent base
function createFluorescentBase3(fluorescent, _x_, _y_, _z_) {
	var geometry = new THREE.CylinderGeometry( 0.28, 0.28, 7, 4, 1, false, 3.15, 3.15 );
	var material = new THREE.MeshBasicMaterial( { color: 0xC9C9C9,  metalness: 0.1, roughness: 0} );
	var cylinder = new THREE.Mesh( geometry, material );

	// object rotation and set position
	cylinder.position.x = _x_;
	cylinder.position.y = _y_ - 0.02;
	cylinder.position.z = _z_;
	cylinder.rotateZ(Math.PI/360 * 180);

	// add obejct to fluorescent group
	fluorescent.add(cylinder);
}
// create fluorescent base
function createFluorescentBase5(fluorescent, _x_, _y_, _z_) {
	var geometry = new THREE.BoxGeometry( 0.2, 0.27, 2 );
	var material = new THREE.MeshBasicMaterial( { color: 0xEDEDED } );
	var cube = new THREE.Mesh( geometry, material );

	// set object position
	cube.position.x = _x_ + 3.4;
	cube.position.y = _y_ - 0.17;
	cube.position.z = _z_;

	// add obejct to fluorescent group
	fluorescent.add(cube);
}
// create fluorescent base
function createFluorescentBase6(fluorescent, _x_, _y_, _z_) {
	var geometry = new THREE.BoxGeometry( 0.2, 0.27, 2 );
	var material = new THREE.MeshBasicMaterial( { color: 0xEDEDED } );
	var cube = new THREE.Mesh( geometry, material );

    // set object position
	cube.position.x = _x_ - 3.4;
	cube.position.y = _y_ - 0.17;
	cube.position.z = _z_;

	// add obejct to fluorescent group
	fluorescent.add(cube);
}
// create fluorescent lamp
function createFluorescentLamp0(fluorescent, _x_, _y_, _z_) {
	var geometry = new THREE.CylinderGeometry( 0.1, 0.1, 6.7, 32, 5 );
	var cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0xFFFFFF} );
	var cylinder = new THREE.Mesh( geometry, cylinderMaterial, 2, 5 );

	// object rotation and set position
	cylinder.position.x = _x_;
	cylinder.position.y = _y_ - 0.18;
	cylinder.position.z = _z_ + 0.55;
	cylinder.rotateZ(Math.PI/360 * 180);

	// add obejct to fluorescent group
	fluorescent.add(cylinder);
}
// create fluorescent lamp
function createFluorescentLamp1(fluorescent, _x_, _y_, _z_) {
	var geometry = new THREE.CylinderGeometry( 0.1, 0.1, 6.7, 32, 5 );
	var cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0xFFFFFF} );
	var cylinder = new THREE.Mesh( geometry, cylinderMaterial, 2, 5 );

	// object rotation and set position
	cylinder.position.x = _x_;
	cylinder.position.y = _y_ - 0.18;
	cylinder.position.z = _z_ - 0.55;
	cylinder.rotateZ(Math.PI/360 * 180);

	// add obejct to fluorescent group
	fluorescent.add(cylinder);
}
// create fluorescent lamp base
function createFluorescentLampBase0(fluorescent, _x_, _y_, _z_) {
	var geometry = new THREE.CylinderGeometry( 0.13, 0.13, 0.15, 32, 5 );
	var cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0xC9C9C9 } );
	var cylinder = new THREE.Mesh( geometry, cylinderMaterial, 2, 5 );

	// object rotation and set position
	cylinder.position.x = _x_ + 3.23;
	cylinder.position.y = _y_ - 0.18;
	cylinder.position.z = _z_ + 0.55;
	cylinder.rotateZ(Math.PI/360 * 180);

	// add obejct to fluorescent group
	fluorescent.add(cylinder);
}
// create fluorescent lamp base
function createFluorescentLampBase1(fluorescent, _x_, _y_, _z_) {
	var geometry = new THREE.CylinderGeometry( 0.13, 0.13, 0.15, 32, 5 );
	var cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0xC9C9C9 } );
	var cylinder = new THREE.Mesh( geometry, cylinderMaterial, 2, 5 );

	// object rotation and set position
	cylinder.position.x = _x_ - 3.23;
	cylinder.position.y = _y_ - 0.18;
	cylinder.position.z = _z_ + 0.55;
	cylinder.rotateZ(Math.PI/360 * 180);

	// add obejct to fluorescent group
	fluorescent.add(cylinder);
}
// create fluorescent lamp base
function createFluorescentLampBase2(fluorescent, _x_, _y_, _z_) {
	var geometry = new THREE.CylinderGeometry( 0.13, 0.13, 0.15, 32, 5 );
	var cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0xC9C9C9 } );
	var cylinder = new THREE.Mesh( geometry, cylinderMaterial, 2, 5 );

	// object rotation and set position
	cylinder.position.x = _x_ + 3.23;
	cylinder.position.y = _y_ - 0.18;
	cylinder.position.z = _z_ - 0.55;
	cylinder.rotateZ(Math.PI/360 * 180);

	// add obejct to fluorescent group
	fluorescent.add(cylinder);
}
// create fluorescent lamp base
function createFluorescentLampBase3(fluorescent, _x_, _y_, _z_) {
	var geometry = new THREE.CylinderGeometry( 0.13, 0.13, 0.15, 32, 5 );
	var cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0xC9C9C9 } );
	var cylinder = new THREE.Mesh( geometry, cylinderMaterial, 2, 5 );

	// object rotation and set position
	cylinder.position.x = _x_ - 3.23;
	cylinder.position.y = _y_ - 0.18;
	cylinder.position.z = _z_ - 0.55;
	cylinder.rotateZ(Math.PI/360 * 180);

	// add obejct to fluorescent group
	fluorescent.add(cylinder);
}

