let tocar=document.getElementById("tocar");
let dvolume=document.getElementById("dvolume");
let avolume=document.getElementById("avolume");
let audio=new Audio("music.mp3");
tocar.onclick=tocarSom;
dvolume.onclick=diminuir;
avolume.onclick=aumentar;
function tocarSom() {
  audio.play();
}
function diminuir() {
    audio.volume=0.1;
}
function aumentar() {
    audio.volume=1;
}