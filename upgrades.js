var points = parseInt(localStorage.getItem("menacing")) || 0;
var pointsPerClick = parseInt(localStorage.getItem("pointsPerClick")) || 1;

const leftUpgradeOne = document.getElementById("upgOneOne");
const leftUpgradeTwo = document.getElementById("upgOneTwo");
const leftUpgradeThree = document.getElementById("upgOneThree");
const leftUpgradeFour = document.getElementById("upgOneFour");

const vampireForm = document.getElementById("vampireForm");
const stoneMask = document.getElementById("stoneMask");

var vampireFormPrice = 100000000;
var vampireFormBought = localStorage.getItem("vampireFormBought") || false;
var stoneMaskPrice = 100000000000;
var stoneMaskBought = localStorage.getItem("stoneMaskBought") || false;

var upgOnePrice = parseInt(localStorage.getItem("upgOnePrice")) || 200;
var upgTwoPrice = parseInt(localStorage.getItem("upgTwoPrice")) || 8000;
var upgThreePrice = parseInt(localStorage.getItem("upgThreePrice")) || 100000;
var upgFourPrice = parseInt(localStorage.getItem("upgFourPrice")) || 5000000;

var upgOneOneHover = false;
var upgOneTwoHover = false;
var upgOneThreeHover = false;
var upgOneFourHover = false;

function clickBuyUpgrade(upgradeNum, upgradeAmount) {
    const pointCounter = document.querySelector(".menacing-score");
    const pointsPerClickCounter = document.querySelector(".menacing-per-click");

    var upgradeNumTwo;
    switch (upgradeNum) {
        case 1:
            upgradeNumTwo = upgOnePrice;
            break;
        case 2:
            upgradeNumTwo = upgTwoPrice;
            break;
        case 3:
            upgradeNumTwo = upgThreePrice;
            break;
        case 4:
            upgradeNumTwo = upgFourPrice;
            break;
    }

    if (points >= upgradeNumTwo) {
        switch (upgradeNum) {
        case 1:
        upgOnePrice = Math.floor(upgOnePrice + (0.4 * (upgradeNumTwo)));
        break;
        case 2:
        upgTwoPrice = Math.floor(upgTwoPrice + (0.4 * (upgradeNumTwo)));
        break;
        case 3:
        upgThreePrice = Math.floor(upgThreePrice + (0.4 * (upgradeNumTwo)));
        break;
        case 4:
        upgFourPrice = Math.floor(upgFourPrice + (0.4 * (upgradeNumTwo)));
        break;
        }
    pointsPerClick += upgradeAmount;
    points -= upgradeNumTwo;
    pointsPerClickCounter.textContent = "ゴ " + pointsPerClick + " / click";
    pointCounter.textContent = "ゴ " + points;
    localStorage.setItem("menacing", points);
    localStorage.setItem("pointsPerClick", pointsPerClick);
    localStorage.setItem("upgOnePrice", upgOnePrice);
    localStorage.setItem("upgTwoPrice", upgTwoPrice);
    localStorage.setItem("upgThreePrice", upgThreePrice);
    localStorage.setItem("upgFourPrice", upgFourPrice);

    switch (true) {
        case upgOneOneHover:
            document.getElementById("upgOneOneInner").textContent = "Cost: " + upgOnePrice;
            break;
        case upgOneTwoHover:
            document.getElementById("upgOneTwoInner").textContent = "Cost: " + upgTwoPrice;
            break;
            case upgOneThreeHover:
            document.getElementById("upgOneThreeInner").textContent = "Cost: " + upgThreePrice;
            break;
            case upgOneFourHover:
            document.getElementById("upgOneFourInner").textContent = "Cost: " + upgFourPrice;
            break;
        }
    }
}

leftUpgradeOne.addEventListener("mouseenter", function () {
    upgOneOneHover = true;
    document.getElementById("upgOneOneInner").textContent = "Cost: " + upgOnePrice;
});
    
leftUpgradeOne.addEventListener("mouseleave", function () {
    upgOneOneHover = false;
    document.getElementById("upgOneOneInner").textContent = "Muscle Training [ +1 ]";
});
    
leftUpgradeTwo.addEventListener("mouseenter", function () {
    upgOneTwoHover = true;
    document.getElementById("upgOneTwoInner").textContent = "Cost: " + upgTwoPrice;
});
    
leftUpgradeTwo.addEventListener("mouseleave", function () {
    upgOneTwoHover = false;
    document.getElementById("upgOneTwoInner").textContent = "Mind Training [ +5 ]";
});
    
leftUpgradeThree.addEventListener("mouseenter", function () {
    upgOneThreeHover = true;
    document.getElementById("upgOneThreeInner").textContent = "Cost: " + upgThreePrice;
});
    
leftUpgradeThree.addEventListener("mouseleave", function () {
    upgOneThreeHover = false;
    document.getElementById("upgOneThreeInner").textContent = "Stand Training [ +20 ]";
});
    
leftUpgradeFour.addEventListener("mouseenter", function () {
    upgOneFourHover = true;
    document.getElementById("upgOneFourInner").textContent = "Cost: " + upgFourPrice;
});
leftUpgradeFour.addEventListener("mouseleave", function () {
    upgOneFourHover = false;
    document.getElementById("upgOneFourInner").textContent = "Hamon Training [ +100 ]";
});
    
vampireForm.addEventListener("click", function () {
    if (points >= vampireFormPrice && vampireFormBought == false) {
        points -= vampireFormPrice;
        vampireFormBought = true;
        localStorage.setItem("vampireFormBought", vampireFormBought);
        localStorage.setItem("menacing", points);
        pointCounter.textContent = "ゴ " + points;
    }
});
    
stoneMask.addEventListener("click", function () {
    if (points >= stoneMaskPrice && stoneMaskBought == false) {
        points -= stoneMaskPrice;
        stoneMaskBought = true;
        localStorage.setItem("stoneMaskBought", stoneMaskBought);
        localStorage.setItem("menacing", points);
        pointCounter.textContent = "ゴ " + points;
    }
});

const vampireFormInner = document.getElementById("vampireFormInner");
const stoneMaskInner = document.getElementById("stoneMaskInner");

vampireForm.addEventListener("mouseenter", function () {
    if (vampireFormBought == false) {
        vampireFormInner.textContent = "Cost: " + vampireFormPrice;
    } else {
        vampireFormInner.textContent = "weak during day, STRONG during night (IRL timing)";
    }
});

vampireForm.addEventListener("mouseleave", function () {
    vampireFormInner.textContent = "Vampire Form";
});

stoneMask.addEventListener("mouseenter", function () {
    if (stoneMaskBought == false) {
        stoneMaskInner.textContent = "Cost: " + stoneMaskPrice;
    } else {
        stoneMaskInner.textContent = "makes your vampire form stronger";
    }
});

stoneMask.addEventListener("mouseleave", function () {
    stoneMaskInner.textContent = "Stone Mask";
});