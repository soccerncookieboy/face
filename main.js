Webcam.set({
 width:350,
 height:300,
 image_format:'png',
 png_quailty: 90,
})
camera = document.getElementById("camera")
Webcam.attach('#camera')
function capture(){
    Webcam.snap(function(data_uri){
    document.getElementById("picture").innerHTML = "<img id='new_picture' src='"  +data_uri+ "'/>"
    })
}
console.log("ml5 version", ml5.version)
classifer = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Z8FRg8GR2/model.json",modelLoaded);

function modelLoaded(){
    console.log("model Loaded properly!")
}
function identify(){
    img = document.getElementById("new_picture");
    classifer.classify(img, gotresult)
}
function gotresult(error, results){
    if (error) {
        console.error(error)
    }else{
        console.log(results)
        document.getElementById("object-result").innerHTML = results[0].label;
        document.getElementById("accuracy-result").innerHTML = results[0].confidence.toFixed(3);
    }
}