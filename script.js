const PlayBtn =document.getElementById("play-pause-btn");
const audio = document.getElementById("audio")
const Songduration = document.getElementById("song-duration");
let check=false;

PlayBtn.addEventListener("click",(()=>{
    if(check===false){
        audio.play();
    console.log("music started");
    check=true;
    Songduration.innerText=`${audio.duration}`
    }
    else{
        audio.pause();
        console.log("music started");
        check=false;
    }
   
}))

