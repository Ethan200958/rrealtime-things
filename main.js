


function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide(); 
    classifying = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/a8iRcE3DS/model.json',modelLoaded)
}

function modelLoaded() {
    console.log("Model has SUCCESSFULLY loaded!");
}

function draw() {
    image(video, 0, 0, 300, 300);
    classifying.classify(video, gotResult);
}

function gotResult(error, result) {
    if(error) {
        console.error(error);
    } else {
        console.log("0 Current errors");
        console.log(result);
        document.getElementById("person_name").innerHTML = result[0].label;
        document.getElementById("person_accuracy").innerHTML = result[0].confidence.toFixed(3);
    }
}