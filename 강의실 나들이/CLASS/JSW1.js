var group = new THREE.Group();

function createProjectorBody0(scene) {

	/**var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
	camera.position.set( 5, 5, 30 );
	var renderer = new THREE.WebGLRenderer({
	  antialias: true
	});
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );**/

	//var controls = new THREE.OrbitControls( camera, renderer.domElement );

	//var dirLight = new THREE.DirectionalLight( 0xffffff );
	//dirLight.position.set( -10, 10, 10 );
	//scene.add( dirLight );

	/**var loader = new THREE.CubeTextureLoader();
	loader.setCrossOrigin( "" );
	loader.setPath( 'https://threejs.org/examples/textures/cube/pisa/' );**/

	/**var cubeTexture = loader.load( [
	  'px.png', 'nx.png',
	  'py.png', 'ny.png',
	  'pz.png', 'nz.png'
	] );**/

	//scene.background = cubeTexture;

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

	 let cubeMat = new THREE.MeshStandardMaterial( {
		color: 0xEAEAEA,
		//envMap: cubeTexture,
		metalness: 0,
		roughness: 0,
	 } );

	 let cube = new THREE.Mesh( createBoxWithRoundedEdges0( 2.5, 1, 2, 0.5 / 9, 16 ), cubeMat );
	 cube.scale.setScalar( 1.25 );
	 x_ = cube.position.x = 0;
	 y_ = cube.position.y = 10;
	 z_ = cube.position.z = 0;
	 scene.add( cube );
	
	 createProjectorBody1(scene, x_, y_, z_);
	 createProjectorCamera(scene, x_, y_, z_);

	 createProjectorLeftHanger0(scene, x_ - 0.5, y_, z_);
	 createProjectorLeftHangerJoint0(scene, x_ - 0.5, y_, z_);
	 createProjectorLeftHanger1(scene, x_ - 0.5, y_, z_);
	 createProjectorLeftHangerJoint1(scene, x_ - 0.5, y_, z_);
	 createProjectorLeftHanger2(scene, x_- 0.5, y_, z_);
	 createProjectorLeftHangerJoint2(scene, x_ - 0.5, y_, z_);
	 createProjectorLeftHanger3(scene, x_ - 0.5, y_, z_);

	 createProjectorLeftHanger0(scene, x_ + 0.5, y_, z_);
	 createProjectorLeftHangerJoint0(scene, x_ + 0.5, y_, z_);
	 createProjectorLeftHanger1(scene, x_ + 0.5, y_, z_);
	 createProjectorLeftHangerJoint1(scene, x_ + 0.5, y_, z_);
	 createProjectorLeftHanger2(scene, x_ + 0.5, y_, z_);
	 createProjectorLeftHangerJoint2(scene, x_ + 0.5, y_, z_);
	 createProjectorLeftHanger3(scene, x_ + 0.5, y_, z_);

	 createCable(scene, x_, y_, z_, 0.02, 0x2457B);
	 createCable(scene, x_, y_, z_ - 0.2, 0.03, 0xED0000);
	 
	 createFluorescentBase0(scene, x_, y_, z_);
	 createFluorescentBase1(scene, x_, y_, z_);
	 createFluorescentBase2(scene, x_, y_, z_);
	 createFluorescentBase3(scene, x_, y_, z_);
	 //createFluorescentBase4(scene, x_, y_, z_);
	 createFluorescentBase5(scene, x_, y_, z_);
	 createFluorescentBase6(scene, x_, y_, z_);
	 createFluorescentLamp0(scene, x_, y_, z_);
	 createFluorescentLamp1(scene, x_, y_, z_);
	 createFluorescentLampBase(scene, x_, y_, z_);
	 
	 group.scale.set(2, 2, 2);
	 group.position.y = -15;
	 scene.add(group);

}

function createProjectorBody1(scene, _x_, _y_, _z_) {
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
	//envMap: cubeTexture,
	metalness: 0,
	roughness: 0,
	 } );
	 let cube = new THREE.Mesh( createBoxWithRoundedEdges1( 2.2, 0.5, 1.7, 0.3 / 9, 16 ), cubeMat );
	 cube.scale.setScalar( 1.25 );
	 cube.position.x = _x_;
	 cube.position.y = _y_ + 0.4;
	 cube.position.z = _z_;
	 scene.add( cube );
}

