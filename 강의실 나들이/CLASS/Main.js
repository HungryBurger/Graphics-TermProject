

//Referance 참조
function include(FileDir) {
   var includejs = document.createElement("script");
   includejs.type = "text/javascript";
   includejs.src = FileDir;
   document.head.appendChild(includejs);
}
include("JHJ.js");
include("JDJ.js");
include("JSW.js");
include("LSJ.js");

var canvas;
var gl;

var numVertices = 36;
var pointsArray = [];
var colorsArray = [];
var radius = 1.0;
var theta = 0.0;
var phi = 0.0;
var dr = 5.0 * Math.PI / 180.0;


var mvMatrix;
var modelView;
var eye;

const at = vec3(0.0, 0.0, 0.0);
const up = vec3(0.0, 1.0, 0.0);

window.onload = function init() {
   canvas = document.getElementById("gl-canvas");
   gl = WebGLUtils.setupWebGL(canvas);
   if (!gl) { alert("WebGL isn't available"); }

   gl.viewport(0, 0, canvas.width, canvas.height);

   gl.clearColor(0.0, 0.0, 0.0, 1.0);

   gl.enable(gl.DEPTH_TEST);
   //gl.enable(gl.CULL_FACE);
   //
   //  Load shaders and initialize attribute buffers
   //
   var program = initShaders(gl, "vertex-shader", "fragment-shader");
   gl.useProgram(program);
   //여기다가 이런식으로 해당 함수 불러와서 사용하면 될 것 같음
   colorCube();

   var cBuffer = gl.createBuffer();
   gl.bindBuffer(gl.ARRAY_BUFFER, cBuffer);
   gl.bufferData(gl.ARRAY_BUFFER, flatten(colorsArray), gl.STATIC_DRAW);

   var vColor = gl.getAttribLocation(program, "vColor");
   gl.vertexAttribPointer(vColor, 4, gl.FLOAT, false, 0, 0);
   gl.enableVertexAttribArray(vColor);

   var vBuffer = gl.createBuffer();
   gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer);
   gl.bufferData(gl.ARRAY_BUFFER, flatten(pointsArray), gl.STATIC_DRAW);

   var vPosition = gl.getAttribLocation(program, "vPosition");
   gl.vertexAttribPointer(vPosition, 4, gl.FLOAT, false, 0, 0);
   gl.enableVertexAttribArray(vPosition);

   modelView = gl.getUniformLocation(program, "modelView");

   // buttons to change viewing parameters
   //여긴 아직 건드리지마 자유시점할때 필요할 것같음
   document.getElementById("Button1").onclick = function () {
      radius *= 1.1;
      console.log("-----------------------");
      console.log(phi);
      console.log(theta);
      console.log(radius);
      console.log("-----------------------");
   };
   document.getElementById("Button2").onclick = function () {
      radius *= 0.9;
      console.log("-----------------------");
      console.log(phi);
      console.log(theta);
      console.log(radius);
      console.log("-----------------------");
   };
   document.getElementById("Button3").onclick = function () {
      theta += dr;
      console.log("-----------------------");
      console.log(phi);
      console.log(theta);
      console.log(radius);
      console.log("-----------------------");
   };
   document.getElementById("Button4").onclick = function () {
      theta -= dr;
      console.log("-----------------------");
      console.log(phi);
      console.log(theta);
      console.log(radius);
      console.log("-----------------------");
   };
   document.getElementById("Button5").onclick = function () {
      phi += dr;
      console.log("-----------------------");
      console.log(phi);
      console.log(theta);
      console.log(radius);
      console.log("-----------------------");
   };
   document.getElementById("Button6").onclick = function () {
      phi -= dr;
      console.log("-----------------------");
      console.log(phi);
      console.log(theta);
      console.log(radius);
      console.log("-----------------------");
   };
   render();
}


var render = function () {
   gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

   eye = vec3(radius * Math.sin(phi), radius * Math.sin(theta),
   radius * Math.cos(phi)); // eye point
   mvMatrix = lookAt(eye, at, up);
   gl.uniformMatrix4fv(modelView, false, flatten(mvMatrix))
   gl.drawArrays(gl.TRIANGLES, 0, numVertices);
   requestAnimFrame(render);
}

