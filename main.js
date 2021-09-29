canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var img_width = 1000;
var img_height = 500;
var img_image;
var img_x = 0;
var img_y = 125;
function add() {
	img_imgTag = new Image();
	img_imgTag.onload = uploadimg;
	img_imgTag.src = img_image;
	uploadimg();
}
function uploadimg() {
	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if ((keyPressed >=65 && keyPressed<=90)) {
		aplhabetkey();
		document.getElementById("d1").innerHTML="You pressed Alphabet key";
		console.log("alphabet key");
	} else if ((keyPressed >=48 && keyPressed<=57) || (keyPressed >=96 && keyPressed<=107) || (keyPressed == 109) || (keyPressed == 111)) { 
		numberkey();
		document.getElementById("d1").innerHTML="You pressed Number key";
		console.log("number key");
	} else if (keyPressed >=37 && keyPressed<=40) {
		arrowkey();
		document.getElementById("d1").innerHTML="You pressed Arrow key";
		console.log("arrow key");
	} else if ((keyPressed >= 0 && keyPressed <= 32) || (keyPressed == 127) || (keyPressed >= 112 && keyPressed <= 123) || (keyPressed >= 45 && keyPressed <= 46) || (keyPressed == 91) || (keyPressed == 93) || (keyPressed == 145) || (keyPressed >= 33 && keyPressed <= 36) || (keyPressed == 144)) {
		specialkey();
		document.getElementById("d1").innerHTML="You pressed Special  key";
		console.log("special key");
	} else if ((keyPressed == 173) || (keyPressed == 61) || (keyPressed == 59) || (keyPressed >= 219 && keyPressed <= 222) || (keyPressed >= 190 && keyPressed <= 192) || (keyPressed == 188)) {
		symbolkey();
		document.getElementById("d1").innerHTML="You pressed Symbol/Other key";
		console.log("symbol or other key");
	}
}
function aplhabetkey(){
	img_image="Alpkey.png";
	add();
}
function numberkey(){
	img_image="numkey.png";
	add();
}
function arrowkey(){
	img_image="arrkey.png";
	add();
}
function specialkey(){
	img_image="spkey.png";
	add();	
}
function symbolkey(){
	img_image="otherkey.png";
	add();
}