const hands = document.querySelector(".hands")
const villainHTML = document.querySelector(".villain")
const pointCounter = document.querySelector(".menacing-score")
const pointsPerClickCounter = document.querySelector(".menacing-per-click")

var points = parseInt(localStorage.getItem("menacing")) || 0
var pointsPerClick = parseInt(localStorage.getItem("pointsPerClick")) || 1

document.body.onmousemove = mouseCoordinates

function menacingRain() {
    let randomNum = Math.random() * window.innerWidth - 35;
    var menacingDrop = document.createElement("div")
    menacingDrop.classList.add("menacing-rain")
    menacingDrop.style.left = randomNum + "px"
    document.body.appendChild(menacingDrop)

    setTimeout(() => { 
    menacingDrop.remove()
    }, 1500);
}

function addPoints(pointNum) {
    points += pointNum
    pointCounter.textContent = "ゴ " + points

    localStorage.setItem("menacing", parseInt(points))
}
window.onload = function() {
    pointCounter.textContent = "ゴ " + points
    pointsPerClickCounter.textContent = "ゴ " + pointsPerClick + " / click"
}

function mouseCoordinates(event){
    var mouseX = event.clientX
    var mouseY = event.clientY
    
    hands.style.left = mouseX + "px"
    hands.style.top = mouseY + "px"
}

document.body.onclick = click
var stillClicking = false

// generally left clicking
function click() {
    if (stillClicking == false) {
        stillClicking = true
        currentClickHandImage = document.querySelector(".leftHand")
        currentClickHandImage.style.transform = "translate(15%, -25%)"
        currentClickHandImage.style.rotate = "10deg"

        setTimeout(() => { 
        currentClickHandImage.style.rotate = "0deg";
        currentClickHandImage.style.transform = "translate(0, 0)";
        stillClicking = false }, 150);
    }
}

// generally right clicking
document.body.addEventListener('contextmenu', function(ev) {
    ev.preventDefault();
    if (stillClicking == false) {
        stillClicking = true
        currentClickHandImage = document.querySelector(".rightHand")
        currentClickHandImage.style.transform = "translate(-15%, -25%)"
        currentClickHandImage.style.rotate = "-10deg"

        setTimeout(() => { 
        currentClickHandImage.style.rotate = "0deg";
        currentClickHandImage.style.transform = "translate(0, 0)";
        stillClicking = false }, 150);
    }
    return false;
}, false);

// right clicking villain
villainHTML.addEventListener('contextmenu', function(ev) {
    ev.preventDefault();
    villainHTML.style.transform = "translate(-30px, -5px)"
    menacingRain()
    addPoints(1)

    setTimeout(() => { 
    villainHTML.style.transform = "translate(0, 0)"
    stillClicking = false }, 150);
    return false;
}, false);

villainHTML.onclick = villainClick

// left clicking villain
function villainClick() {
    villainHTML.style.transform = "translate(30px, -5px)"
    menacingRain()
    addPoints(1)

    setTimeout(() => { 
    villainHTML.style.transform = "translate(0, 0)"
    stillClicking = false }, 150);
}