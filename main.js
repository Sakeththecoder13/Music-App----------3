song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristy = 0;



function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}


function draw(){
    image(video, 0, 0, 600, 500);
}

function preload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");

}


function modelLoaded(){
    console.log("Model is loaded!");
}


function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("Left wrist X coordinates:" + leftWristX, "Left wrist Y coordinates:" + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Right wrist X coordinates:" +rightWristX, "Right wrist Y coordinates:" + rightWristY);
        
    }
}





