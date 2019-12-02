// Make Whiteboard
function makeWhiteboard(B208D, x, y, z, scale)
{
    var createWhiteBoard = new THREE.Group();
    var xlen=35, ylen=10, zlen=0.125;
    var whiteboardGeometry = new THREE.BoxGeometry(xlen, ylen, zlen); //7:2:0.2
    var whiteboardMeterial = new THREE.MeshPhongMaterial({ color: 0xffffff});
    var whiteboard = new THREE.Mesh(whiteboardGeometry, whiteboardMeterial);
    
    whiteboard.castShadow = true;
    whiteboard.position.x = 0;
    whiteboard.position.y = 0;
    whiteboard.position.z = -20;
    createWhiteBoard.add(whiteboard);
    makeSideBoardframe(createWhiteBoard,xlen,ylen,zlen,whiteboard.position.x,whiteboard.position.y,whiteboard.position.z);
    makeUpdownBoardframe(createWhiteBoard,xlen,ylen,zlen,whiteboard.position.x,whiteboard.position.y,whiteboard.position.z);
    makeEdge(createWhiteBoard,xlen,ylen,zlen,whiteboard.position.x,whiteboard.position.y,whiteboard.position.z);
   
    var plane=new THREE.PlaneGeometry(ylen,xlen,0,xlen*2);
    for(let i=0; i<plane.vertices.length/2; i++) {
        plane.vertices[2*i].z = -Math.sqrt(Math.pow(102.8,2)-Math.pow(-17.5+i/2,2))+103;
        plane.vertices[2*i+1].z = -Math.sqrt(Math.pow(102.8,2)-Math.pow(-17.5+i/2,2))+103;
      }
    mesh=new THREE.Mesh(plane,new THREE.MeshPhongMaterial({color:0xffffff}));
    mesh.doubleSided=true;
    mesh.rotation.z=Math.PI/180*90;
    mesh.position.x=whiteboard.position.x;
    mesh.position.y=whiteboard.position.y;
    mesh.position.z=whiteboard.position.z;
    
    createWhiteBoard.add(mesh);
    createWhiteBoard.rotateY(Math.PI/180 * 90);
    createWhiteBoard.scale.set(scale, scale, scale);
    createWhiteBoard.position.set(x, y, z);
    B208D.add(createWhiteBoard);
}

function makeSideBoardframe(createWhiteBoard,x,y,z,xPos,yPos,zPos)
{
    var xlen=0.5,ylen=y,zlen=2.5;
    var boardframeGeometry = new THREE.BoxGeometry(xlen,ylen,zlen);
    var boardframeMeterial = new THREE.MeshPhongMaterial({color: 0x948d82});
    boardframeMeterial.castShadow= true;
    var boardframe1 = new THREE.Mesh(boardframeGeometry,boardframeMeterial);
    boardframe1.position.x= xPos+x/2+xlen/2;
    boardframe1.position.y = yPos;
    boardframe1.position.z = zPos-(z-zlen)/2;
    var boardframe2 = new THREE.Mesh(boardframeGeometry,boardframeMeterial);
    boardframe2.position.x= xPos-x/2-xlen/2;
    boardframe2.position.y = yPos;
    boardframe2.position.z = zPos-(z-zlen)/2;
    createWhiteBoard.add(boardframe1);
    createWhiteBoard.add(boardframe2);
}

function makeUpdownBoardframe(createWhiteBoard,x,y,z,xPos,yPos,zPos)
{
    var xlen=x,ylen=0.5,zlen=2.5;
    var boardframeGeometry = new THREE.BoxGeometry(xlen,ylen,zlen);
    var boardframeMeterial = new THREE.MeshPhongMaterial({color: 0x948d82});
    boardframeMeterial.castShadow= true;
    var boardframe1 = new THREE.Mesh(boardframeGeometry,boardframeMeterial);
    boardframe1.position.x= xPos;
    boardframe1.position.y = yPos+y/2+ylen/2;
    boardframe1.position.z = zPos-(z-zlen)/2;
    var boardframe2 = new THREE.Mesh(boardframeGeometry,boardframeMeterial);
    boardframe2.position.x= xPos;
    boardframe2.position.y = yPos-y/2-ylen/2;
    boardframe2.position.z = zPos-(z-zlen)/2;
    createWhiteBoard.add(boardframe1);
    createWhiteBoard.add(boardframe2);
}

