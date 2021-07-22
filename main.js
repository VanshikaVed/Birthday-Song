var canvas = new fabric.Canvas("c1");
 var x= document.getElementById("myAudio");

 var image1 = "";
 function new_image()
 {
 fabric.Image.fromURL("hbd1.png", function(Img) {
 image1= Img;
 image1.scaleToWidth(750);
 image1.scaleToHeight(550);
 image1.set({
 top:0,
 left:100
 });
 canvas.add(image1);
 });
 }
 

function playSound(){
	x.play();
}
