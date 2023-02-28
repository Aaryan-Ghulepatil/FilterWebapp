function preload(){

}

function setup(){
  canvas=createCanvas(600,500);
  canvas.center();
  video=createCapture(VIDEO);
  video.size(600,500);
  video.hide();
  poseNet=ml5.poseNet(video,modelLoaded);
  poseNet.on("pose",gotPoses);
}

function draw(){
  image(video,0,0,600,500);
}

function take_pic(){
    save("mustache_pic.png");
}

function modelLoaded(){
  console.log("poseNet Initialised");
}

function gotPoses(){
  if(results.length>0){
    console.log(results);
    console.log("Nose X = "+results[0].pose.nose.x);
    console.log("Nose Y = "+results[0].pose.nose.y);
  }
}