function makeEdge(createWhiteBoard,x,y,z,xPos,yPos,zPos)
{
    var radius=0.5;
    var geometry1 = new THREE.CylinderGeometry( radius,radius,2.5,32,1,false,0,Math.PI/2 );
    var material1 = new THREE.MeshPhongMaterial( {color: 0x715d3c} );
    var cylinder1 = new THREE.Mesh( geometry1, material1 );
    cylinder1.rotation.x=Math.PI/180 * 90;
    cylinder1.position.x=xPos+x/2;
    cylinder1.position.y=yPos-y/2;
    cylinder1.position.z=zPos+9.5*z;
    createWhiteBoard.add( cylinder1 );

    var geometry2 = new THREE.CylinderGeometry( radius,radius,2.5,32,1,false,Math.PI/2,Math.PI/2 );
    var material2 = new THREE.MeshPhongMaterial( {color: 0x715a38} );
    var cylinder2 = new THREE.Mesh( geometry2, material2 );
    cylinder2.rotation.x=Math.PI/180 * 90;
    cylinder2.position.x=xPos+x/2;
    cylinder2.position.y=yPos+y/2;
    cylinder2.position.z=zPos+9.5*z;
    createWhiteBoard.add( cylinder2 );

    var geometry3 = new THREE.CylinderGeometry( radius,radius,2.5,32,1,false,Math.PI,Math.PI/2 );
    var material3 = new THREE.MeshPhongMaterial( {color: 0x715a38} );
    var cylinder3 = new THREE.Mesh( geometry3, material3 );
    cylinder3.rotation.x=Math.PI/180 * 90;
    cylinder3.position.x=xPos-x/2;
    cylinder3.position.y=yPos+y/2;
    cylinder3.position.z=zPos+9.5*z;
    createWhiteBoard.add( cylinder3 );

    var geometry4 = new THREE.CylinderGeometry( radius,radius,2.5,32,1,false,1.5*Math.PI,Math.PI/2 );
    var material4 = new THREE.MeshPhongMaterial( {color: 0x715a38} );
    var cylinder4 = new THREE.Mesh( geometry4, material4 );
    cylinder4.rotation.x=Math.PI/180 * 90;
    cylinder4.position.x=xPos-x/2;
    cylinder4.position.y=yPos-y/2;
    cylinder4.position.z=zPos+9.5*z;
    createWhiteBoard.add( cylinder4 );
}

