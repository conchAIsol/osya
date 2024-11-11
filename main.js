import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { AfterimagePass } from 'three/addons/postprocessing/AfterimagePass.js';
import { CSS2DRenderer} from 'three/addons/renderers/CSS2DRenderer.js';

//Set up camera and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 0.1, 1000 );

const labelRenderer = new CSS2DRenderer();
labelRenderer.setSize( window.innerWidth, window.innerHeight );

labelRenderer.domElement.id = "overlay"


document.getElementById("winBorder").appendChild( labelRenderer.domElement);
const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio( 0.5 );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
const rotAxis = new THREE.Vector3( 0, 0, 0).normalize();

//Post-Processing effects
const composer = new EffectComposer( renderer );
const renderPass = new RenderPass( scene, camera );
composer.addPass( renderPass );




//Displays the window-in-window when a site button is pressed
function createWindow(link) {
	isClosing = false;
	hi = 0;
	pos = 75.5;
	 document.getElementById("overlay").innerHTML+='<object type="text/html" data=' + link + ' id="mainWindow"> ';
	 var borderColl = document.getElementsByClassName("hideMe");
	var bi;

	
	

}


//This closes the window-in-window. dont mind the weird names
var footColl = document.getElementsByClassName("footer");
var i;

for (i = 0; i < footColl.length; i++) {
	footColl[i].addEventListener("click", function() {
		btnClickSFX.play();
		clearWindow() 
	});
}
var isIntroOpen = true;
const bgm = new Audio("audio/lain_bgm.mp3");
var btnClickSFX = new Audio("audio/btnClick.mp3");
bgm.loop = true;
bgm.volume = 0.2;
btnClickSFX.volume = 0.5;
//closes the accept page on load
var acceptBtn = document.getElementById("acceptButton");
var loadingGif = document.getElementById("loadGif");
acceptBtn.addEventListener("click", function() {
	isIntroOpen = false;
	document.getElementById("intro").remove();
	bgm.play();
	
});

window.addEventListener('load', function () {
	acceptBtn.style.display = "inline";
	loadingGif.style.display = "none";
})



var maxWindow = document.getElementById("fullscreen");

var currentWindow = "google.com";

maxWindow.addEventListener("click", function() {
	window.open(currentWindow)
	btnClickSFX.play();
 });


function clearWindow() {
	isClosing = true;
	hi = 0;
	pos= 155.5;
	 document.getElementById("overlay").innerHTML='';
	var borderColl = document.getElementsByClassName("hideMe");
	var i;

	for (i = 0; i < borderColl.length; i++) {
			
				footColl[i].parentElement.parentElement.parentElement.style.display = "none";	  
	}
	 
}





// register meshes
const middleGeo = new THREE.CylinderGeometry( 5, 5, 32, 24, 1, false ); 
const middleGeo2 = new THREE.CylinderGeometry( 4, 4, 32, 24, 1, false ); 
const geo1 = new THREE.CylinderGeometry( 11.8, 12, 1, 64, 1, true ); 
const geo2 = new THREE.CylinderGeometry( 8, 7.9, 1, 64, 1, true ); 
const txtGeo = new THREE.CylinderGeometry( 10.5, 10.5, 1, 20, 1, true ); 

const bgTextGeo = new THREE.CylinderGeometry( 20.5, 20.5, 1, 20, 1, true ); 

const btnCubeGeo = new THREE.BoxGeometry( 0.4, 0.4, 0.4 ); 


//This sets up the categories. each category should have at least 2-3 clickable sub-objects
const categories = [
{Name:"Main", Btns:[{pos:new THREE.Vector3( -1, 0, 13), link:"subsites/main/main.html", image:"/buttons/index_btn.png"}, {pos:new THREE.Vector3( 3, 2, 11), link:"https://oyaswmi.atabook.org/", image:"/buttons/guest_btn.png"}, {pos:new THREE.Vector3( 3, -1.5, 12), link:"subsites/help/help.html", image:"/buttons/help.png"}]},
{Name:"Shrines", Btns:[{pos:new THREE.Vector3( 4, -1, 12), link:"subsites/updates/updates.html", image:"/buttons/updates.png"}, {pos:new THREE.Vector3( -2, 0, 13), link:"majima.html", image:"/buttons/majima.png"}, {pos:new THREE.Vector3( 1, 2, 12), link:"subsites/hlshrine/halflife.html", image:"/buttons/hlButton.png"}]},
{Name:"Misc", Btns:[{pos:new THREE.Vector3( -3, 0, 13), link:"legacy/index.html", image:"/buttons/legacy.png"}, {pos:new THREE.Vector3( 4, 2, 11), notLink:true, code:"toggleClick()", image:"/buttons/toggle_click.png"}, {pos:new THREE.Vector3( -4, 2, 11), notLink:true, code:"toggleMusic()", image:"/buttons/toggle_music.png"}]},

]
var playMusic = true
var playSFX = true