function createProjectorCamera(scene, _x_, _y_, _z_) {
	
	var geometry = new THREE.CylinderGeometry( 0.5, 0.5, 2, 32, 5 );
	var cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0XD5D5D5} );
	var cylinder = new THREE.Mesh( geometry, cylinderMaterial, 2, 5 );
	cylinder.position.x = _x_ + 0.6; //0, 10, 10
	cylinder.position.y = _y_;
	cylinder.position.z = _z_ - 0.35;
	cylinder.rotateX(Math.PI/360 * 180);
	scene.add( cylinder );
}
function createProjectorLeftHanger0(scene, _x_, _y_, _z_) {
	/**var light = new THREE.PointLight( 0xFFFFFF, 1, 50 );
	light.position.set( -0.5, 20, 10.5 );
	scene.add( light );**/
	var cubeGeometry0 = new THREE.BoxGeometry(0.07, 0.5, 0.2);
    var cubeMeterial = new THREE.MeshPhongMaterial({ color: 0X8C8C8C });
    var hanger0 = new THREE.Mesh(cubeGeometry0, cubeMeterial, 2, 5);
    hanger0.castShadow = true;
    hanger0.position.x = _x_;
    hanger0.position.y = _y_ + 0.7;
    hanger0.position.z = _z_ - 0.34;
	scene.add(hanger0);
}
function createProjectorLeftHangerJoint0(scene, _x_, _y_, _z_) {
	var geometry0 = new THREE.CylinderGeometry( 0.08, 0.08, 0.1, 32, 5 );
	var cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0XD5D5D5} );
	var cylinder0 = new THREE.Mesh( geometry0, cylinderMaterial, 2, 5 );
	cylinder0.position.x = _x_;
	cylinder0.position.y = _y_ + 0.8;
	cylinder0.position.z = _z_ - 0.34;
	cylinder0.rotateZ(Math.PI/360 * 180);
	scene.add( cylinder0 );
}
function createProjectorLeftHanger1(scene, _x_, _y_, _z_) {
	var cubeGeometry1 = new THREE.BoxGeometry(0.07, 1, 0.2);
    var cubeMeterial = new THREE.MeshPhongMaterial({ color: 0X8C8C8C });
    var hanger1 = new THREE.Mesh(cubeGeometry1, cubeMeterial, 2, 5);
    hanger1.position.x = _x_;
    hanger1.position.y = _y_ + 1;
    hanger1.position.z = _z_;
	hanger1.rotateX(Math.PI/360 * (120));
	scene.add(hanger1);
}
function createProjectorLeftHangerJoint1(scene, _x_, _y_, _z_) {
	var geometry1 = new THREE.CylinderGeometry( 0.08, 0.08, 0.1, 32, 5 );
	var cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0XD5D5D5} );
	var cylinder1 = new THREE.Mesh( geometry1, cylinderMaterial, 2, 5 );
	cylinder1.position.x = _x_;
	cylinder1.position.y = _y_ + 1.2;
	cylinder1.position.z = _z_ + 0.34;
	cylinder1.rotateZ(Math.PI/360 * 180);
	scene.add( cylinder1 );
}
function createProjectorLeftHanger2(scene, _x_, _y_, _z_) {
	var cubeGeometry2 = new THREE.BoxGeometry(0.07, 1, 0.2);
	var cubeMeterial = new THREE.MeshPhongMaterial({ color: 0X8C8C8C });
    var hanger2 = new THREE.Mesh(cubeGeometry2, cubeMeterial, 2, 5);
    hanger2.castShadow = true;
    hanger2.position.x = _x_;
    hanger2.position.y = _y_ + 1.4; //-0.533
    hanger2.position.z = _z_;
	hanger2.rotateX(Math.PI/360 * (-120));
	scene.add(hanger2);
}
function createProjectorLeftHangerJoint2(scene, _x_, _y_, _z_) {
	var geometry2 = new THREE.CylinderGeometry( 0.08, 0.08, 0.1, 32, 5 );
	var cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0XD5D5D5} );
	var cylinder2 = new THREE.Mesh( geometry2, cylinderMaterial, 2, 5 );
	cylinder2.position.x = _x_; //-0.3
	cylinder2.position.y = _y_ + 1.6; //-0.237
	cylinder2.position.z = _z_ - 0.34;
	cylinder2.rotateZ(Math.PI/360 * 180);
	scene.add( cylinder2 );
}
function createProjectorLeftHanger3(scene, _x_, _y_, _z_) {
	var cubeGeometry3 = new THREE.BoxGeometry(0.07, 1, 0.2);
	var cubeMeterial = new THREE.MeshPhongMaterial({ color: 0X8C8C8C });
    var hanger3 = new THREE.Mesh(cubeGeometry3, cubeMeterial, 2, 5);
    hanger3.castShadow = true;
    hanger3.position.x = _x_;
    hanger3.position.y = _y_ + 1.8;
    hanger3.position.z = _z_;
	hanger3.rotateX(Math.PI/360 * (120));
	scene.add(hanger3);
}

function createCable(scene, _x_, _y_, _z_, r, c) {
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
    var material2 = new THREE.MeshLambertMaterial({ color: c, wireframe: false });
    var mesh = new THREE.Mesh(geometry, material2);
    scene.add(mesh);
}

//-----------------------------------------------------------------------------------

function createFluorescentBase0(scene, _x_, _y_, _z_) {
	var geometry = new THREE.BoxGeometry( 0.1, 7, 2 );
	var material = new THREE.MeshBasicMaterial( { color: 0xBDBDBD } );
	var cube = new THREE.Mesh( geometry, material );
	cube.position.x = _x_;
	cube.position.y = _y_ + 6;
	cube.position.z = _z_;
	cube.rotateZ(Math.PI/360 * 180);
		group.add(cube);
	//scene.add( cube );
}

