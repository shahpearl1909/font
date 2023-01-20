function preload(){
}
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    video.position(150,150);

    canvas=createCanvas(500,500);
    canvas.position(850,150);
    
    posenet=ml5.poseNet(video, modelLoad);
    posenet.on("pose", gotPose);
}
function draw(){
background("#ffffff");
}
function modelLoad(){
    console.log("poseNet is initialized");
}
function gotPose(results){
    if (results.length > 0){
        console.log(results);
    }
}