function toggleMusic() {
	if (playMusic) {
		playMusic = false
		bgm.pause()
	}else{
		playMusic = true
		bgm.play()
	}
}

function toggleClick() {
	if (playSFX) {
		playSFX = false
		btnClickSFX = new Audio("audio/empty.mp3");
	}else{
		playSFX = true
		btnClickSFX = new Audio("audio/btnClick.mp3");
		btnClickSFX.volume = 0.5;
	}
}


// register mat/text
const texture = new THREE.TextureLoader().load( "3DTextures/main_strip.png" );
const textImg = new THREE.TextureLoader().load( "3DTextures/test_text.png" );

const loveLainTxt = new THREE.TextureLoader().load( "3DTextures/lovelain.png" );
const welcomeWireText = new THREE.TextureLoader().load( "3DTextures/welcomewired.png" );
const miscTextText = new THREE.TextureLoader().load( "3DTextures/misctext.png" );

const ringAlpha = new THREE.TextureLoader().load("3DTextures/strip_alpha.png")
const iconAlpha = new THREE.TextureLoader().load("3DTextures/buttons/ico_alpha.png")
const sceneBg = new THREE.TextureLoader().load("3DTextures/lain_bg.png")

const cubNextImg = new THREE.TextureLoader().load( "3DTextures/neoNextBtnBlack.png" );
const cubNextImg2 = new THREE.TextureLoader().load( "3DTextures/neoNextBtnWhite.png" );
cubNextImg.magFilter = THREE.NearestFilter;
cubNextImg.colorSpace = THREE.SRGBColorSpace;

cubNextImg2.magFilter = THREE.NearestFilter;
cubNextImg2.colorSpace = THREE.SRGBColorSpace;

texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;

sceneBg.wrapS = THREE.RepeatWrapping;

loveLainTxt.repeat.set(14, 2)
welcomeWireText.repeat.set(14, 2)
miscTextText.repeat.set(14, 1)

sceneBg.repeat.set( 30, 1 );
sceneBg.colorSpace = THREE.SRGBColorSpace;
sceneBg.magFilter = THREE.NearestFilter;

texture.repeat.set( 2, 1 );
textImg.repeat.set( 2, 1 );


ringAlpha.wrapS = THREE.RepeatWrapping;
ringAlpha.wrapT = THREE.RepeatWrapping;
texture.magFilter = THREE.NearestFilter;
ringAlpha.repeat.set( 2, 1 );
ringAlpha.repeat.set( 2, 1 );




//Set Up Mat
const middleMat = new THREE.MeshBasicMaterial( {color: 0x529e90, transparent: true, opacity: 0.5} );
const mat2 = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
const mat1 = new THREE.MeshBasicMaterial( { transparent: true, dithering: true, map: texture, side: THREE.DoubleSide, alphaMap: ringAlpha, alphaTest: 0.5 } ); 
const textMat = new THREE.MeshBasicMaterial( {color: 0xffffff, transparent: true, dithering: true, map: textImg, side: THREE.DoubleSide,  alphaTest: 0.5 } ); 

const loveLainMat = new THREE.MeshBasicMaterial( {color: 0xffffff, transparent: true, dithering: true, map: loveLainTxt, side: THREE.DoubleSide,  alphaTest: 0.5 } ); 
const welcomeWiredMat = new THREE.MeshBasicMaterial( {color: 0xffffff, transparent: true, dithering: true, map: welcomeWireText, side: THREE.DoubleSide,  alphaTest: 0.5 } ); 
const miscTextMat = new THREE.MeshBasicMaterial( {color: 0xffffff, transparent: true, dithering: true, map: miscTextText, side: THREE.DoubleSide,  alphaTest: 0.5 } ); 

const cubNextMat = new THREE.MeshBasicMaterial( {color: 0xffffff, dithering: true, map: cubNextImg, side: THREE.DoubleSide} ); 
const cubNextMat2 = new THREE.MeshBasicMaterial( {color: 0xffffff, dithering: true, map: cubNextImg2, side: THREE.DoubleSide} ); 

// finally, set up scene
const cyl1 = new THREE.Mesh( geo1, mat1 );
const cyl2 = new THREE.Mesh( geo2, mat1 );
const midMesh = new THREE.Mesh( middleGeo, middleMat );



