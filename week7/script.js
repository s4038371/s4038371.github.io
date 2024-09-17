const notify = document.querySelector("#notify")
console.log(notify)

const playButton = document.querySelector("#play-button")
console.log(playButton)
playButton.addEventListener("click", playAudio)
function playAudio() {
    notify.play()
}

const pauseButton = document.querySelector("#pause-button")
console.log(pauseButton)
pauseButton.addEventListener("click", pauseAudio)
function pauseAudio() {
    notify.pause()
}

const popSound = document.querySelector("#pop-sound")
console.log(popSound)

const popButton = document.querySelector("#pop-button")
console.log(popButton)
popButton.addEventListener("click", popAudio)
function popAudio() {
    popSound.play()
}

const myVideo = document.querySelector("#my-video")
console.log(myVideo)

const startVideo = document.querySelector("#start-video")
console.log(startVideo)
startVideo.addEventListener("click", playVideo)
function playVideo() {
    myVideo.play()
}

const stopVideo = document.querySelector("#stop-video")
console.log(stopVideo)
stopVideo.addEventListener("click", pauseVideo)
function pauseVideo() {
    myVideo.pause()
}