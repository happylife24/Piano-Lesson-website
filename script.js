

function styleBackground() {
    document.body.style.background = "rgba(245, 227, 227, 0.903)";
    document.body.style.fontFamily = "Montserrat, sans-serif";
}
styleBackground();


function heaDer() {
    var heaDer = document.getElementById("heaDer");
    heaDer.style.background = "rgba(245, 227, 227, 0.903)";
    heaDer.style.border = "1px none";
    heaDer.style.borderWidth = "thin";
    heaDer.style.marginLeft = "0";
    heaDer.style.marginRight = "0";
    heaDer.style.position = "fixed";
    heaDer.style.top = "0";
    heaDer.style.width = "150%";
}
heaDer();


function headerImage() {
    var headerImage = document.getElementById("headerImage");
    headerImage.style.width = "50px";
}
headerImage();


function navTitle() {
    var navTitle = document.getElementById("navTitle");
    navTitle.style.fontSize = "xx-large";
    navTitle.style.fontWeight = "700";
}
navTitle();


function navTxt() {
    var navTxt = document.getElementById("navTxt");
    navTxt.style.color = "green";
    navTxt.style.textDecoration = "none";
}
navTxt();


function navLink() {
    var navLink = document.querySelectorAll(".navLink");
    navLink.forEach(function(navLink) {
    navLink.style.color = "green";
    navLink.style.fontSize = "x-large";
    navLink.style.marginRight = "40px";
    navLink.style.paddingLeft = "160px";
    navLink.style.textDecoration = "none";
    });
}
navLink();


function styleInput() {
    var input = document.querySelectorAll("input");
    input.forEach(function(input) {
        input.style.marginTop = "20px";
    });
}
styleInput();


function eMail() {
    var eMail = document.getElementById("eMail");
    eMail.style.border = "1px solid white";
    eMail.style.borderRadius = "40px";
    eMail.style.height = "30px";
    eMail.style.width = "400px";
}
eMail();


function suBs() {
    var suBs = document.querySelectorAll(".suBs");
    suBs.forEach(function(suBs) {
    suBs.style.color = "black";
    suBs.style.fontSize = "large";
    suBs.style.paddingTop = "150px";
    suBs.style.textAlign = "center";
    });
}
suBs();


function subMit() {
    var subMit = document.getElementById("subMit");
    subMit.style.backgroundColor = "green";
    subMit.style.border = "1px solid green";
    subMit.style.borderRadius = "5px";
    subMit.style.color = "gray";
    subMit.style.cursor = "pointer";
}
subMit();


function clickBtn() {
    var clickBtn = document.getElementById("clickBtn");
    clickBtn.style.display = "none";
}
clickBtn();


function gridContainer() {
    var gridContainer = document.querySelectorAll(".gridContainer");
    gridContainer.forEach(function(gridContainer) {
    gridContainer.style.display = "grid";
    gridContainer.style.gridTemplateColumns = "350px auto";
    });
}
gridContainer();


function picTure() {
    var picTure = document.querySelectorAll(".picTure");
    picTure.forEach(function(picTure) {
        picTure.style.paddingLeft = "260px";
        picTure.style.paddingRight = "25px";
        picTure.style.paddingTop = "80px";
        picTure.style.width = "40px";
    });
}
picTure();


var styleText = document.querySelectorAll("#text h2");
styleText.forEach(function(styleText) {
    styleText.style.color = "black";
    styleText.style.fontSize = "20px";
    styleText.style.marginTop = "80px";
    styleText.style.marginBottom = "0px";
});

var restyleText = document.querySelectorAll("#text p");
restyleText.forEach(function(restyleText) {
    restyleText.style.fontSize = "18px";
    restyleText.style.marginTop = "1px";
    restyleText.style.paddingTop = "0px";
});


function viDeo() {
    var viDeo = document.getElementById("viDeo");
    viDeo.style.border = "none";
    viDeo.style.height = "auto";
    viDeo.style.marginTop = "150px";
    viDeo.style.marginLeft = "180px";
    viDeo.style.width = "70%";
}
viDeo();


function applyFlexContainer() {
    var flexContainers = document.querySelectorAll(".flexContainer");
    flexContainers.forEach(function(container) {
        container.style.color = "var(--color-black)";
        container.style.backgroundColor = "var(--color-lightgray)";
        container.style.display = "flex";
        container.style.flexWrap = "nowrap";
        container.style.paddingTop = "150px";
        container.style.paddingBottom = "150px";
        container.style.paddingLeft = "60px";
    });
}
applyFlexContainer();



var styleFlexH2 = document.querySelectorAll(".flexContainer h2");
styleFlexH2.forEach(function(styleFlexH2) {
    styleFlexH2.style.paddingLeft = "10px";
});

var restyleFlexP = document.querySelectorAll(".flexContainer p");
restyleFlexP.forEach(function(restyleFlexP) {
    restyleFlexP.style.fontSize = "15px";
    restyleFlexP.style.paddingLeft = "10px";
});


function priCing() {
    var priCings = document.querySelectorAll("#priCing");
    priCings.forEach(function(priCing) {
        priCing.style.backgroundColor = "white";
        priCing.style.border = "3px solid white";
        priCing.style.borderRadius = "7px";
        priCing.style.height = "90%";
        priCing.style.marginLeft = "60px";
        priCing.style.marginRight = "15px";
        priCing.style.paddingTop = "10px";
        priCing.style.paddingBottom = "20px";
        priCing.style.paddingLeft = "25px";
        priCing.style.paddingRight = "10px";
        priCing.style.width = "20%";
    });
}
priCing();


function styleButton() {
var button = document.querySelectorAll("button");
button.forEach(function(button) {
    button.style.backgroundColor = "green";
    button.style.border = "1px solid green";
    button.style.borderRadius = "5px";
    button.style.color = "gray";
    button.style.cursor = "pointer";
    button.style.fontSize = "20px";
    button.style.height = "35px";
    button.style.width = "140px";
    button.style.paddingTop = "5px";
    button.style.paddingBottom = "10px";
});
}
styleButton();


var styleFooterP = document.querySelectorAll(".footer p");
styleFooterP.forEach(function(styleFooterP) {
    styleFooterP.style.color = "black";
    styleFooterP.style.fontSize = "18px";
    styleFooterP.style.marginBottom = "40px";
    styleFooterP.style.textAlign = "center";
    styleFooterP.style.textDecoration = "none";
});

var restyleFooterA = document.querySelectorAll(".footer a");
restyleFooterA.forEach(function(restyleFooterA) {
    restyleFooterA.style.color = "gray";
    restyleFooterA.style.fontSize = "18px";
    restyleFooterA.style.marginBottom = "40px";
    restyleFooterA.style.textAlign = "center";
    restyleFooterA.style.textDecoration = "none";
});






/*
function toggleList() {
    var x = document.getElementById("myList");
    if (x.style.display === "block" || x.style.display === "") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
*/