const text1 = new THREE.Mesh( txtGeo, textMat );

const loveLainMesh = new THREE.Mesh( bgTextGeo, loveLainMat );
const loveLainMesh2 = new THREE.Mesh( bgTextGeo, loveLainMat );
loveLainMesh.scale.x = -1
loveLainMesh.position.z = 5;
loveLainMesh2.position.z = 7;
loveLainMesh2.position.y = 3;
loveLainMesh.rotation.y = 0.5;


const welcomeWiredMesh = new THREE.Mesh( bgTextGeo, welcomeWiredMat );
const welcomeWiredMesh2 = new THREE.Mesh( bgTextGeo, welcomeWiredMat );
const welcomeWiredMesh3 = new THREE.Mesh( bgTextGeo, welcomeWiredMat );

welcomeWiredMesh.rotation.y = 0.2;
welcomeWiredMesh.position.y = 1;
welcomeWiredMesh.position.z = 11;
welcomeWiredMesh2.scale.y = -1
welcomeWiredMesh2.position.y = 4;
welcomeWiredMesh2.position.z = 7;
welcomeWiredMesh3.position.y = -2;
welcomeWiredMesh3.position.z = 9;
welcomeWiredMesh3.scale.x = -1


const miscTextMesh = new THREE.Mesh( bgTextGeo, miscTextMat );
const miscTextMesh2 = new THREE.Mesh(bgTextGeo, miscTextMat);
const miscTextMesh3 = new THREE.Mesh( bgTextGeo, miscTextMat );
const miscTextMesh4 = new THREE.Mesh(bgTextGeo, miscTextMat);

miscTextMesh.position.y = 2;
miscTextMesh.position.z = 11;
miscTextMesh.scale.x = -1

miscTextMesh2.position.y = -1;
miscTextMesh2.position.z = 12;

miscTextMesh3.position.y = 5;
miscTextMesh3.position.z = 10;
miscTextMesh3.scale.z = -1

miscTextMesh4.position.y = -3;
miscTextMesh4.position.z = 13;
miscTextMesh4.scale.x = -1
miscTextMesh4.scale.y = -1

var cubGroupRight = new THREE.Group();
var cubGroupLeft = new THREE.Group();
const buttonCubeMesh = [{pos:new THREE.Vector3( 0.25, -0.25, -0.25), text: cubNextMat},
	{pos:new THREE.Vector3( -0.25, -0.25, -0.25), text: cubNextMat},
	{pos:new THREE.Vector3( 0.25, 0.25, -0.25), text: cubNextMat2},
	{pos:new THREE.Vector3( -0.25, 0.25, -0.25), text: cubNextMat2},
	{pos:new THREE.Vector3( 0.25, -0.25, 0.25), text: cubNextMat2},
	{pos:new THREE.Vector3( -0.25, -0.25, 0.25), text: cubNextMat2},
	{pos:new THREE.Vector3( 0.25, 0.25, 0.25), text: cubNextMat},
	{pos:new THREE.Vector3( -0.25, 0.25, 0.25), text: cubNextMat}
	]

function createNextMesh(group){

	for (var ci = buttonCubeMesh.length - 1; ci >= 0; ci--) {
			var mat = buttonCubeMesh[ci].text;
		
			const cubeObj = new THREE.Mesh(btnCubeGeo, mat);
			cubeObj.position.x = buttonCubeMesh[ci].pos.x
			cubeObj.position.z = buttonCubeMesh[ci].pos.z
			cubeObj.position.y = buttonCubeMesh[ci].pos.y

		
		
		group.add(cubeObj)
		
	}
}
createNextMesh(cubGroupRight)
createNextMesh(cubGroupLeft)
cubGroupRight.position.z = 13
cubGroupRight.position.x = 6.5

cubGroupLeft.position.z = 13
cubGroupLeft.position.x = -6.5

scene.fog = new THREE.Fog( 0x070307, 1, 48 );
scene.background  = sceneBg;

scene.add( cyl1, cyl2, text1, midMesh, cubGroupRight, cubGroupLeft, loveLainMesh, loveLainMesh2, welcomeWiredMesh, welcomeWiredMesh2, welcomeWiredMesh3, miscTextMesh, miscTextMesh2, miscTextMesh3, miscTextMesh4 );


camera.position.z = 25;
camera.position.y = 1;
camera.rotation.x = -0.05;
cyl1.position.y = -3;
cyl2.position.y = 5;


