//Referance 참조
function include(FileDir) {
   var includejs = document.createElement("script");
   includejs.type = "text/javascript";
   includejs.src = FileDir;
   document.head.appendChild(includejs);
}
include("JHJ.js");
include("JDJ.js");
include("JSW1.js");
include("LSJ.js");
include("JSW1.js");
//위에부분은 참초하는거니까 건드리지마 ㅇㅋ?
var ScreenDirection = 0;
var screenType = 0;
window.onload = function init() {
   var controls;
   var scene = new THREE.Scene();
   var camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 1000);
   var renderer = new THREE.WebGLRenderer();

   //For bouncing balls;
   var step = 0;
   renderer.setClearColor(0xEEEEEE);
   renderer.setSize(window.innerWidth, window.innerHeight);
   renderer.shadowMap.enabled = true;
   //Let's make a plane
   //정적인 object할때는 return 할 필요없어
   //makePlane(scene);

   drawClassRoom(scene);
   //drawAisle(scene);
   makeWhiteboard(scene, 170, 110, 200, 9.5);
   makeLectureDesk(scene, 120, 61, 240);
   makeScreen_top(scene);
   var Screen = drawScreen(scene);
   scene.add(Screen);
   fluorescent_line = 2;
   for (i = 0; i < fluorescent_line; i++) {
      this.createFluorescentBase0(scene, 0, 0, 0, 0.5, 80 * (i + 1), 185, 110, 10);
      this.createFluorescentBase0(scene, 0, 0, 0, 0.5, 80 * (i + 1), 185, 310, 10);
   }

   this.createProjectorBody0(scene, 0, 0, 0, 120, 165, 100, 8);

   desk_line = 1;
   for (i = 0; i < desk_line; i++) {
      this.two_person_set(scene, 150 * (i + 1), 35, 200, 2.2);
      this.three_person_set(scene, 150 * (i + 1), 35, 50, 2.2);
      this.three_person_set(scene, 150 * (i + 1), 35, 350, 2.2);
   }
   var spotLight2 = new THREE.SpotLight(0xFFFFFF);
   spotLight2.position.set(30, 30, 0);
   spotLight2.castShadow = true;
   spotLight2.shadow.mapSize.width = 5120;
   spotLight2.shadow.mapSize.height = 5120;
   scene.add(spotLight2);

   //var whiteboard=makeWhiteboard(scene);
   //var lectureDesk=makeLectureDesk(scene);
   //var roundedBox=createProjectorBody0(scene);

   var spotLight1 = new THREE.SpotLight(0xFFFFFF);
   spotLight1.position.set(0, 30, 50);
   spotLight1.castShadow = true;
   spotLight1.shadow.mapSize.width = 5120;
   spotLight1.shadow.mapSize.height = 5120;
   scene.add(spotLight1);

   camera.lookAt(scene.position);
   document.getElementById("threejs_scene").appendChild(renderer.domElement);
   controls = new THREE.OrbitControls(camera, renderer.domElement);
   controls.maxPolarAngle = Math.PI * 0.5;
   // controls.rotateSpeed = 1.0; // 마우스로 카메라를 회전시킬 속도입니다. 기본값(Float)은 1입니다.
   // controls.zoomSpeed = 1.0; // 마우스 휠로 카메라를 줌 시키는 속도 입니다. 기본값(Float)은 1입니다.
   // controls.panSpeed = 10.8; // 패닝 속도 입니다. 기본값(Float)은 1입니다.
   controls.minDistance = 900; // 마우스 휠로 카메라 거리 조작시 최소 값. 기본값(Float)은 0 입니다.
   controls.maxDistance = 1000; // 마우스 휠로 카메라 거리 조작시 최대 값. 기본값(Float)은 무제한 입니다
   camera.position.x = 929;
   camera.position.y = 52;
   camera.position.z = 227;
   var renderScene = new function renderScene() {
      requestAnimationFrame(renderScene);
      renderer.render(scene, camera);
      //스크린 올리기
      if (ScreenDirection == 1) {
         if (Screen.position.y < 130) {
            Screen.position.y += 1;
         } else if (Screen.position.y == 120) {
            ScreenDirection = 0;
         }
      }
      //스크린 내리기
      else if (ScreenDirection == -1) {
         if (Screen.position.y > 0) {
            Screen.position.y -= 1;
         } else if (Screen.position.y == 0) {
            ScreenDirection = 0;
         }
      }
      document.getElementById("Button1").onclick = function () {
         ScreenDirection = 1;
      }
      document.getElementById("Button2").onclick = function () {
         ScreenDirection = -1;
      }
      controls.update();
   }
}


//    document.getElementById("Button2").onclick = function () {
//       radius *= 0.9;
//       console.log("-----------------------");
//       console.log(phi);
//       console.log(theta);
//       console.log(radius);
//       console.log("-----------------------");
//    };
//    document.getElementById("Button3").onclick = function () {
//       theta += dr;
//       console.log("-----------------------");
//       console.log(phi);
//       console.log(theta);
//       console.log(radius);
//       console.log("-----------------------");
//    };
//    document.getElementById("Button4").onclick = function () {
//       theta -= dr;
//       console.log("-----------------------");
//       console.log(phi);
//       console.log(theta);
//       console.log(radius);
//       console.log("-----------------------");
//    };
//    document.getElementById("Button5").onclick = function () {
//       phi += dr;
//       console.log("-----------------------");
//       console.log(phi);
//       console.log(theta);
//       console.log(radius);
//       console.log("-----------------------");
//    };
//    document.getElementById("Button6").onclick = function () {
//       phi -= dr;
//       console.log("-----------------------");
//       console.log(phi);
//       console.log(theta);
//       console.log(radius);
//       console.log("-----------------------");
//    };
//    render();
// }
