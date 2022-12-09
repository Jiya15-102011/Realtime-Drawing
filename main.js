nosex=0;
nosey=0;
leftwristx=0;
rightwristx=0;
difference=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500)
    canvas=createCanvas(450,450);
    canvas.center();
    x=ml5.poseNet(video,modelloaded);
    x.on('pose',answer);
}
function modelloaded(){
    console.log('poseNet is loaded');
}
function answer(result){
if(result.length>0){
console.log(result);
nosex=result[0].pose.nose.x;
nosey=result[0].pose.nose.y;
console.log("nosex is"+nosex);
console.log("nosey is"+nosey);
rightwristx=result[0].pose.rightWrist.x;
leftwristx=result[0].pose.leftWrist.x;
console.log("rightWristx is"+rightwristx);
console.log("leftWristx is"+leftwristx);
difference=floor(leftwristx-rightwristx);
console.log("the difference of leftwristx and the rightwristx"+difference);
}

}
function draw(){
    background("grey");
    fill("blue");
    stroke("blue");
    square(nosex,nosey,difference);
    document.getElementById("a").innerHTML="width and the height of the square will be"+difference+"px";
}




