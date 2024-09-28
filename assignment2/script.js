const video = document.querySelector("#custom-video-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
video.removeAttribute("controls");
video.addEventListener("timeupdate", updateProgressBar);
function togglePlayPause() {
  if (video.paused || video.ended) {
    video.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    video.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}
function updateProgressBar() {
  const value = (video.currentTime / video.duration) * 100;
  progressBar.style.width = value + "%";
}

const muteUnmuteBtn = document.querySelector("#mute-unmute-btn")
console.log(muteUnmuteBtn)

muteUnmuteBtn.addEventListener("click", toggleSound)
const muteUnmuteImg = document.querySelector("#mute-unmute-img")
function toggleSound() {
    if(video.muted) {
        video.muted = false
        muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png"
        muteUnmuteBtn.style.backgroundColor = "#ff4848"
    } else {
        video.muted = true
        muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png"
        muteUnmuteBtn.style.backgroundColor = "grey"
    }
}

const increaseVolumeButton = document.querySelector("#increase-volume-btn");
increaseVolumeButton.addEventListener("click", increaseVolume);

const decreaseVolumeButton = document.querySelector("#decrease-volume-btn");
decreaseVolumeButton.addEventListener("click", decreaseVolume);

function updateVolume() {
    const volume = video.volume;
    console.log("Volume changed:", volume);
  }
  
  function increaseVolume() {
    if (video.volume < 0.9) {
      video.volume += 0.1;
    }
  }
  
  function decreaseVolume() {
    if (video.volume > 0.11) {
      video.volume -= 0.1;
    }
  }

const replayButton = document.querySelector("#replay-btn");
replayButton.addEventListener("click", replayVideo)

function replayVideo() {
  video.currentTime = 0;
}