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
    navTxt.style.color = "rgb(6, 158, 6)";
    navTxt.style.textDecoration = "none";
}
navTxt();


function navLink() {
    var navLink = document.querySelectorAll(".navLink");
    navLink.forEach(function(navLink) {
    navLink.style.color = "rgb(6, 158, 6)";
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
    eMail.style.border = "1px solid rgba(255, 255, 255, 0.965)";
    eMail.style.borderRadius = "40px";
    eMail.style.height = "30px";
    eMail.style.width = "400px";
}
eMail();


function suBs() {
    var suBs = document.querySelectorAll(".suBs");
    suBs.forEach(function(suBs) {
    suBs.style.color = "rgba(23, 19, 19, 0.627)";
    suBs.style.fontSize = "large";
    suBs.style.paddingTop = "150px";
    suBs.style.textAlign = "center";
    });
}
suBs();


function subMit() {
    var subMit = document.getElementById("subMit");
    subMit.style.backgroundColor = "rgb(6, 158, 6)";
    subMit.style.border = "1px solid rgb(6, 158, 6)";
    subMit.style.borderRadius = "5px";
    subMit.style.color = "rgba(245, 227, 227, 0.903)";
    subMit.style.cursor = "pointer";
}
subMit();


function clickBtn() {
    var clickBtn = document.getElementById("clickBtn");
    clickBtn.style.display = "none";
}
clickBtn();


function toggleList() {
    var myList = document.getElementById("myList");
    if (myList.style.display === "block" || myList.style.display === "") {
        myList.style.display = "none";
    } else {
        myList.style.display = "block";
    } 
}


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
    styleText.style.color = "rgba(23, 19, 19, 0.627)k";
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
    container.style.color = "rgba(23, 19, 19, 0.627)";
    container.style.backgroundColor = "rgba(245, 227, 227, 0.903)";
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
    priCing.style.backgroundColor = "rgba(255, 255, 255, 0.965)";
    priCing.style.border = "3px solid rgba(255, 255, 255, 0.965)";
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
    button.style.backgroundColor = "rgb(6, 158, 6)";
    button.style.border = "1px solid rgb(6, 158, 6)";
    button.style.borderRadius = "5px";
    button.style.color = "rgba(245, 227, 227, 0.903)";
    button.style.cursor = "pointer";
    button.style.fontSize = "20px";
    button.style.height = "35px";
    button.style.width = "140px";
    button.style.paddingTop = "5px";
    button.style.paddingBottom = "10px";
});
}
styleButton();


var styleFooters = document.querySelectorAll(".fooTer p, .fooTer a");
styleFooters.forEach(function(footer) {
    footer.style.fontSize = "18px";
    footer.style.marginBottom = "30px";
    footer.style.textAlign = "center";
    footer.style.textDecoration = "none";
});

var restyleFooterP = document.querySelectorAll(".fooTer p");
restyleFooterP.forEach(function(footerp) {
    footerp.style.color = "rgba(23, 19, 19, 0.627)";
}); 

var reStyleFooterA = document.querySelectorAll(".fooTer a");
reStyleFooterA.forEach(function(footera) {
    footera.style.color = "gray";
}); 



