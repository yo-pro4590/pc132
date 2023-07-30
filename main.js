preditction_1="";
preditction_2="";

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90,

});

camera = document.getElementById("camera");
Webcam.attach('#camera');


function take_snapshot(){
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    })


}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The frist prediction" + preditction_1;
    speak_data_2 = "The second prediction" + preditction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
    

}
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/oz8qHXi3H/model.json",modelLoded);

function modelLoded(){
    console.log("modelLoded")
}
function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);

}

function gotResult(error, result){
if (error){
    console.error(error);
}
else{
    console.log(result);
    document.getElementById("result_emotion_name").innerHTML=result[0].label;
    document.getElementById("result_emotion_name2").innerHTML=result[0].label;
    preditction_1=result[0].label;
    preditction_2=result[1].label;
    speak();
    
    if(result[0].label == "Happy"){
        document.getElementById("update_emoji").innerHTML = "&#128522"
    }

    if(result[0].label == "Sad"){
        document.getElementById("update_emoji").innerHTML = "&#128532"
    }

    if(result[0].label == "Criying"){
        document.getElementById("update_emoji").innerHTML = "&#128557"
    }

    if(result[0].label == "Angry"){
        document.getElementById("update_emoji").innerHTML = "&#128548"
    }

    if(result[0].label == "Surprise"){
        document.getElementById("update_emoji").innerHTML = "&#128562"
    }

     
    if(result[1].label == "Happy"){
        document.getElementById("update_emoji").innerHTML = "&#128522"
    }

    if(result[1].label == "Sad"){
        document.getElementById("update_emoji").innerHTML = "&#128532"
    }

    if(result[1].label == "Criying"){
        document.getElementById("update_emoji").innerHTML = "&#128557"
    }

    if(result[1].label == "Angry"){
        document.getElementById("update_emoji").innerHTML = "&#128548"
    }

    if(result[1].label == "Surprise"){
        document.getElementById("update_emoji").innerHTML = "&#128562"
    }


    

}
}


