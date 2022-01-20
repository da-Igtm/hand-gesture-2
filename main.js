Webcam.set({
    width:380,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach(camera);

function snapshot(){
    Webcam.snap(function (data_uri){
        console.log("Rudra")
            document.getElementById("result").innerHTML="<img id='img_capture' src="+data_uri+">"
    });
}

console.log("ml5.version="+ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/njPbVdJ3f/model.json',model_loaded);

function model_loaded(){
    console.log("model is ready");
}