// Make Lecture Desk
function makeLectureDesk(B208D, x, y, z)
{
    var createLectureDesk = new THREE.Group();
    var xlen=7.5, ylen=7.5, zlen=6;
    var lectureDeskGeometry = new THREE.BoxGeometry(xlen, ylen, zlen); //7:2:0.2
    var lectureDeskMeterial = new THREE.MeshPhongMaterial({ color: 0xb0b2b2});
    var lectureDesk = new THREE.Mesh(lectureDeskGeometry, lectureDeskMeterial);
    
    lectureDesk.castShadow = true;
    lectureDesk.position.x = -20;
    lectureDesk.position.y = -5.5;
    lectureDesk.position.z = -5;
    createLectureDesk.add(lectureDesk);

    var box1Geometry = new THREE.BoxGeometry(xlen, 1.5, 1.875); //7:2:0.2
    var box1Material = new THREE.MeshPhongMaterial({ color: 0xb0b2b2});
    var box1 = new THREE.Mesh(box1Geometry, box1Material);
    box1.position.x=lectureDesk.position.x;
    box1.position.y=lectureDesk.position.y+ylen/2+1.5/2;
    box1.position.z=lectureDesk.position.z+zlen/2-1.875/2;
    createLectureDesk.add(box1);

    // Quarter cylinder of Lecture desk
    var cylinder1Geometry=new THREE.CylinderGeometry(1.875,1.875,7.5,32,1,false,0,Math.PI/2 );
    var cylinder1Material = new THREE.MeshPhongMaterial( {color: 0xb0b2b2} );
    var cylinder1 = new THREE.Mesh( cylinder1Geometry, cylinder1Material );
    cylinder1.rotation.z=Math.PI/180 * 90;
    cylinder1.position.x=box1.position.x;
    cylinder1.position.y=box1.position.y+1.5/2;
    cylinder1.position.z=box1.position.z-1.875/2;
    cylinder1.openEnded=false;
    createLectureDesk.add( cylinder1 );

    var monitorGeometry= new THREE.BoxGeometry(7, 0.25, 4); //7:2:0.2
    var monitorMaterial=new THREE.MeshPhongMaterial({color:0x000000});
    var monitor=new THREE.Mesh(monitorGeometry,monitorMaterial);
    monitor.position.x=lectureDesk.position.x;
    monitor.position.y=cylinder1.position.y+1.875/2;
    monitor.position.z=lectureDesk.position.z-1.875;
    createLectureDesk.add(monitor);

    // Side1 of Lecture Desk
    var box2Geometry= new THREE.BoxGeometry(0.25,6.5,6);
    var box2Material=new THREE.MeshPhongMaterial({color:0xb0b2b2});
    var box2=new THREE.Mesh(box2Geometry,box2Material);
    box2.position.x=lectureDesk.position.x+7.5/2-0.25/2;
    box2.position.y=lectureDesk.position.y+2;
    box2.position.z=lectureDesk.position.z-0.8;
    box2.rotation.x=-Math.PI/180*15;
    createLectureDesk.add(box2);

    var box3Geometry= new THREE.BoxGeometry(0.25,6.5,6);
    var box3Material=new THREE.MeshPhongMaterial({color:0xb0b2b2});
    var box3=new THREE.Mesh(box3Geometry,box3Material);
    box3.position.x=lectureDesk.position.x-7.5/2+0.25/2;
    box3.position.y=lectureDesk.position.y+2;
    box3.position.z=lectureDesk.position.z-0.8;
    box3.rotation.x=-Math.PI/180*15;
    createLectureDesk.add(box3);

    // Side2 of Lecture Desk
    var box4Geometry= new THREE.BoxGeometry(0.25,2,4);
    var box4Material=new THREE.MeshPhongMaterial({color:0xb0b2b2});
    var box4=new THREE.Mesh(box4Geometry,box4Material);
    box4.position.x=lectureDesk.position.x-7.5/2+0.25/2;
    box4.position.y=lectureDesk.position.y-1.5;
    box4.position.z=lectureDesk.position.z-2;
    box4.rotation.x=-Math.PI/180*70;
    createLectureDesk.add(box4);
    
    var box5Geometry= new THREE.BoxGeometry(0.25,2,4);
    var box5Material=new THREE.MeshPhongMaterial({color:0xb0b2b2});
    var box5=new THREE.Mesh(box5Geometry,box5Material);
    box5.position.x=lectureDesk.position.x+7.5/2-0.25/2;
    box5.position.y=lectureDesk.position.y-1.5;
    box5.position.z=lectureDesk.position.z-2;
    box5.rotation.x=-Math.PI/180*70;
    createLectureDesk.add(box5);

    //control board
    var boardGeometry= new THREE.BoxGeometry(xlen,1.2,1.5);
    var boardMaterial=new THREE.MeshPhongMaterial({color:0xb0b2b2});
    var board=new THREE.Mesh(boardGeometry,boardMaterial);
    board.position.x=lectureDesk.position.x;
    board.position.y=lectureDesk.position.y+3.78;
    board.position.z=lectureDesk.position.z-4.4;
    board.rotation.x=-Math.PI/180*15;
    createLectureDesk.add(board);

    //slide
    var slideGeometry= new THREE.BoxGeometry(xlen,0.25,7);
    var slideMaterial=new THREE.MeshPhongMaterial({color:0xb0b2b2});
    var slide=new THREE.Mesh(slideGeometry,slideMaterial);
    slide.position.x=lectureDesk.position.x+xlen;
    slide.position.y=board.position.y+1.875+1.2/2;
    slide.position.z=board.position.z+2;
    slide.rotation.x=-Math.PI/180*15;
    createLectureDesk.add(slide);

    //slide beam
    var box8Geometry= new THREE.BoxGeometry(xlen,1.5,0.25);
    var box8Material=new THREE.MeshPhongMaterial({color:0xb0b2b2});
    var box8=new THREE.Mesh(box8Geometry,box8Material);
    box8.position.x=slide.position.x;
    box8.position.y=slide.position.y+0.25/2;
    box8.position.z=cylinder1.position.z-0.33;
    createLectureDesk.add(box8);

    var box9Geometry= new THREE.BoxGeometry(xlen,1.5,0.25);
    var box9Material=new THREE.MeshPhongMaterial({color:0xb0b2b2});
    var box9=new THREE.Mesh(box9Geometry,box9Material);
    box9.position.x=slide.position.x;
    box9.position.y=slide.position.y-1.5+0.25*2;
    box9.position.z=board.position.z+1.5/2;
    createLectureDesk.add(box9);

    //slide handle
    var box10Geometry= new THREE.BoxGeometry(xlen/2,0.05,0.05);
    var box10Material=new THREE.MeshPhongMaterial({color:0x000000});
    var box10=new THREE.Mesh(box10Geometry,box10Material);
    box10.position.x=slide.position.x;
    box10.position.y=slide.position.y-0.25*1.75;
    box10.position.z=slide.position.z-7*1/3;
    createLectureDesk.add(box10);

    var box11Geometry= new THREE.BoxGeometry(0.05,0.05,0.05);
    var box11Material=new THREE.MeshPhongMaterial({color:0x000000});
    var box11=new THREE.Mesh(box11Geometry,box11Material);
    box11.position.x=box10.position.x-xlen/4+0.05/2;
    box11.position.y=box10.position.y-0.05;
    box11.position.z=box10.position.z;
    createLectureDesk.add(box11);

    var box12Geometry= new THREE.BoxGeometry(0.05,0.05,0.05);
    var box12Material=new THREE.MeshPhongMaterial({color:0x000000});
    var box12=new THREE.Mesh(box12Geometry,box12Material);
    box12.position.x=box10.position.x+xlen/4-0.05/2;
    box12.position.y=box10.position.y-0.05;
    box12.position.z=box10.position.z;
    createLectureDesk.add(box12);

    //control screen
    var monitor2Geometry= new THREE.BoxGeometry(1.6, 0.025, 1.2); //7:2:0.2
    var monitor2Material=new THREE.MeshPhongMaterial({color:0x000000});
    var monitor2=new THREE.Mesh(monitor2Geometry,monitor2Material);
    monitor2.position.x=board.position.x+xlen/4;
    monitor2.position.y=board.position.y+1.2/2;
    monitor2.position.z=board.position.z-0.125;
    monitor2.rotation.x=-Math.PI/180*15;
    createLectureDesk.add(monitor2);

    var screen2Geometry= new THREE.BoxGeometry(1.3, 0.025, 1.0); //7:2:0.2
    var screen2Material=new THREE.MeshPhongMaterial({color:0xffffff,emissive:0xffffff});
    var screen2=new THREE.Mesh(screen2Geometry,screen2Material);
    screen2.position.x=monitor2.position.x;
    screen2.position.y=monitor2.position.y+0.025/2;
    screen2.position.z=monitor2.position.z;
    screen2.rotation.x=-Math.PI/180*15;
    createLectureDesk.add(screen2);
    
    // Below of Lecture Desk
    var box6Geometry= new THREE.BoxGeometry(0.25,0.75,6.6);
    var box6Material=new THREE.MeshPhongMaterial({color:0xb0b2b2});
    var box6=new THREE.Mesh(box6Geometry,box6Material);
    box6.position.x=lectureDesk.position.x-7.5/2+0.25/2;
    box6.position.y=lectureDesk.position.y-7.5/2+0.75/2;
    box6.position.z=lectureDesk.position.z-0.32;
    createLectureDesk.add(box6);

    var box7Geometry= new THREE.BoxGeometry(0.25,0.75,6.6);
    var box7Material=new THREE.MeshPhongMaterial({color:0xb0b2b2});
    var box7=new THREE.Mesh(box7Geometry,box7Material);
    box7.position.x=lectureDesk.position.x+7.5/2-0.25/2;
    box7.position.y=lectureDesk.position.y-7.5/2+0.75/2;
    box7.position.z=lectureDesk.position.z-0.32;
    createLectureDesk.add(box7);
    
    var monitorBackGeometry= new THREE.BoxGeometry(6, 1, 3); //7:2:0.2
    var monitorBackMaterial=new THREE.MeshPhongMaterial({color:0x000000});
    var monitorBack=new THREE.Mesh(monitorBackGeometry,monitorBackMaterial);
    monitor.rotation.x=-Math.PI/180*30;
    monitorBack.rotation.x=-Math.PI/180*30;
    monitorBack.position.x=lectureDesk.position.x;
    monitorBack.position.y=monitor.position.y-0.5;
    monitorBack.position.z=monitor.position.z+0.25;
    createLectureDesk.add(monitorBack);

    // Back of Monitor pillars
    var cylinder3Geometry=new THREE.CylinderGeometry(0.125,0.125,4,32);
    var cylinder3Material = new THREE.MeshPhongMaterial( {color: 0x000000} );
    var cylinder3 = new THREE.Mesh( cylinder3Geometry, cylinder3Material );
    cylinder3.rotation.x=-Math.PI/180 * 30;
    cylinder3.position.x=lectureDesk.position.x-7.5/3;
    cylinder3.position.y=lectureDesk.position.y+3;
    cylinder3.position.z=lectureDesk.position.z+1;
    createLectureDesk.add( cylinder3 );

    var cylinder4Geometry=new THREE.CylinderGeometry(0.125,0.125,4,32);
    var cylinder4Material = new THREE.MeshPhongMaterial( {color: 0x000000} );
    var cylinder4 = new THREE.Mesh( cylinder4Geometry, cylinder4Material );
    cylinder4.rotation.x=-Math.PI/180 * 30;
    cylinder4.position.x=lectureDesk.position.x+7.5/3;
    cylinder4.position.y=lectureDesk.position.y+3;
    cylinder4.position.z=lectureDesk.position.z+1;
    createLectureDesk.add( cylinder4 );

    var cylinder5Geometry=new THREE.CylinderGeometry(0.08,0.08,7,32);
    var cylinder5Material = new THREE.MeshPhongMaterial( {color: 0x000000} );
    var cylinder5 = new THREE.Mesh( cylinder5Geometry, cylinder5Material );
    cylinder5.rotation.x=-Math.PI/180*30;
    cylinder5.position.x=cylinder3.position.x;
    cylinder5.position.y=cylinder3.position.y;
    cylinder5.position.z=cylinder3.position.z;
    createLectureDesk.add( cylinder5 );

    var cylinder6Geometry=new THREE.CylinderGeometry(0.08,0.08,7,32);
    var cylinder6Material = new THREE.MeshPhongMaterial( {color: 0x000000} );
    var cylinder6 = new THREE.Mesh( cylinder6Geometry, cylinder6Material );
    cylinder6.rotation.x=-Math.PI/180*30;
    cylinder6.position.x=cylinder4.position.x;
    cylinder6.position.y=cylinder4.position.y;
    cylinder6.position.z=cylinder4.position.z;
    createLectureDesk.add( cylinder6 );

    // Monitor Screen
    var screenGeometry=new THREE.BoxGeometry(6.5,0.1,3.5);
    var screenMaterial=new THREE.MeshPhongMaterial({color:0xffffff, emissive:0xddddff});
    var screen=new THREE.Mesh(screenGeometry,screenMaterial);
    screen.rotation.x=-Math.PI/180*30;
    screen.position.x=lectureDesk.position.x;
    screen.position.y=monitor.position.y+0.125;
    screen.position.z=monitor.position.z;
    
    createLectureDesk.add(screen);

    // Cylinder inside frame
    var cylinder2Geometry=new THREE.CylinderGeometry(0.6,0.6,7.55,32);
    var cylinder2Material = new THREE.MeshPhongMaterial( {color: 0xb0b2b2} );
    var cylinder2 = new THREE.Mesh( cylinder2Geometry, cylinder2Material );
    cylinder2.rotation.z=Math.PI/180 * 90;
    cylinder2.position.x=lectureDesk.position.x;
    cylinder2.position.y=cylinder1.position.y;
    cylinder2.position.z=cylinder1.position.z+0.6;
    createLectureDesk.add( cylinder2 );
    
    makeMic(createLectureDesk,lectureDesk.position.x,lectureDesk.position.y,lectureDesk.position.z);
    lectureDeskWheel(createLectureDesk,lectureDesk.position.x-7/2,lectureDesk.position.y-7.5/2,lectureDesk.position.z+6/3);
    lectureDeskWheel(createLectureDesk,lectureDesk.position.x-7/2,lectureDesk.position.y-7.5/2,lectureDesk.position.z-6/3);
    lectureDeskWheel(createLectureDesk,lectureDesk.position.x+7/2,lectureDesk.position.y-7.5/2,lectureDesk.position.z+6/3);
    lectureDeskWheel(createLectureDesk,lectureDesk.position.x+7/2,lectureDesk.position.y-7.5/2,lectureDesk.position.z-6/3);

    createLectureDesk.rotateY(Math.PI / 180 * 90);
    createLectureDesk.position.set(x, y, z);
    createLectureDesk.scale.set(7.7, 7.7, 7.7);
    B208D.add(createLectureDesk);
}

