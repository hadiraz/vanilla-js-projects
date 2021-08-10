const videoPlayer = document.querySelector("video");
const playButton = document.querySelector("#play");
const range = document.querySelector("#range");
const muteButton = document.querySelector("#sound-button");
const playIcon = document.querySelector(".fa-play");
const pauseIcon = document.querySelector(".fa-pause");
const volumeRange = document.querySelector("#audio-range");
let rangeValue ;
window.addEventListener("load",event => runTheProgram())
playButton.addEventListener("click" , event => playPause());
// playButton.addEventListener("keydown" , event => playPause());
videoPlayer.addEventListener("timeupdate" , event => changeRange());
range.addEventListener("change" , event => goToTime(event));
muteButton.addEventListener("click" , event => setVolume(0));
volumeRange.addEventListener("change" , event => setVolume(event));
function runTheProgram(){
    let videoDuration = Number(videoPlayer.duration) ;
    console.log(typeof(videoDuration))
    range.setAttribute("max" , Math.round(videoDuration));
}
function playPause(){
    playButton.classList.toggle("active");
    if(playButton.classList.contains("active")){
        videoPlayer.play();
        playIcon.style.display = "none" ;
        pauseIcon.style.display = "block";
    }else{
        videoPlayer.pause()
        playIcon.style.display ="block" ;
        pauseIcon.style.display = "none"
    }
}
function changeRange(customChange = null){
    if(customChange === null || customChange == ""){
        rangeValue = Math.round(videoPlayer.currentTime) ;
    }else{
        rangeValue = customChange ;
        videoPlayer.currentTime = rangeValue ;
    }
    range.value = rangeValue ;
}
function goToTime(event){
    const rangeCustomValue = Number(event.target.value) ;
    changeRange(rangeCustomValue);
}
function setVolume(mode){
    let videoVolume = videoPlayer.volume ;
    let volumeRangeValue = null ;
    if( mode === 0 && !muteButton.classList.contains("active")){
        videoVolume = 0 ;
        volumeRangeValue = 0 ;
        muteButton.classList.add("active");
    }else if(muteButton.classList.contains("active")){
        muteButton.classList.remove("active");
        videoVolume = 0.2 ;
        volumeRangeValue = 0.2 ;
    }

    if(typeof(mode)!=="number"){
    videoVolume = volumeRangeValue = (mode.target.value)/100 ;
        if(videoVolume === 0){
        muteButton.classList.add("active");
     }
    }
    if(mode === 1){
        volumeRangeValue = videoVolume ;
    }

    volumeRange.value = volumeRangeValue*100 ;
    videoPlayer.volume = Number(videoVolume) ;
}