function createFluorescentBase1(scene, _x_, _y_, _z_) {
	var geometry = new THREE.BoxGeometry( 0.25, 7, 0.2 );
	var material = new THREE.MeshBasicMaterial( { color: 0x5D5D5D } );
	var cube = new THREE.Mesh( geometry, material );
	cube.position.x = _x_;
	cube.position.y = _y_ + 5.8;
	cube.position.z = _z_ - 0.9;
	cube.rotateZ(Math.PI/360 * 180);
		group.add(cube);
	//scene.add( cube );
}
function createFluorescentBase2(scene, _x_, _y_, _z_) {
	var geometry = new THREE.BoxGeometry( 0.25, 7, 0.2 );
	var material = new THREE.MeshBasicMaterial( { color: 0x5D5D5D } );
	var cube = new THREE.Mesh( geometry, material );
	cube.position.x = _x_;
	cube.position.y = _y_ + 5.8;
	cube.position.z = _z_ + 0.9;
	cube.rotateZ(Math.PI/360 * 180);
		group.add(cube);
	//scene.add( cube );
}
function createFluorescentBase3(scene, _x_, _y_, _z_) {
	var geometry = new THREE.CylinderGeometry( 0.28, 0.28, 7, 4, 1, false, 3.15, 3.15 );
	var material = new THREE.MeshStandardMaterial( { color: 0xFCFCFC,  metalness: 0.1, roughness: 0} );
	var cylinder = new THREE.Mesh( geometry, material );
	cylinder.position.x = _x_;
	cylinder.position.y = _y_ + 5.96;
	cylinder.position.z = _z_;
	cylinder.rotateZ(Math.PI/360 * 180);
		group.add(cylinder);
	//scene.add( cylinder );
}
/**function createFluorescentBase4(scene, _x_, _y_, _z_) {
	var geometry = new THREE.CylinderGeometry( 0.43, 0.43, 7, 4, 1, true, 6, 2.5 );
	var material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
	var cylinder = new THREE.Mesh( geometry, material );
	cylinder.position.x = _x_;
	cylinder.position.y = _y_ + 5.6;
	cylinder.position.z = _z_ + 0.37;
	cylinder.rotateZ(Math.PI/360 * 180);
	scene.add( cylinder );
}**/
function createFluorescentBase5(scene, _x_, _y_, _z_) {
	var geometry = new THREE.BoxGeometry( 0.2, 0.27, 2 );
	var material = new THREE.MeshBasicMaterial( { color: 0x5D5D5D } );
	var cube = new THREE.Mesh( geometry, material );
	cube.position.x = _x_ + 3.4;
	cube.position.y = _y_ + 5.81;
	cube.position.z = _z_;
		group.add(cube);
	//scene.add( cube );
}
function createFluorescentBase6(scene, _x_, _y_, _z_) {
	var geometry = new THREE.BoxGeometry( 0.2, 0.27, 2 );
	var material = new THREE.MeshBasicMaterial( { color: 0x5D5D5D } );
	var cube = new THREE.Mesh( geometry, material );
	cube.position.x = _x_ - 3.4;
	cube.position.y = _y_ + 5.81;
	cube.position.z = _z_;
		group.add(cube);
	//scene.add( cube );
}
function createFluorescentLamp0(scene, _x_, _y_, _z_) {
	var geometry = new THREE.CylinderGeometry( 0.1, 0.1, 6.7, 32, 5 );
	var cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0xFFFFFF} );
	var cylinder = new THREE.Mesh( geometry, cylinderMaterial, 2, 5 );
	cylinder.position.x = _x_;
	cylinder.position.y = _y_ + 5.8;
	cylinder.position.z = _z_ + 0.55;
	cylinder.rotateZ(Math.PI/360 * 180);
		group.add(cylinder);
	//scene.add( cylinder );
}
function createFluorescentLamp1(scene, _x_, _y_, _z_) {
	var geometry = new THREE.CylinderGeometry( 0.1, 0.1, 6.7, 32, 5 );
	var cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0xFFFFFF} );
	var cylinder = new THREE.Mesh( geometry, cylinderMaterial, 2, 5 );
	cylinder.position.x = _x_;
	cylinder.position.y = _y_ + 5.8;
	cylinder.position.z = _z_ - 0.55;
	cylinder.rotateZ(Math.PI/360 * 180);
		group.add(cylinder);
	//scene.add( cylinder );
}
function createFluorescentLampBase(scene, _x_, _y_, _z_) {
	var geometry = new THREE.CylinderGeometry( 0.15, 0.15, 1, 32, 5 );
	var cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0x000000} );
	var cylinder = new THREE.Mesh( geometry, cylinderMaterial, 2, 5 );
	cylinder.position.x = _x_;
	cylinder.position.y = _y_ + 5.8;
	cylinder.position.z = _z_ - 0.55;
	cylinder.rotateZ(Math.PI/360 * 180);
		group.add(cylinder);
	//scene.add( cylinder );
}

