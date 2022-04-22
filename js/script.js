let audio = document.createElement("audio") ;
audio.volume=0.30
let box = document.querySelector(".box") ;
let button = document.querySelector("button") ;
button.onclick = function(){
    box.classList.add("box_open") ;
    audio.setAttribute("src", "Песня.mp3") ;
    audio.play() ;
}