text1.position.y = 1.5;
text1.position.z = 0.5;
var curPage = 0
var curRot = 0
var isReverse = false
console.log(categories[curPage].Btns[0].pos)
var i = 0
var pageBusy = false
var shouldReset = false

console.log(document.getElementById("overlay"))
const pageBtns = new THREE.Group();
var hi = 100;
var pos = 75.5;
var isClosing = false;
//This moves/animates things

var stop = false;
var frameCount = 0;
var $results = $("#results");
var fps, fpsInterval, startTime, now, then, elapsed;


// initialize the timer variables and start the animation

function startAnimating(fps) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    animate();
}
startAnimating(60)
function animate() {
	requestAnimationFrame( animate );

    // calc elapsed time since last loop

    now = Date.now();
    elapsed = now - then;

    // if enough time has elapsed, draw the next frame

    if (elapsed > fpsInterval) {

        // Get ready for next frame by setting then=now, but also adjust for your
        // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
        then = now - (elapsed % fpsInterval);

       	animateCyl();
		animateButtons();
		
		cubGroupRight.rotation.y += 0.003;
		cubGroupRight.rotation.z += 0.003;
		cubGroupLeft.rotation.y -= 0.003;
		cubGroupLeft.rotation.z -= 0.003;
		if (hi < 100 && isClosing == true) {
				hi++
				pos = pos - 0.8
				document.getElementById("indicator").style.left = pos + 'vw';
		}else if (hi < 100){
				hi++
				pos = pos + 0.8
				document.getElementById("indicator").style.left = pos + 'vw';
		} 
		
		//Basic, alway-on animation
		text1.rotation.y += 0.003;
		loveLainMesh.rotation.y -= 0.018;
		loveLainMesh2.rotation.y  += 0.012;
		
		miscTextMesh.rotation.y += 0.0095;
		miscTextMesh2.rotation.y -= 0.006;
		miscTextMesh3.rotation.y -= 0.0095;
		miscTextMesh4.rotation.y += 0.0125;
		
		
		welcomeWiredMesh.rotation.y += 0.006;
		welcomeWiredMesh2.rotation.y += 0.015;	
		welcomeWiredMesh3.rotation.y -= 0.012;
		//Renderers
		renderer.render( scene, camera );
		labelRenderer.render(scene, camera);
		composer.render();

    }

}

var buttonI = 0;
var openButtonI = 0;
var initialX = 0;
function animateButtons() {

	if (buttonI > 1) {

		for (var z = pageBtns.children.length - 1; z >= 0; z--) {
				initialX = pageBtns.children[z].position.x;
				pageBtns.children[z].scale.y = pageBtns.children[z].scale.y - 0.02
				pageBtns.children[z].scale.x = pageBtns.children[z].scale.x - 0.02
				pageBtns.children[z].scale.z = pageBtns.children[z].scale.z - 0.02
				pageBtns.children[z].position.x =  pageBtns.children[z].position.x - 0.015 - (1.4 / Math.abs(initialX))
				pageBtns.children[z].position.z =  pageBtns.children[z].position.z - 0.2
				pageBtns.children[z].rotation.y =  pageBtns.children[z].rotation.y - 0.02
		}
		buttonI--;
	}else if (buttonI == 1) {
			buttonI--;
			for (var z = pageBtns.children.length - 1; z >= 0; z--) {
				pageBtns.remove(pageBtns.children[z]);
			}
			scene.remove(pageBtns);
			categories[curPage].Btns.forEach(changePage);
			scene.add(pageBtns);
			openButtonI = 50;
			
	}
	
	if (openButtonI > 1) {

		for (var z = pageBtns.children.length - 1; z >= 0; z--) {
				pageBtns.children[z].scale.y = pageBtns.children[z].scale.y + 0.02
				pageBtns.children[z].scale.x = pageBtns.children[z].scale.x + 0.02
				pageBtns.children[z].scale.z = pageBtns.children[z].scale.z + 0.02
				pageBtns.children[z].position.x =  pageBtns.children[z].position.x - 0.02 
				pageBtns.children[z].position.z =  pageBtns.children[z].position.z - 0.01 - (1.4 / Math.abs(initialX))
				pageBtns.children[z].rotation.y =  pageBtns.children[z].rotation.y - 0.01
		}
		openButtonI--;
	}
}