/* media query for mobile*/
function checkMediaQuery() {
    var mediaQuery = window.innerWidth;
    if (mediaQuery <= 400) {
        var heaDer = document.getElementById("heaDer");
        heaDer.style.display = "flex";
        heaDer.style.maxWidth = "100%";
        heaDer.style.height = "auto";

        var headerImage = document.getElementById("headerImage");
        headerImage.style.width = "7vw";
        headerImage.style.height = "7vw";
        headerImage.style.marginTop = "17px";
        headerImage.style.paddingLeft = "8px";
        headerImage.style.marginBottom = "-50px";
        
        /*
        var headerImage = document.getElementById("headerImage");
        headerImage.addEventListener("click", function() {
            var url = "https://happylife24.github.io/Piano-Lesson-website/";
            window.open();
        });
        */

        var fontSize = document.querySelectorAll("#navTitle, .navLink, .suBs, input, #text h2, #text p, button");
        fontSize.forEach(function(fontSize){
            fontSize.style.fontSize = "5.5vw";
        });

        var clickBtn = document.getElementById("clickBtn");
        clickBtn.style.color = "rgba(23, 19, 19, 0.627)";
        clickBtn.style.position = "relative";
        clickBtn.style.display = "block";
        clickBtn.style.fontSize = "20vw";
        clickBtn.style.width = "0px";
        clickBtn.style.height = "0px";
        clickBtn.style.marginTop = "-10px";
        clickBtn.style.marginRight = "63px";
        clickBtn.style.textDecoration = "none";

        
        document.getElementById("myList").addEventListener("click", function() {
            this.style.display = "none";
        });
        
        
        var myList = document.getElementById("myList");
        myList.style.background = "rgba(245, 227, 227, 0.903)";
        myList.style.display = "none";
        myList.style.position = "absolute";
        myList.style.top = "68px";
        myList.style.marginBottom = "200px";

        var navTitle = document.getElementById("navTitle");
        navTitle.style.flexGrow = "1";
        navTitle.style.paddingTop = "40px";
        navTitle.style.paddingBottom = "10px";
        navTitle.style.marginLeft = "-25px";

        var navTxt = document.getElementById("navTxt");
        navTxt.style.visibility = "hidden";

        var navLink = document.querySelectorAll(".navLink");
        navLink.forEach(function(navLink) {
        navLink.style.color = "rgba(23, 19, 19, 0.627)";
        navLink.style.fontSize = "7vw";
        navLink.style.marginLeft = "1px";
        navLink.style.paddingTop = "30px";
        navLink.style.display = "grid";
        });

        var eMail = document.getElementById("eMail");
        eMail.style.width = "240px";

        var suBs = document.querySelectorAll(".suBs");
        suBs.forEach(function(suBs) {
        suBs.style.marginTop = "150px";
        suBs.style.marginLeft = "0px";
        suBs.style.marginBottom = "180px";
        suBs.style.marginBottom = "350px";
        });
       
        var gridContainer = document.querySelectorAll(".gridContainer");
        gridContainer.forEach(function(gridContainer) {
        gridContainer.style.display = "grid";
        gridContainer.style.gridTemplateColumns = "90px auto";
        gridContainer.style.marginTop = "-230px";
        });

        var picTure = document.querySelectorAll(".picTure");
        picTure.forEach(function(picTure) {
        picTure.style.paddingLeft = "20px";
        picTure.style.paddingRight = "25px";
        picTure.style.paddingTop = "80px";
        picTure.style.width = "40px";   
        });

        var viDeo = document.getElementById("viDeo");
        viDeo.style.border = "none";
        viDeo.style.height = "auto";
        viDeo.style.marginTop = "150px";
        viDeo.style.marginBottom = "80px";
        viDeo.style.marginLeft = "50px";
        viDeo.style.width = "70%"; 

        var flexContainers = document.querySelectorAll(".flexContainer");
        flexContainers.forEach(function(container) {
        container.style.display = "grid";
        container.style.gridTemplateRows = "1fr 1fr 1fr";
        container.style.gap = "50px";
        container.style.paddingTop = "170px";
        });

        var priCings = document.querySelectorAll("#priCing");
        priCings.forEach(function(priCing) {
        priCing.style.borderRadius = "7px";
        priCing.style.height = "100px"; 
        priCing.style.marginLeft = "-1px";
        priCing.style.paddingTop = "20px";
        priCing.style.paddingRight = "100px";
        priCing.style.paddingBottom = "120px";
        });

        var styleFlexs = document.querySelectorAll(".flexContainer h2, .flexContainer p");
        styleFlexs.forEach(function(styleFlex) {
        styleFlex.style.fontSize = "5.2vw";
        });  
        
        var styleFooters = document.querySelectorAll(".fooTer p, .fooTer a");
        styleFooters.forEach(function(footer) {
        footer.style.fontSize = "4.8vw";
        });
    }
}
window.onload = checkMediaQuery;
window.onresize = checkMediaQuery;


