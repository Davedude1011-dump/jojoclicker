// bruh why did i over complicate this so much LOL

var points = parseInt(localStorage.getItem("menacing")) || 0
var pointsPerClick = parseInt(localStorage.getItem("pointsPerClick")) || 1

const leftUpgradeOne = document.getElementById("upgOneOne")
const leftUpgradeTwo = document.getElementById("upgOneTwo")
const leftUpgradeThree = document.getElementById("upgOneThree")
const leftUpgradeFour = document.getElementById("upgOneFour")

var upgOnePrice = parseInt(localStorage.getItem("upgOnePrice")) || 200
var upgTwoPrice = parseInt(localStorage.getItem("upgTwoPrice")) || 8000
var upgThreePrice = parseInt(localStorage.getItem("upgThreePrice")) || 100000
var upgFourPrice = parseInt(localStorage.getItem("upgFourPrice")) || 5000000

var upgOneOneHover = false
var upgOneTwoHover = false
var upgOneThreeHover = false
var upgOneFourHover = false

function clickBuyUpgrade(upgradeNum, upgradeAmount) {
    const pointCounter = document.querySelector(".menacing-score")
    const pointsPerClickCounter = document.querySelector(".menacing-per-click")
    
    if (upgradeNum == 1) { var upgradeNumTwo = upgOnePrice }
    else if (upgradeNum == 2) { var upgradeNumTwo = upgTwoPrice }
    else if (upgradeNum == 3) { var upgradeNumTwo = upgThreePrice }
    else if (upgradeNum == 4) { var upgradeNumTwo = upgFourPrice }

    console.log(upgradeNum)
    if (points >= upgradeNumTwo) {
        if (upgradeNum == 1) { upgOnePrice = Math.floor(upgOnePrice + (0.5 * (upgradeNumTwo))) }
        else if (upgradeNum == 2) { upgTwoPrice = Math.floor(upgTwoPrice + (0.5 * (upgradeNumTwo))) }
        else if (upgradeNum == 3) { upgThreePrice = Math.floor(upgThreePrice + (0.5 * (upgradeNumTwo))) }
        else if (upgradeNum == 4) { upgFourPrice = Math.floor(upgFourPrice + (0.5 * (upgradeNumTwo))) }
        pointsPerClick += upgradeAmount
        points -= upgradeNumTwo
        pointsPerClickCounter.textContent = "ゴ " + pointsPerClick + " / click"
        pointCounter.textContent = "ゴ " + points
        localStorage.setItem("menacing", points)
        localStorage.setItem("pointsPerClick", pointsPerClick)
        localStorage.setItem("upgOnePrice", upgOnePrice)
        localStorage.setItem("upgTwoPrice", upgTwoPrice)
        localStorage.setItem("upgThreePrice", upgThreePrice)
        localStorage.setItem("upgFourPrice", upgFourPrice)

        if (upgOneOneHover == true) {
            document.getElementById("upgOneOneInner").textContent = "Cost: " + upgOnePrice
        }
        else if (upgOneTwoHover == true) {
            document.getElementById("upgOneTwoInner").textContent = "Cost: " + upgTwoPrice
        }
        else if (upgOneThreeHover == true) {
            document.getElementById("upgOneThreeInner").textContent = "Cost: " + upgThreePrice
        }
        else if (upgOneFourHover == true) {
            document.getElementById("upgOneFourInner").textContent = "Cost: " + upgFourPrice
        }
    }
    console.log(upgradeNumTwo)
}

leftUpgradeOne.addEventListener("mouseenter", function() {
    document.getElementById("upgOneOneInner").textContent = "Cost: " + upgOnePrice
    upgOneOneHover = true
})
leftUpgradeOne.addEventListener("mouseleave", function() {
    document.getElementById("upgOneOneInner").textContent = "Muscle Training [ +1 ]"
    upgOneOneHover = false
})

leftUpgradeTwo.addEventListener("mouseenter", function() {
    document.getElementById("upgOneTwoInner").textContent = "Cost: " + upgTwoPrice
    upgOneTwoHover = true
})
leftUpgradeTwo.addEventListener("mouseleave", function() {
    document.getElementById("upgOneTwoInner").textContent = "Mind Training [ +10 ]"
    upgOneTwoHover = false
})

leftUpgradeThree.addEventListener("mouseenter", function() {
    document.getElementById("upgOneThreeInner").textContent = "Cost: " + upgThreePrice
    upgOneThreeHover = true
})
leftUpgradeThree.addEventListener("mouseleave", function() {
    document.getElementById("upgOneThreeInner").textContent = "Stand Training [ +40 ]"
    upgOneThreeHover = false
})

leftUpgradeFour.addEventListener("mouseenter", function() {
    document.getElementById("upgOneFourInner").textContent = "Cost: " + upgFourPrice
    upgOneFourHover = true
})
leftUpgradeFour.addEventListener("mouseleave", function() {
    document.getElementById("upgOneFourInner").textContent = "Hamon Training [ +100 ]"
    upgOneFourHover = false
})