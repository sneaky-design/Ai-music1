leftWristX= 0;
leftWristY= 0;

rightWristX= 0; 
rightWristY= 0; 




music = "";
music2 = "";


function preload(){
    music = loadSound("music.mp3");
    music2 = loadSound("music2.mp3");
}



function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("poseNet has started.")
}

function gotPoses(results){

    if(results.length > 0){
        console.log(results)
        scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("score Right Wrist =" + scoreRightWrist + "score Left Wrist" + scoreLeftWrist);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("right wrist x =" + rightWristX + "right wrist y" + rightWristY);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("left wrist x =" + leftWristX + "left wrist y" + leftWristY);

    }
}

function draw(){
    image(video,0,0,600,500);
}
