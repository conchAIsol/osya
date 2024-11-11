import * as THREE from 'three';


//Set up camera and renderer
const scene = new THREE.Scene(); 
const camera = new THREE.PerspectiveCamera( 10, window.innerWidth / window.innerHeight, 0.5, 1000 ); 
const renderer = new THREE.WebGLRenderer({ alpha: true }); 
renderer.setPixelRatio( 0.5 );
renderer.setSize( window.innerWidth, window.innerHeight ); 
document.body.appendChild( renderer.domElement );
renderer.setClearColor( 0x000000, 0 ); // the default

const geometry = new THREE.BoxGeometry( 1, 1, 1 ); 

const hoverMoverGeo = new THREE.SphereGeometry( 0.25, 9, 9 ); 

const monolith = new THREE.BoxGeometry( 1, 10, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } ); 

const texture = new THREE.TextureLoader().load( "assets/sheet.jpg" ); 

scene.fog = new THREE.Fog( 0x0d0e19, 51, 55 );

texture.wrapS = THREE.RepeatWrapping; texture.wrapT = THREE.RepeatWrapping; texture.repeat.set( 1, 1);

const light = new THREE.PointLight( 0x049ef4, 3, 4); light.position.set( -6, 0, -35 ); scene.add( light );
const light2 = new THREE.PointLight( 0xcad0ef, 2, 2 ); light2.position.set( -6, 2, -35 ); scene.add( light2 );
const light3 = new THREE.PointLight( 0xcad0ef, 2, 2 ); light3.position.set( -6, -2, -35 ); scene.add( light3 );
const light4 = new THREE.PointLight( 0xcad0ef, 2, 2 ); light4.position.set( -4, -1, -35 ); scene.add( light4 );
const light5 = new THREE.PointLight( 0xcad0ef, 2, 2 ); light5.position.set( -4, 1, -35 ); scene.add( light5 );


const ambLight = new THREE.PointLight( 0xffffff, 1, 10 ); ambLight.position.set( 0, 0, 0 ); scene.add( ambLight );
const hoverMoverLight = new THREE.PointLight( 0x049ef4, 3, 3 ); hoverMoverLight.position.set( 0, 1, -45 ); scene.add( hoverMoverLight );

const hoverMoverLight2 = new THREE.PointLight( 0x049ef4, 3, 3 ); hoverMoverLight2.position.set( -25, 0, -45 ); scene.add( hoverMoverLight2 );


const sprText = new THREE.TextureLoader().load( 'assets/sprite.png' ); 
const sprMat = new THREE.SpriteMaterial( { map: sprText, opacity: 0.5 } ); 
sprMat.depthWrite =false;

const sprite = new THREE.Sprite( sprMat ); 
const sprite2 = new THREE.Sprite( sprMat ); 
sprite.position.z = -40;
sprite.position.y = 1;

sprite2.position.z = -40;
sprite2.position.x = -25;
sprite.scale.x = 0.55;
sprite.scale.y = 0.55;

sprite2.scale.x = 0.55;
sprite2.scale.y = 0.55;
scene.add( sprite, sprite2 );

const cubeMat = new THREE.MeshPhysicalMaterial( { color: 0x676f9e, transparent: true,  dithering: true,  side: THREE.DoubleSide, roughness: 0.5	, metalness: 1, iridescence: 1, iridescenceIOR: 1.939515, opacity: 0.5 } );
const cubeMat2 = new THREE.MeshStandardMaterial( { color: 0xcad0ef, transparent: true,  dithering: true,  side: THREE.DoubleSide, roughness: 0.5, metalness: 1, iridescence: 1, iridescenceIOR: 1.939515, opacity: 0.5 } );

const hoverMoverMat = new THREE.MeshStandardMaterial( { color: 0x0a0c2a	,  dithering: true, emissive: 0x0a0c2a, emissiveIntensity: 40   } );

const monoMat = new THREE.MeshStandardMaterial( { dithering: true, map: texture } );
const monoMat2 = new THREE.MeshStandardMaterial( { color: 0x676f9e, dithering: true, map: texture } );

