const hands = document.querySelector(".hands")
const villainHTML = document.querySelector(".villain")
const crosshair = document.querySelector(".crosshair")
const pointCounter = document.querySelector(".menacing-score")
const pointsPerClickCounter = document.querySelector(".menacing-per-click")
const floorNum = document.querySelector(".floor-num")
const villainHpCounter = document.querySelector(".villainHP")
const villainName = document.querySelector(".villain-name")

let currentTime = new Date();
let currentHour = currentTime.getHours();
let currentMinute = currentTime.getMinutes();
let currentTimeInMinutes = currentHour * 60 + currentMinute;

var userIsVampire = localStorage.getItem("userIsVampire") || false
var vampireBoost = 1
var vampireFormBought = localStorage.getItem("vampireFormBought") || false;
var stoneMaskBought = localStorage.getItem("stoneMaskBought") || false;
if (currentTimeInMinutes >= 7.5 * 60 && currentTimeInMinutes < 19.5 * 60 && vampireFormBought == "true") {
    if (stoneMaskBought == "true") {
        vampireBoost = 1.5
    }
    else {
        vampireBoost = 0.8
    }
}
else if (currentTimeInMinutes < 7.5 * 60 && currentTimeInMinutes >= 19.5 * 60 && vampireFormBought == "true") {
    if (stoneMaskBought == "true") {
        vampireBoost = 3
    }
    else {
        vampireBoost = 10
    }
}

var villainAttackPoint = parseInt(localStorage.getItem("villainAttackPoint")) || 0
var villainNum = parseInt(localStorage.getItem("villainNum")) || 0

function isSunOut() {
    // get the current date and time
    const now = new Date();
  
    // get the sunrise and sunset times for the user's location
    const sunrise = new Date();
    sunrise.setHours(7);
    sunrise.setMinutes(30);
  
    const sunset = new Date();
    sunset.setHours(19);
    sunset.setMinutes(30);
  
    // check if the current time is between sunrise and sunset
    if (now >= sunrise && now <= sunset) {
        if (userIsVampire == true) {
            pointsPerClick = (pointsPerClick / vampireDeBuff)
            pointsPerClickCounter.textContent = "ゴ " + pointsPerClick + " / click"
        }
    }
    else {
        console.log(pointsPerClick)
        if (userIsVampire == true) {
            pointsPerClick = (pointsPerClick * vampireBoost)
            pointsPerClickCounter.textContent = "ゴ " + pointsPerClick + " / click"
        }
    }
  }

function villainAttack(attackNum) {
    villainAttackPoint += attackNum
    villainHealthDown()
}

function villainHealthDown() {
    console.log(villainAttackPoint)
    villainHpCounter.textContent = "( " + (villainsHealth[villainNum] - villainAttackPoint) + " / " + villainsHealth[villainNum] + " )"
    if ((villainsHealth[villainNum] - villainAttackPoint) < 1) {
        villainNum ++
        localStorage.setItem("villainNum", villainNum)
        villainAttackPoint = 0
        localStorage.setItem("villainAttackPoint", 0)
        villainHTML.style.backgroundImage = "url('images/enemyDie1.gif')"

        villainName.textContent = villains[villainNum]

        setTimeout(() => {
            villainHTML.style.backgroundImage = `url('images/villains/${villains[villainNum]}.png')`
        }, 1200)
    }
}

var villains = [
    "Oingo-Boingo",
    "Lang-Rangler",
    "Rikiel",
    "Bruford",
    "Anubis",
    "Ghiaccio",
    "Noob-Dio",
    "Wamuu",
    "Yoshikage-Kira",
    "Diavolo",
    "Rohan-Kishibe",
    "Pro-Dio",
    "Kars",
    "Enrico-Pucci",
    "Lovely-Valentine",
    "Tooru",
]
var villainsHealth = [
    (50000 * 10**0)*1,
    (50000 * 10**2)*2,
    (50000 * 10**3)*3,
    (50000 * 10**4)*4,
    (50000 * 10**5)*5,
    (50000 * 10**6)*6,
    (50000 * 10**7)*7,
    (50000 * 10**8)*8,
    (50000 * 10**9)*9,
    (50000 * 10**10)*10,
    (50000 * 10**11)*11,
    (50000 * 10**12)*12,
    (50000 * 10**13)*13,
    (50000 * 10**14)*14,
    (50000 * 10**15)*15,
    (50000 * 10**16)*16,
    (50000 * 10**17)*17,
    (50000 * 10**25)*25,
]
villainHTML.style.backgroundImage = `url('images/villains/${villains[villainNum]}.png')`
villainName.textContent = villains[villainNum]
console.log(villainsHealth)

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
    points += (pointNum * vampireBoost)
    villainAttack((pointNum * vampireBoost))
    pointCounter.textContent = "ゴ " + points

    localStorage.setItem("menacing", parseInt(points))
    localStorage.setItem("villainAttackPoint", parseInt(villainAttackPoint))
}

window.onload = function() {
    pointCounter.textContent = "ゴ " + points
    pointsPerClickCounter.textContent = "ゴ " + pointsPerClick + " / click"

    villainHealthDown()
    isSunOut()
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
        addPoints(pointsPerClick)
    
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
        addPoints(pointsPerClick)

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