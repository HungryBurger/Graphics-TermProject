function makeWhiteboard(scene)
{
    var xlen=35, ylen=10, zlen=0.5;
    var whiteboardGeometry = new THREE.BoxGeometry(xlen, ylen, zlen); //7:2:0.2
    var whiteboardMeterial = new THREE.MeshPhongMaterial({ color: 0xffffff});
    var whiteboard = new THREE.Mesh(whiteboardGeometry, whiteboardMeterial);
    whiteboardGeometry.verticesNeedUpdate=true;
    
    whiteboard.castShadow = true;
    whiteboard.position.x = 0;
    whiteboard.position.y = 0;
    whiteboard.position.z = 0;
    scene.add(whiteboard);
    makeSideBoardframe(scene,xlen,ylen,zlen,whiteboard.position.x,whiteboard.position.y,whiteboard.position.z);
    makeUpdownBoardframe(scene,xlen,ylen,zlen,whiteboard.position.x,whiteboard.position.y,whiteboard.position.z);
    makeEdge(scene,xlen,ylen,zlen,whiteboard.position.x,whiteboard.position.y,whiteboard.position.z);
    // makeSideHinge(scene,whiteboard.position.x+xlen/2,whiteboard.position.y,zlen,whiteboard.position.z);
    // makeSideHinge(scene,whiteboard.position.x-xlen/2,whiteboard.position.y,zlen,whiteboard.position.z);
    // makeUpdownHinge(scene,whiteboard.position.x,whiteboard.position.y+ylen/2,zlen,whiteboard.position.z);
    // makeUpdownHinge(scene,whiteboard.position.x,whiteboard.position.y-ylen/2,zlen,whiteboard.position.z);
    return whiteboard;
}

function makeSideBoardframe(scene,x,y,z,xPos,yPos,zPos)
{
    var xlen=0.5,ylen=y,zlen=2;
    var boardframeGeometry = new THREE.BoxGeometry(xlen,ylen,zlen);
    var boardframeMeterial = new THREE.MeshPhongMaterial({color: 0x9a9488});
    boardframeMeterial.castShadow= true;
    var boardframe1 = new THREE.Mesh(boardframeGeometry,boardframeMeterial);
    boardframe1.position.x= xPos+x/2+xlen/2;
    boardframe1.position.y = yPos;
    boardframe1.position.z = zPos-(z-zlen)/2;
    var boardframe2 = new THREE.Mesh(boardframeGeometry,boardframeMeterial);
    boardframe2.position.x= xPos-x/2-xlen/2;
    boardframe2.position.y = yPos;
    boardframe2.position.z = zPos-(z-zlen)/2;
    scene.add(boardframe1);
    scene.add(boardframe2);
}

function makeUpdownBoardframe(scene,x,y,z,xPos,yPos,zPos)
{
    var xlen=x,ylen=0.5,zlen=2;
    var boardframeGeometry = new THREE.BoxGeometry(xlen,ylen,zlen);
    var boardframeMeterial = new THREE.MeshPhongMaterial({color: 0x9a9488});
    boardframeMeterial.castShadow= true;
    var boardframe1 = new THREE.Mesh(boardframeGeometry,boardframeMeterial);
    boardframe1.position.x= xPos;
    boardframe1.position.y = yPos+y/2+ylen/2;
    boardframe1.position.z = zPos-(z-zlen)/2;
    var boardframe2 = new THREE.Mesh(boardframeGeometry,boardframeMeterial);
    boardframe2.position.x= xPos;
    boardframe2.position.y = yPos-y/2-ylen/2;
    boardframe2.position.z = zPos-(z-zlen)/2;
    scene.add(boardframe1);
    scene.add(boardframe2);
}

function makeEdge(scene,x,y,z,xPos,yPos,zPos)
{
    var radius=0.5;
    var geometry1 = new THREE.CylinderGeometry( radius,radius,2,32,1,false,0,Math.PI/2 );
    var material1 = new THREE.MeshBasicMaterial( {color: 0x715a38} );
    var cylinder1 = new THREE.Mesh( geometry1, material1 );
    cylinder1.rotation.x=Math.PI/180 * 90;
    cylinder1.position.x=xPos+x/2;
    cylinder1.position.y=yPos-y/2;
    cylinder1.position.z=zPos+1.5*z;
    scene.add( cylinder1 );

    var geometry2 = new THREE.CylinderGeometry( radius,radius,2,32,1,false,Math.PI/2,Math.PI/2 );
    var material2 = new THREE.MeshBasicMaterial( {color: 0x715a38} );
    var cylinder2 = new THREE.Mesh( geometry2, material2 );
    cylinder2.rotation.x=Math.PI/180 * 90;
    cylinder2.position.x=xPos+x/2;
    cylinder2.position.y=yPos+y/2;
    cylinder2.position.z=zPos+1.5*z;
    scene.add( cylinder2 );

    var geometry3 = new THREE.CylinderGeometry( radius,radius,2,32,1,false,Math.PI,Math.PI/2 );
    var material3 = new THREE.MeshBasicMaterial( {color: 0x715a38} );
    var cylinder3 = new THREE.Mesh( geometry3, material3 );
    cylinder3.rotation.x=Math.PI/180 * 90;
    cylinder3.position.x=xPos-x/2;
    cylinder3.position.y=yPos+y/2;
    cylinder3.position.z=zPos+1.5*z;
    scene.add( cylinder3 );

    var geometry4 = new THREE.CylinderGeometry( radius,radius,2,32,1,false,1.5*Math.PI,Math.PI/2 );
    var material4 = new THREE.MeshBasicMaterial( {color: 0x715a38} );
    var cylinder4 = new THREE.Mesh( geometry4, material4 );
    cylinder4.rotation.x=Math.PI/180 * 90;
    cylinder4.position.x=xPos-x/2;
    cylinder4.position.y=yPos-y/2;
    cylinder4.position.z=zPos+1.5*z;
    scene.add( cylinder4 );
}

function makeSideHinge(scene,x,y,z,zPos)
{
    var zlen=0.2;
    var boardframeGeometry = new THREE.BoxGeometry(0.25,10,zlen);
    var boardframeMeterial = new THREE.MeshPhongMaterial({color: 0xCCCCCC});
    var boardframe = new THREE.Mesh(boardframeGeometry,boardframeMeterial);
    boardframeMeterial.castShadow= true;
    boardframe.position.x= x;
    boardframe.position.y = y;
    boardframe.position.z = zPos-(z-zlen)/2;
    scene.add(boardframe);
}

function makeUpdownHinge(scene,x,y,z,zPos)
{
    var zlen=0.2;
    var boardframeGeometry = new THREE.BoxGeometry(35,0.25,zlen);
    var boardframeMeterial = new THREE.MeshPhongMaterial({color: 0xCCCCCC});
    var boardframe = new THREE.Mesh(boardframeGeometry,boardframeMeterial);
    boardframeMeterial.castShadow= true;
    boardframe.position.x= x;
    boardframe.position.y = y;
    boardframe.position.z = zPos-(z-zlen)/2;
    scene.add(boardframe);
}