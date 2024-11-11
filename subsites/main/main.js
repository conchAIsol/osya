const introText = [{text:">Welcome To The Wired", delay:200}, {text:"\n>Logging On", delay:200},{text:".", delay:150},{text:".", delay:150},{text:". \n", delay:200},{text:">ERROR:", delay:250},{text:" Username Not Specified", delay:200},{text:"\n>Please Enter A Valid Username", delay:200},{text:"\n>Press Enter When You Are Ready \n>", delay:0}]
var curLine = 0;

var target = "#msg"
var message = introText[curLine].text
var index = 0;
var username = "User Cannot Be Found"

var x = document.createElement("INPUT");


function showText(interval) {   
	if (index < message.length) {
		$(target).append(message[index++]);
		content.remove();	
		setTimeout(function () { showText(target, message, index, interval); }, interval);
		}
	 if (index == message.length && curLine < introText.length) {
		index = 300;
		setTimeout(function(){

			if (introText[curLine] && curLine < (introText.length -1)){

						
				index = 0;
				curLine++
				
				message = introText[curLine].text;
					
				setTimeout(function () { showText(40); blinkSpeed=400}, 40);
			}else{

				blinkSpeed = 400;
				x.setAttribute("type", "text");
				x.id = "introInput"
				document.getElementById('msg').appendChild(x);
				x.focus();
			}
					
		}, introText[curLine].delay);
				
	}

}


$(function () {
	showText(40);   

});
var blinkSpeed = 400;
var showBlink = true;
var test;
var content = document.createTextNode("_")

function blinky(){
	if (showBlink) {
		
		content.id = 'blinky'
		
		document.getElementById('msg').append(content)
		
		setTimeout(function(){showBlink = false; blinky()}, blinkSpeed);
	}else if (showBlink == false){

		content.remove();
		
		setTimeout(function(){ showBlink = true; blinky()}, blinkSpeed);
	}

}
blinky()

x.addEventListener("input", adjustWidth);



window.addEventListener('mousedown', x.focus());

function adjustWidth() {
   var value = x.value;
   var width = value.length * 22.5; // 8px per character
   x.style.width = width + "px";
}

if (getCookie("username")) {
		username = getCookie("username")
		document.getElementById("username").innerHTML = "== [Welcome To The Wired, " + username + "] =="
        document.getElementById('welcomeDiv').remove();
		document.getElementById('introLines').style.opacity = 0.25;
}


x.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
		username = x.value
		document.getElementById("username").innerHTML = "== [Welcome To The Wired, " + username + "] =="
        document.getElementById('welcomeDiv').remove();
		document.getElementById('introLines').style.opacity = 0.25;
		setCookie("username", username, 30)
    }
});

document.getElementById('deskSelector').addEventListener("mouseover", function(event) {
	
	document.getElementById('footer').firstElementChild.src="assets/desktop_select.png";
	
});

document.getElementById('deskSelector').addEventListener("mouseout", function(event) {
	
	document.getElementById('footer').firstElementChild.src="assets/desktop.png";
	
});

document.getElementById('deskSelector').addEventListener('mousedown', function(event) {
	setCookie("username", username, -10)
	location.reload()
});

	var leftPos = { x: 0, y: 0 }
	var rightPos = { x: window.innerWidth/1.5, y: window.innerHeight }

var divToMove;

var isMouseDown = false;
const move = (e) => {
  //Try, catch to avoid any errors for touch screens (Error thrown when user doesn't move his finger)
  try {
    //PageX and PageY return the position of client's cursor from top left of screen
    var x = true ? e.pageX : e.touches[0].pageX;
    var y = true ? e.pageY : e.touches[0].pageY;
  } catch (e) {}
  //set left and top of div based on mouse position
  divToMove.style.left = x - 70 + "px";
  divToMove.style.top = y - 5 + "px";
	skew(divToMove)
};
//For mouse
document.addEventListener("mousemove", (e) => {
	if (isMouseDown) {
		move(e);
	}
  
});

function skew(div){
	var rect = div.getBoundingClientRect();

	var x = rect.top + window.pageYOffset;
	var y = rect.left + window.pageXOffset;

	var mathLeft = Math.hypot(x - leftPos.x, y - leftPos.y);
	var mathRight = Math.hypot(x - rightPos.x, y - rightPos.y)
	var finalAngle
	var angle1 = -(mathLeft / (1750 - (mathLeft/1.7)));
	var angle2 = (mathRight / (1750 - (mathRight/1.7)));
	if (Math.abs(angle2) < Math.abs(angle1)) {
		finalAngle = angle1;
	}else{
		finalAngle = angle2;
	}
	div.style.transform = "skew(" + finalAngle + "deg,  0deg)";
}


var moveableDivs = document.getElementsByClassName("move");

var i;
var currDiv;
for (i = 0; i < moveableDivs.length; i++) {
	skew(moveableDivs[i].parentElement)
	currDiv = moveableDivs[i]
	moveableDivs[i].addEventListener("mousedown", function(event){divToMove = event.target.parentElement; isMouseDown = true; });
	moveableDivs[i].addEventListener("mouseup", function(){isMouseDown = false});
}

//W3 Schools are the goats. Cookies for saving/updating the Username field
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}