function animateCyl() {
		//Animate the gray cylinders when the button is Pressed	
	if (i > 0) {

			shouldReset = true
			
			i--
			 pageBusy = true
			if (isReverse) {
				cyl2.rotateY(Math.PI / 180 * 2)
				cyl1.rotateY(Math.PI / 180 * -2)
				cubGroupRight.rotation.y += 0.06;
				cubGroupRight.rotation.z += 0.06;
			}else{
				cyl2.rotateY(Math.PI / 180 * -2)
				cyl1.rotateY(Math.PI / 180 * 2)
				cubGroupLeft.rotation.y -= 0.06;
				cubGroupLeft.rotation.z -= 0.06;
			}

	}//Prevents the buttons from being created every frame. whoops.
	else if (shouldReset){
			
				pageBusy = false

				shouldReset = false;
	}
	
};


document.getElementById("indicator").style.left = pos + 'vw';


// handles click events
const pointer = new THREE.Vector2();
const raycaster = new THREE.Raycaster();

function onPointerMove( event ) {

	// calculate pointer position in normalized device coordinates
	// (-1 to +1) for both components

	pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

}


categories[curPage].Btns.forEach(changePage);
scene.add( pageBtns );
var notFirstRun = false;
function changePage(item, index){
	const objImg = new THREE.TextureLoader().load( item.image );
	objImg.magFilter = THREE.NearestFilter;
	objImg.colorSpace = THREE.SRGBColorSpace;
	const objMat = new THREE.MeshBasicMaterial( { transparent: true, dithering: true, map: objImg, side: THREE.DoubleSide } ); 

	const obj = new THREE.PlaneGeometry( 2, 1 );
	const obj2 = new THREE.Mesh( obj, objMat );
	obj2.position.x= item.pos.x 
	obj2.position.y= item.pos.y;
	obj2.position.z = item.pos.z;
	obj2.rotation.y= (item.pos.x / 7)
	
	if (notFirstRun == true){
		obj2.scale.x = 0;
		obj2.scale.y = 0;
		obj2.scale.z = 0;
		obj2.position.x= item.pos.x + (0.01 * 100)
			obj2.position.z= item.pos.z + ((0.005 + (0.7 / Math.abs(initialX)))*100)
		obj2.rotation.y= (item.pos.x / 7) + (0.005*100) ;
		
	}

	if (item.notLink){
		obj2.userData = {code: item.code}
	}else{
		obj2.userData = { link: item.link}
	}
	
	pageBtns.add( obj2 );

}
notFirstRun = true;
function updateCatName(catName){
	
	document.getElementById("indText").innerHTML = "s-"+catName+" 0"+(curPage+1);
}



const onMouseClick = (event) => {
	raycaster.setFromCamera( pointer, camera );
	const intersects = raycaster.intersectObjects( scene.children );

	

		
	
	if (intersects[0] && isIntroOpen == false  && pageBusy == false) {
		//Right Navigation Button
		if (intersects[0].object.parent == cubGroupRight) {
				curPage = curPage + 1
				
				isReverse = true
				
			//fixes overflow	
			if (categories[curPage] == null){
				curPage = 0
			}	
				
			buttonI = 50;
			i = 75
			
			btnClickSFX.play();

			updateCatName(categories[curPage].Name)
		
		}//Left Navigation Button
		else if (intersects[0].object.parent == cubGroupLeft) {
			curPage = curPage - 1
				isReverse = false

				
			//fixes page underflow	
			if (categories[curPage] == null){
				curPage = categories.length - 1	
			}
			buttonI =50;
			i = 75;
			
			btnClickSFX.play();
			updateCatName(categories[curPage].Name)
		}//This is for the buttons that appear in each category
		else if(intersects[0].object.userData.link != null){
			currentWindow = intersects[0].object.userData.link
			createWindow(currentWindow)
			btnClickSFX.play();
		}else if(intersects[0].object.userData.code != null){
			
			eval(intersects[0].object.userData.code)
			
		}
		
	}

}

var curObj;

const onMouseMove = (event) => {
	raycaster.setFromCamera( pointer, camera );
	const intersects = raycaster.intersectObjects( scene.children );

	

		
	
	if (intersects[0] && isIntroOpen == false  && pageBusy == false) {

		if(intersects[0].object.userData.link != null || intersects[0].object.userData.code != null){
			curObj = intersects[0].object
			curObj.scale.x  =1.2
			curObj.scale.y  =1.2
		}else{
			curObj.scale.x  =1
			curObj.scale.y  =1
		}
	}

}



function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	renderer.setSize( window.innerWidth, window.innerHeight );
	labelRenderer.setSize( window.innerWidth, window.innerHeight );
}

window.addEventListener('mousemove', onMouseMove)
window.addEventListener('mousedown', onMouseClick)
window.addEventListener('pointermove', onPointerMove)
window.addEventListener( 'resize', onWindowResize );
clearWindow() 

