//Generating random numbers
let randomNumber1=Math.floor(Math.random()*6+1);
let randomNumber2=Math.floor(Math.random()*6+1);

//Generating random images

let randomImage1="th"+randomNumber1+".png";
let randomImage2="th"+randomNumber2+".png";

//Accessing the image using DOM
const imageDice1=document.getElementsByClassName("images")[0];
const imageDice2=document.getElementsByClassName("images")[1];
console.log(imageDice1,imageDice2);

//Changing the src file using setAttribute
imageDice1.setAttribute("src",randomImage1);
imageDice2.setAttribute("src",randomImage2);

//Writing conditions
if (randomNumber1>randomNumber2) {
    document.getElementById("result").innerHTML="Priyansh is the Winner!!!"
    document.getElementById("body").style.backgroundImage="url('firework.gif')"
}
else if (randomNumber1<randomNumber2) {
    document.getElementById("result").innerHTML="Khavin is the Winner!!!"
    document.getElementById("body").style.backgroundImage="url('firework2.gif')"

}
else if (randomNumber1==randomNumber2) {
    document.getElementById("result").innerHTML="Its a DRAW!!!"

}
