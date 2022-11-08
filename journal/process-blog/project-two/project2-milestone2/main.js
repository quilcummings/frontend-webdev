import * as THREE from 'three';
import { LoopOnce } from 'three';

var mouseX = 0;
var mouseY = 0;
const scene = new THREE.Scene();
const container = document.querySelector('#container');

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.01,
  1000,
);

camera.position.set( 0, 0, 500);
//scene.background = new THREE.Color( 0x000 );
scene.add(camera);

container.appendChild(renderer.domElement);

const RADIUS = 200;
const SEGMENTS = 50;
const RINGS = 50;

// const geometry = new THREE.SphereGeometry( 252, SEGMENTS, RINGS );
// const material = new THREE.MeshBasicMaterial( { color: 0xFFFFFF } );
// const sphere = new THREE.Mesh( geometry, material );
// scene.add( sphere );

// sphere.position.z = -500;

const globe = new THREE.Group();
var loader = new THREE.TextureLoader();

loader.load('https://images.pexels.com/photos/1205301/pexels-photo-1205301.jpeg' , function ( texture ) {

  scene.background = texture;  

});

loader.load('https://i.imgur.com/MeKgLts.jpeg', function ( texture ) {

  var sphere = new THREE.SphereGeometry( RADIUS, SEGMENTS, RINGS );
  var material = new THREE.MeshBasicMaterial( { map: texture } );
  var mesh = new THREE.Mesh(sphere, material);
  globe.add(mesh);

});

scene.add(globe);

globe.position.z = -300;

const pointLight = new THREE.PointLight(0xFFFFFF);

pointLight.position.x = 10;
pointLight.position.y = 50;
pointLight.position.z = 400;

scene.add(pointLight);

document.addEventListener('mousemove' , onMouseMove, false);
// document.addEventListener('wheel', onScroll, false);

// function onScroll( event ) {
//   camera.position.z += WheelEvent.deltaY/1000;
//   console.log(camera.position.y);
// }

function onMouseMove( event ) {
   mouseX = ( event.clientX - window.innerWidth/2 );
   mouseY = ( event.clientY - window.innerHeight/2 );
}

function loop() {

  camera.position.x += (mouseX - camera.position.x ) * 0.05;
  camera.position.y += (-mouseY - camera.position.y ) * 0.05;

  camera.lookAt( scene.position );

  //globe.rotateX(0.01);
  globe.rotateY(0.01);

  renderer.render(scene, camera);

  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);



