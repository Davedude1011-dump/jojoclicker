const introButtons = document.querySelector(".intro-buttons")
const introScreen = document.querySelector(".intro-screen")
const musicPlayer = document.querySelector(".backgroundMusic")
var volume = 0.2

var muteCheck = localStorage.getItem("muteCheck") || false
var muteButton = document.querySelector(".mute-button")
window.onload = function() {
    if (muteCheck == true) {
        muteButton.style.backgroundImage = "url('data:image/svg+xml,%3Csvg width='667' height='667' viewBox='0 0 667 667' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='333.451' cy='333.344' r='333.345' fill='%23FAEBD7'/%3E%3Cpath d='M65.6654 295.105C65.6654 278.537 79.0968 265.105 95.6654 265.105H185.342V401.584H95.6654C79.0968 401.584 65.6654 388.152 65.6654 371.584V295.105Z' fill='%2318202C'/%3E%3Cpath d='M99.8757 341.009C95.1061 337.012 95.1061 329.677 99.8757 325.68L256.347 194.561C262.856 189.107 272.77 193.735 272.77 202.226V464.463C272.77 472.954 262.856 477.581 256.347 472.128L99.8757 341.009Z' fill='%2318202C'/%3E%3Crect x='326' y='257.352' width='30' height='244.938' rx='15' transform='rotate(-45 326 257.352)' fill='%2318202C'/%3E%3Crect x='499.198' y='236.139' width='30' height='244.938' rx='15' transform='rotate(45 499.198 236.139)' fill='%2318202C'/%3E%3C/svg%3E')"
    }
    else {
        muteButton.style.backgroundImage = "url('data:image/svg+xml,%3Csvg width='667' height='668' viewBox='0 0 667 668' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='333.451' cy='334.238' r='333.345' fill='%23FAEBD7'/%3E%3Cpath d='M65.6653 295.999C65.6653 279.43 79.0968 265.999 95.6653 265.999H185.342V402.477H95.6654C79.0968 402.477 65.6653 389.046 65.6653 372.477V295.999Z' fill='%2318202C'/%3E%3Cpath d='M99.8757 341.903C95.106 337.906 95.106 330.57 99.8757 326.573L256.347 195.455C262.856 190.001 272.77 194.628 272.77 203.119V465.357C272.77 473.848 262.856 478.475 256.347 473.021L99.8757 341.903Z' fill='%2318202C'/%3E%3Cpath d='M337.031 362.734C341.68 365.532 347.795 364.05 349.862 359.033C353.573 350.026 355.232 340.26 354.66 330.452C354.089 320.644 351.307 311.137 346.575 302.622C343.939 297.879 337.693 297.118 333.4 300.437V300.437C329.108 303.757 328.434 309.902 330.755 314.807C333.235 320.049 334.703 325.746 335.043 331.595C335.384 337.445 334.589 343.274 332.734 348.768C330.998 353.91 332.382 359.935 337.031 362.734V362.734Z' fill='%2318202C'/%3E%3Cpath d='M394.589 371.585C400.682 375.253 408.697 373.31 411.406 366.735C416.271 354.931 418.444 342.131 417.695 329.276C416.946 316.422 413.3 303.961 407.098 292.802C403.643 286.586 395.457 285.587 389.831 289.938V289.938C384.205 294.288 383.322 302.343 386.364 308.771C389.615 315.642 391.538 323.108 391.985 330.775C392.431 338.442 391.389 346.08 388.958 353.282C386.683 360.02 388.496 367.917 394.589 371.585V371.585Z' fill='%2318202C'/%3E%3Cpath d='M463.583 390.084C472.694 395.568 484.679 392.664 488.73 382.831C496.004 365.18 499.254 346.041 498.134 326.819C497.014 307.596 491.563 288.964 482.288 272.277C477.122 262.982 464.881 261.489 456.469 267.995V267.995C448.056 274.5 446.735 286.544 451.284 296.157C456.145 306.43 459.02 317.594 459.688 329.059C460.357 340.524 458.798 351.946 455.162 362.715C451.761 372.79 454.472 384.599 463.583 390.084V390.084Z' fill='%2318202C'/%3E%3C/svg%3E%0A')"
    }
    console.log(muteButton.style.backgroundImage)
}

introButtons.addEventListener("click", function() {
    introButtons.classList.add("intro-buttons-fall-class")
    setTimeout(() => {
        introScreen.classList.add("intro-buttons-slide-class")
        introButtons.remove()
        setTimeout(() => {
            introScreen.remove()
            musicPlayer.play()
            musicPlayer.volume = volume
        }, 1100)
    }, 1100)
})

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