const cube1 = new THREE.Mesh( geometry, cubeMat ); 
const cube2 = new THREE.Mesh( geometry, cubeMat2 ); 
const cube3 = new THREE.Mesh( geometry, cubeMat2 ); 
const cube4 = new THREE.Mesh( geometry, cubeMat2 ); 
const cube5 = new THREE.Mesh( geometry, cubeMat2 ); 

const hoverMoverMesh = new THREE.Mesh( hoverMoverGeo, hoverMoverMat ); 

const monolith1 = new THREE.Mesh( monolith, monoMat ); 
const monolith2 = new THREE.Mesh( monolith, monoMat ); 

cube1.rotation.x = 90
cube1.position.x = -6;
cube1.position.z = -35;

cube4.rotation.y = 45
cube4.position.x = -4;
cube4.position.z = -35;
cube4.position.y = -1

cube5.position.x = -4;
cube5.position.z = -35;
cube5.position.y = 1
cube5.rotation.x = 45

cube2.rotation.y = 90
cube2.position.x = -6;
cube2.position.z = -35;
cube2.position.y = 2

cube3.rotation.x = -45
cube3.position.x = -6;
cube3.position.z = -35;
cube3.position.y = -2

hoverMoverMesh.position.z = -40;
hoverMoverMesh.position.y = 1;

var min = 4
var max = 6
var colNum = 1;

for ( var i = 1; i < 81; i ++ ) {
	colNum++;
    var mesh;
	var curMat;
	if(Math.round(Math.random()) == 0){
		curMat = monoMat
		
	}else{
		curMat =	monoMat2
	}
	
	if ((i%2) == 0){
		 mesh = new THREE.Mesh( monolith, curMat );
		mesh.position.set( (colNum-3)*0.55, -(Math.random() * (max - min) + min), -50 );
	}else
	{
		mesh = new THREE.Mesh( monolith, curMat );
		mesh.position.set( colNum*-0.55, -(Math.random() * (max - min) + min), -50 );
	}
	
	//this is FUCKEd but i cant be assed to find a better way rn
	if (i == 21){
		min = 1
		max = 3
		colNum = 1
	}else if(i==41) {
		min = -2
		max = 0
		colNum = 1
	}
	else if(i==61) {
		min = -5
		max = -3
		colNum = 1
	}
	mesh.rotation.x = 45;
    scene.add( mesh );
}

scene.add( cube1, cube2, cube3, cube4, cube5 );
camera.position.z = 5;
function animate() { 
	renderer.render( scene, camera ); 
	cube1.rotation.x += 0.0001; cube1.rotation.y += 0.0001;
	cube2.rotation.x -= 0.00015; cube2.rotation.y -= 0.00015;
	cube3.rotation.x += 0.0001; cube3.rotation.y -= 0.0001;
	cube4.rotation.x -= 0.00015; cube4.rotation.y += 0.0001;
	cube5.rotation.x += 0.0001; cube5.rotation.y += 0.00015;
	move(0.01)
} 
renderer.setAnimationLoop( animate );


function move(speed) {
	if(sprite.position.x <= -15){
		var newY = Math.random() * (3 - -5) + -5
		sprite.position.x = 15
		sprite.position.y = newY
		hoverMoverLight.position.x = 15
		hoverMoverLight.position.y = newY
	}
	
	if(sprite2.position.x >= 15){
		var newY = Math.random() * (3 - -5) + -5
		sprite2.position.x = -25
		sprite2.position.y = newY
		hoverMoverLight2.position.x = -25
		hoverMoverLight2.position.y = newY
	}
	
	var d = sprite.position.x - -15;
	  if (sprite.position.x > -15) {
		sprite.position.x -= Math.min( speed, d );
	}
  
	var d2 = sprite2.position.x -	 15;
	if (sprite2.position.x < 15) {
		sprite2.position.x += Math.max( speed, d2 );
	}
  
    var b = hoverMoverLight.position.x - -15;
	  if (hoverMoverLight.position.x > -15) {
		hoverMoverLight.position.x -= Math.min( speed, b );
	}
	  

	var b2 = hoverMoverLight2.position.x - 15;
	  if (hoverMoverLight2.position.x < 15) {
		hoverMoverLight2.position.x += Math.max( speed, b2 );
	}
}