function lectureDeskWheel(createLectureDesk, x, y, z) {
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
    group.scale.set(0.2, 0.2, 0.2);

    createLectureDesk.add(group);
}

// 의자 앞다리
function makeMic(createLectureDesk, x, y, z) {
    var micPoints = [
        new THREE.Vector3(-7.5/2+0.125, 5, -0.75),
        new THREE.Vector3(-7.5/2+0.125, 7.5, -0.75),
        new THREE.Vector3(0, 6.5, -3),
        new THREE.Vector3(0, 7.5, -3),
    ];

    var micSpline = new THREE.CatmullRomCurve3(micPoints);

    var extrudeSettings = {
        steps: 400,
        bevelEnabled: false,
        extrudePath: micSpline
    };
    var pts = [], numPts = 100;
    for (var i = 0; i < numPts * 2; i++) {
        var l = 0.05;
        var a = i / numPts * Math.PI;
        pts.push(new THREE.Vector2(Math.cos(a) * l, Math.sin(a) * l));
    }
    var shape = new THREE.Shape(pts);
    var geometry = new THREE.ExtrudeBufferGeometry(shape, extrudeSettings);
    var material = new THREE.MeshPhongMaterial({ color: 0x000000, metalness: 0.2, roughness: 0 });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = x;
    mesh.position.y = y;
    mesh.position.z = z;
    createLectureDesk.add(mesh);

    var micBall1Geometry = new THREE.SphereGeometry(0.15,32,32);
    var micBall1Material = new THREE.MeshBasicMaterial({ color: 0x000000 });
    var micBall1 = new THREE.Mesh(micBall1Geometry, micBall1Material);
    micBall1.position.x=mesh.position.x;
    micBall1.position.y = mesh.position.y+7.5+0.125;
    micBall1.position.z = mesh.position.z-3;
    createLectureDesk.add(micBall1);

    var micCapGeometry=new THREE.CylinderGeometry(0.15,0.125,0.2,32);
    var micCapMaterial=new THREE.MeshBasicMaterial({color:0x000000});
    var micCap=new THREE.Mesh(micCapGeometry,micCapMaterial);
    micCap.position.x=mesh.position.x;
    micCap.position.y = mesh.position.y+7.5;
    micCap.position.z = mesh.position.z-3;
    createLectureDesk.add(micCap);

    var micBall2Geometry = new THREE.SphereGeometry(0.125,32,32);
    var micBall2Material = new THREE.MeshBasicMaterial({ color: 0x000000 });
    var micBall2 = new THREE.Mesh(micBall2Geometry, micBall2Material);
    micBall2.position.x=mesh.position.x;
    micBall2.position.y = mesh.position.y+7.5-0.125;
    micBall2.position.z = mesh.position.z-3;
    createLectureDesk.add(micBall2);
}