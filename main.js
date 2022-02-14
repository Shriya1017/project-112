Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');

function TakeSnapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
});
}

console.log('ml5 version',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ClfRSLvf9/model.json',modeloaded);
function modeloaded(){
    console.log('modeloaded');
}

function speak(){
    var synth=window.speechSynthesis;
    speak_data_1="The 1ST Prediction is"+prediction_1;
    var utterThis=new SpeechSynthesisUtterance (speak_data_1);
    synth.speak(utterThis);
}

function check(){
    img=document.getElementById('captured_image');
    classifier.classify(img,gotResult);
}

function gotResult(error,results){
if(error){
    console.error(error);

}

else{
    console.log(results);
    document.getElementById("result_Gesture_name_1").innerHTML=results[0].label;
    prediction_1=results[0].label;
    
    speak();

    if(result[0].label=="That Was A Marvelous Victory"){
        document.getElementById("update_emoji_1").innerHTML="&#9996;";

    }

    if(result[0].label=="Best"){
        document.getElementById("update_emoji_1").innerHTML="&#128076;";
        
    }

    if(result[0].label=="Beautiful"){
        document.getElementById("update_emoji_1").innerHTML="&#128077;";
        
    }

    if(result[0].label=="Swag"){
        document.getElementById("update_emoji_1").innerHTML="&#129304;";
        
    }
}
}