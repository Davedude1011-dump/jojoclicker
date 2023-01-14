const introButtons = document.querySelector(".intro-buttons")
const introScreen = document.querySelector(".intro-screen")
const musicPlayer = document.querySelector(".backgroundMusic")
const volumeSlider = document.querySelector(".volume-slider")

var musicDisk = document.querySelector(".music-disk")

var volume = localStorage.getItem("musicVolume") || 0.2

var muteCheck = localStorage.getItem("muteCheck") || false
var muteButton = document.querySelector(".mute-button")


window.onload = function() {
    
    if (muteCheck == "true") {
        muteButton.classList.add("mute-button-mute")
    }
    else {
        muteButton.classList.add("mute-button-not-mute")
        musicDisk.classList.add("spin")
    }
    window.scroll({
        top: (window.innerHeight) * 0,
        left: 0,
        behavior: 'smooth'
    });
}
volumeSlider.value = volume
muteButton.addEventListener("click", function() {
    if (muteCheck == "true") {
        muteCheck = false
        localStorage.setItem("muteCheck", muteCheck)
        musicDisk.classList.add("spin")
        musicPlayer.play()
        muteButton.classList.remove("mute-button-mute")
        muteButton.classList.add("mute-button-not-mute")
    }
    else {
        muteCheck = "true"
        localStorage.setItem("muteCheck", muteCheck)
        musicDisk.classList.remove("spin")
        musicPlayer.pause()
        muteButton.classList.remove("mute-button-not-mute")
        muteButton.classList.add("mute-button-mute")
    }
})
muteButton.addEventListener('contextmenu', function(ev) {
    ev.preventDefault();
    if (muteCheck == "true") {
        muteCheck = false
        localStorage.setItem("muteCheck", muteCheck)
        musicDisk.classList.add("spin")
        musicPlayer.play()
        muteButton.classList.remove("mute-button-mute")
        muteButton.classList.add("mute-button-not-mute")
    }
    else {
        muteCheck = "true"
        localStorage.setItem("muteCheck", muteCheck)
        musicDisk.classList.remove("spin")
        musicPlayer.pause()
        muteButton.classList.remove("mute-button-not-mute")
        muteButton.classList.add("mute-button-mute")
    }
    return false;
}, false);

introButtons.addEventListener("click", function() {
    introButtons.classList.add("intro-buttons-fall-class")
    if (muteCheck == "true") {
        muteButton.classList.add("mute-button-mute")
    }
    else {
        muteButton.classList.add("mute-button-not-mute")
        musicDisk.classList.add("spin")
        musicPlayer.volume = volume
        musicPlayer.play()
    }
    setTimeout(() => {
        introScreen.classList.add("intro-buttons-slide-class")
        introButtons.remove()
        setTimeout(() => {
            introScreen.remove()
            musicPlayer.volume = volume
        }, 1100)
    }, 1100)
})
introButtons.addEventListener('contextmenu', function(ev) {
    ev.preventDefault();
    introButtons.classList.add("intro-buttons-fall-class")
    if (muteCheck == "true") {
        muteButton.classList.add("mute-button-mute")
    }
    else {
        muteButton.classList.add("mute-button-not-mute")
        musicDisk.classList.add("spin")
        musicPlayer.volume = volume
        musicPlayer.play()
    }
    setTimeout(() => {
        introScreen.classList.add("intro-buttons-slide-class")
        introButtons.remove()
        setTimeout(() => {
            introScreen.remove()
            musicPlayer.play()
        }, 1100)
    }, 1100)
    return false;
}, false);

var musicTimes = [
    16,
    26,
    39,
    55,
    71,
    78,
    89,
    97,
    133,
    140,
    147,
    154,
    189,
    220,
    240,
    243,
    246,
    250,
    272
]
var musicText = [
    "Go crazy, one by one",
    "Brrt, stick up, GIOGIO",
    "Buc-ci-ci-ci-cirati",
    "Brrt, stick up, GIOGIO",
    "GIOGIO",
    "GIOGIO",
    "Go crazy, one by one",
    "Brrt, stick up, GIOGIO",
    "Golden Wind",
    "Golden Wind",
    "Golden Wind",
    "Golden Wind",
    "Buc-ci-ci-ci-cirati",
    "GIOGIO",
    "GIOGIO",
    "Golden Wind",
    "GIOGIO",
    "Golden Wind",
    "Go crazy, one by one",
]
var fourDown = 0

function scrollText(textContent) {
    var newDiv = document.createElement("div")
    newDiv.textContent = textContent
    newDiv.classList.add("scroll-text")
    document.querySelector(".fighting-area").insertBefore(newDiv, document.querySelector(".villain"))
    setTimeout(() => { 
        newDiv.remove()
    }, 3000);
}

musicPlayer.addEventListener("timeupdate", function() {
    var currentTime = parseInt(this.currentTime, 10)
        fourDown += 0.25
        if (fourDown == 1) {
            fourDown = 0
            // in here only goes every full second:
            if (musicTimes.includes(currentTime)) {
                scrollText(musicText[musicTimes.indexOf(currentTime)])
            }
        }
})



// volume slider

volumeSlider.addEventListener('input', function () {
    musicPlayer.volume = volumeSlider.value
    localStorage.setItem("musicVolume", volumeSlider.value)
}, false);