video="";
status = "";

function setup(){
    canvas = createCanvas( 480 , 380);
    canvas.center();
    video = createCapture( VIDEO);
    video.hide();
}

function draw(){
    image(video ,0 ,0 , 480 , 380);
}

function start(){
 objectdetector = ml5.objectDetector("cocossd" , modalLoaded);
 document.getElementById("status").innerHTML = " status : detecting objects";
}

function modalLoaded(){
    console.log(" Modal Loaded ");
    status = true;
    video.loop();
}

