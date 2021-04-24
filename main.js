noseX = 0;
noseY = 0;
rightEyeX = 0;
rightEyeY = 0;

function preload()
{
clown_nose = loadImage("https://i.postimg.cc/XYj57jbs/Clown-Nose-PNG-Image.png");
sunglasses = loadImage("https://i.postimg.cc/FRSj2Tyc/sunglasses.png")
}


function setup()
{
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on("pose",gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet Is Initialized");
}

function gotPoses(results)
{
    if(results.length >0)
    {
    console.log(results);
    console.log("nose");
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    rightEyeX = results[0].pose.rightEye.x;
    rightEyeY = results[0].pose.rightEye.y
    }
}

function draw()
{
image(video, 0, 0, 300, 300);
//fill("red");
//stroke("white")
//circle(noseX,noseY,25);
image(clown_nose,noseX-10,noseY-10,30,30);
image(sunglasses,rightEyeX-33   ,rightEyeY-40,100,100);
}

function take_snapshot()
{
 save("RaghavFilter.png");
}