const hands = document.querySelector(".hands")
const villainHTML = document.querySelector(".villain")
const crosshair = document.querySelector(".crosshair")
const pointCounter = document.querySelector(".menacing-score")
const pointsPerClickCounter = document.querySelector(".menacing-per-click")
const floorNum = document.querySelector(".floor-num")

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

    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

function mouseCoordinates(event){
    var mouseX = event.clientX
    var mouseY = event.clientY
    
    hands.style.left = mouseX + "px"
    hands.style.top = mouseY + "px"
    
    crosshair.style.left = mouseX + "px"
    crosshair.style.top = mouseY + "px"
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

var villainX = 0

// right clicking villain
villainHTML.addEventListener('contextmenu', function(ev) {
    ev.preventDefault();
    if (villainX > (-window.innerWidth)/2 - (0.15 * (-window.innerWidth))) {
        villainX -= 30
        villainHTML.style.transform = "translate(" + villainX + "px, -5px)"
        menacingRain()
        addPoints(1)
    
        setTimeout(() => { 
        villainHTML.style.transform = "translate(" + villainX + "px, 0px)"
        stillClicking = false }, 150);
    }
    return false;
}, false);

villainHTML.onclick = villainClick

// left clicking villain
function villainClick() {
    if (villainX < (window.innerWidth)/2 - (0.15 * (window.innerWidth))) {
        villainX += 30
        villainHTML.style.transform = "translate(" + villainX + "px, -5px)"
        menacingRain()
        addPoints(1)

        setTimeout(() => { 
            villainHTML.style.transform = "translate(" + villainX + "px, 0px)"
        stillClicking = false }, 150);
    }
}



// hover to shop

var stillScrolling = false
const hoverToShopUp = document.querySelector(".hover-to-shop")
const hoverToShop = document.querySelector(".hover-to-shop-up")
const hoverToFight = document.querySelector(".hover-to-fight")
const hoverToMusic = document.querySelector(".hover-to-music")

hoverToFight.addEventListener('mouseover', function(ev) {
    scrollTo("fight")
})
hoverToShop.addEventListener('mouseover', function(ev) {
    scrollTo("shop")
})
hoverToShopUp.addEventListener('mouseover', function(ev) {
    scrollTo("shop")
})
hoverToMusic.addEventListener('mouseover', function(ev) {
    scrollTo("music")
})

function scrollTo(area) {
    if (stillScrolling == false) {
        stillScrolling = true
        if (area ==  "fight") {
            window.scroll({
                top: (window.innerHeight) * 0,
                left: 0,
                behavior: 'smooth'
            });
            setTimeout(() => { floorNum.textContent = "0" }, 250);
        }
        else if (area == "shop") {
            window.scroll({
                top: (window.innerHeight) * 1,
                left: 0,
                behavior: 'smooth'
            });
            setTimeout(() => { floorNum.textContent = "-1" }, 250);
        }
        else if (area == "music") {
            window.scroll({
                top: (window.innerHeight) * 2,
                left: 0,
                behavior: 'smooth'
            });
            setTimeout(() => { floorNum.textContent = "-2" }, 250);
        }
        setTimeout(() => {  
            stillScrolling = false
        }, 500);
    }
}