function styleBackground() {
    document.body.style.background = "rgba(245, 227, 227, 0.903)"; // light-pink
    document.body.style.fontFamily = "Montserrat, sans-serif";
}
styleBackground();


function heaDer() {
    var heaDer = document.getElementById("heaDer");
    heaDer.style.background = "rgba(245, 227, 227, 0.903)";  // light-pink
    heaDer.style.border = "1px none";
    heaDer.style.borderWidth = "thin";
    heaDer.style.marginLeft = "0";
    heaDer.style.marginRight = "0";
    heaDer.style.position = "fixed";
    heaDer.style.top = "0";
    heaDer.style.left = "0";
    heaDer.style.right = "0";
    heaDer.style.maxWidth = "100%";
    heaDer.style.width = "150%";
}
heaDer();


function headerImage() {
    var headerImage = document.getElementById("headerImage");
    headerImage.style.marginTop = "10px";
    headerImage.style.marginLeft = "20px";
    headerImage.style.width = "40px";
    headerImage.style.top = "0";
    headerImage.style.left = "0";
    headerImage.style.right = "0";
    headerImage.style.maxWidth = "100%";
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
    navTxt.style.color = "rgb(6, 158, 6)"; // green
    navTxt.style.textDecoration = "none";
    navTxt.style.fontSize = "xx-large";
    navTxt.style.fontWeight = "700";
}
navTxt();


function navLink() {
    var navLink = document.querySelectorAll(".navLink");
    navLink.forEach(function(navLink) {
    navLink.style.color = "rgb(6, 158, 6)"; // green
    navLink.style.fontSize = "x-large";
    navLink.style.marginRight = "40px";
    navLink.style.paddingLeft = "160px";
    navLink.style.textDecoration = "none";
    navLink.style.top = "0";
    navLink.style.left = "0";
    navLink.style.right = "0";
    navLink.style.maxWidth = "100%";
    });
}
navLink();

 
/* */
function menuBtn() {
    var menuBtn = document.getElementById("menuBtn");
    menuBtn.style.display = "none";
}
menuBtn();
/* */


function styleInput() {
    var input = document.querySelectorAll("input");
    input.forEach(function(input) {
    input.style.marginTop = "20px";
    });
}
styleInput();


function eMail() {
    var eMail = document.getElementById("eMail");
    eMail.style.border = "1px solid rgba(255, 255, 255, 0.965)"; // white
    eMail.style.borderRadius = "40px";
    eMail.style.height = "30px";
    eMail.style.width = "400px";
}
eMail();


function suBs() {
    var suBs = document.querySelectorAll(".suBs");
    suBs.forEach(function(suBs) {
    suBs.style.color = "rgba(23, 19, 19, 0.627)"; // black
    suBs.style.fontSize = "large";
    suBs.style.paddingTop = "150px";
    suBs.style.textAlign = "center";
    });
}
suBs();


function subMit() {
    var subMit = document.getElementById("subMit");
    subMit.style.backgroundColor = "rgb(6, 158, 6)"; // green 
    subMit.style.border = "1px solid rgb(6, 158, 6)"; // green
    subMit.style.borderRadius = "5px";
    subMit.style.color = "rgba(245, 227, 227, 0.903)"; // light-pink
    subMit.style.cursor = "pointer";
}
subMit();


function gridContainer() {
    var gridContainer = document.querySelectorAll(".gridContainer");
    gridContainer.forEach(function(gridContainer) {
    gridContainer.style.display = "grid";
    gridContainer.style.gridTemplateColumns = "350px auto";
    gridContainer.style.top = "0";
    gridContainer.style.left = "0";
    gridContainer.style.right = "0";
    gridContainer.style.maxWidth = "100%";
    });
}
gridContainer();


function picTure() {
    var picTure = document.querySelectorAll(".picTure");
    picTure.forEach(function(picTure) {
    picTure.style.paddingLeft = "200px";
    picTure.style.paddingRight = "10px";
    picTure.style.paddingTop = "80px";
    picTure.style.width = "40px";
    picTure.style.top = "0";
    picTure.style.left = "0";
    picTure.style.right = "0";
    picTure.style.maxWidth = "100%";
    });
}
picTure();


var styleText = document.querySelectorAll("#text h2");
styleText.forEach(function(styleText) {
    styleText.style.color = "rgba(23, 19, 19, 0.627)"; // black
    styleText.style.fontSize = "20px";
    styleText.style.marginTop = "80px";
    styleText.style.marginBottom = "0px";
    styleText.style.top = "0";
    styleText.style.left = "0";
    styleText.style.right = "0";
    styleText.style.maxWidth = "100%"; 
});


var restyleText = document.querySelectorAll("#text p");
restyleText.forEach(function(restyleText) {
    restyleText.style.fontSize = "18px";
    restyleText.style.marginTop = "1px";
    restyleText.style.paddingTop = "0px";
    restyleText.style.top = "0";
    restyleText.style.left = "0";
    restyleText.style.right = "0";
    restyleText.style.maxWidth = "100%"; 
});


function viDeo() {
    var viDeo = document.getElementById("viDeo");
    viDeo.style.border = "none";
    viDeo.style.height = "auto";
    viDeo.style.marginTop = "150px";
    viDeo.style.marginLeft = "180px";
    viDeo.style.width = "70%";
    viDeo.style.top = "0";
    viDeo.style.left = "0";
    viDeo.style.right = "0";
    viDeo.style.maxWidth = "100%";
}
viDeo();


function applyFlexContainer() {
    var flexContainers = document.querySelectorAll(".flexContainer");
    flexContainers.forEach(function(container) {
    container.style.color = "rgba(23, 19, 19, 0.627)"; // black
    container.style.backgroundColor = "rgba(245, 227, 227, 0.903)"; // light-pink
    container.style.display = "flex";
    container.style.flexWrap = "nowrap";
    container.style.paddingTop = "150px";
    container.style.paddingBottom = "150px";
    container.style.paddingLeft = "60px";
    container.style.top = "0";
    container.style.left = "0";
    container.style.right = "0";
    container.style.maxWidth = "100%"; 
    });
}
applyFlexContainer();

var styleFlexH2 = document.querySelectorAll(".flexContainer h2");
styleFlexH2.forEach(function(styleFlexH2) {
    styleFlexH2.style.paddingLeft = "10px";
    styleFlexH2.style.top = "0";
    styleFlexH2.style.left = "0";
    styleFlexH2.style.right = "0";
    styleFlexH2.style.maxWidth = "100%";  
});

var restyleFlexP = document.querySelectorAll(".flexContainer p");
restyleFlexP.forEach(function(restyleFlexP) {
    restyleFlexP.style.fontSize = "15px";
    restyleFlexP.style.paddingLeft = "10px";
    restyleFlexP.style.top = "0";
    restyleFlexP.style.left = "0";
    restyleFlexP.style.right = "0";
    restyleFlexP.style.maxWidth = "100%";  
});


function priCing() {
    var priCings = document.querySelectorAll("#priCing");
    priCings.forEach(function(priCing) {
    priCing.style.backgroundColor = "rgba(255, 255, 255, 0.965)";  // white
    priCing.style.border = "3px solid rgba(255, 255, 255, 0.965)";  // white
    priCing.style.borderRadius = "7px";
    priCing.style.height = "90%";
    priCing.style.marginLeft = "60px";
    priCing.style.marginRight = "15px";
    priCing.style.paddingTop = "10px";
    priCing.style.paddingBottom = "20px";
    priCing.style.paddingLeft = "25px";
    priCing.style.paddingRight = "10px";
    priCing.style.width = "20%";
    priCing.style.top = "0";
    priCing.style.left = "0";
    priCing.style.right = "0";
    priCing.style.maxWidth = "100%"; 
    });
}
priCing();


function styleButton() {
var button = document.querySelectorAll("button");
button.forEach(function(button) {
    button.style.backgroundColor = "rgb(6, 158, 6)"; // green
    button.style.border = "1px solid rgb(6, 158, 6)"; // green
    button.style.borderRadius = "5px";
    button.style.color = "rgba(245, 227, 227, 0.903)"; // light-pink
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
    footer.style.top = "0";
    footer.style.left = "0";
    footer.style.right = "0";
    footer.style.maxWidth = "100%"; 
});

var restyleFooterP = document.querySelectorAll(".fooTer p");
restyleFooterP.forEach(function(footerp) {
    footerp.style.color = "rgba(23, 19, 19, 0.627)";  // black
}); 

var reStyleFooterA = document.querySelectorAll(".fooTer a");
reStyleFooterA.forEach(function(footera) {
    footera.style.color = "gray";
}); 




/*           fix header's background because it is doubled colors. 
        
             reduce space between menu icon and menu list                */
             
function checkMediaQuery() {
    var mediaQuery = window.innerWidth;
    if (mediaQuery <= 460) { 
        var heaDer = document.getElementById("heaDer");
        heaDer.style.top = "0";
        heaDer.style.left = "0";
        heaDer.style.right = "0";
        heaDer.style.width = "100%";
        heaDer.style.maxWidth = "100%";
        heaDer.style.height = "auto";

        var fontSize = document.querySelectorAll(".navLink, .suBs, input, #text h2, #text p, button");
        fontSize.forEach(function(fontSize){
            fontSize.style.fontSize = "5.5vw";
        });

        var headerImage = document.getElementById("headerImage");
        headerImage.style.width = "7vw";
        headerImage.style.height = "7vw";
        headerImage.style.padding = "15px 5px 0 0";
        headerImage.style.border = "1px solid rgba(245, 227, 227, 0.903)"; 

        var navTitle = document.getElementById("navTitle");
        navTitle.style.flexGrow = "1";
        navTitle.style.padding = "30px 0";


        document.getElementById("menuBtn").addEventListener("click", function() {
            const content = document.getElementById("myContent");
            content.style.display = (content.style.display === "block" || content.style.display === "") ? "none" : "block";
        });
    /* */
        var myList = document.getElementById("myList"); 
        myList.style.position = "relative";
    /* */
        var menuBtn = document.getElementById("menuBtn");
        menuBtn.style.border = "1px solid rgba(245, 227, 227, 0.903)"; // light-pink
        menuBtn.style.backgroundColor = "rgba(245, 227, 227, 0.903)"; // light-pink
        menuBtn.style.color = "rgb(6, 158, 6)"; // green
        menuBtn.style.display = "block";   
        menuBtn.style.fontSize = "50px";
        menuBtn.style.position = "absolute";
        menuBtn.style.left = "10px";
        menuBtn.style.marginTop = "-65px";
    /* */    
        var myContent = document.getElementById("myContent");
        myContent.style.display = "none";
        myContent.style.top = "25%";
        myContent.style.width = "100%";
        myContent.style.textAlign = "center";
        myContent.style.marginTop = "120px";  /* find out what this part means */
    /* */
        var navLink = document.querySelectorAll(".navLink");
        navLink.forEach(function(navLink) {
            navLink.style.padding = "8px";
            navLink.style.fontSize = "7vw";
            navLink.style.color = "rgba(23, 19, 19, 0.627)";  
            navLink.style.display = "block";
            navLink.style.paddingTop = "40px";
            navLink.style.transition = "0.3s";
            navLink.style.textAlign = "right";
        });
    

        var navTxt = document.getElementById("navTxt");
        navTxt.style.textDecoration = "none";
        navTxt.style.color = "rgba(23, 19, 19, 0.627)"; 
        navTxt.style.border = "1px solid rgba(245, 227, 227, 0.903)"; 
        navTxt.style.fontSize = "7vw";

        var eMail = document.getElementById("eMail");
        eMail.style.width = "240px";
        eMail.style.top = "0";
        eMail.style.left = "0";
        eMail.style.right = "0";
        eMail.style.maxWidth = "100%";

        var suBs = document.querySelectorAll(".suBs");
        suBs.forEach(function(suBs) {
            suBs.style.marginTop = "150px";
            suBs.style.marginLeft = "0";
            suBs.style.marginBottom = "350px";
            suBs.style.top = "0";
            suBs.style.left = "0";
            suBs.style.right = "0";
            suBs.style.maxWidth = "100%";
        });
       
        var gridContainer = document.querySelectorAll(".gridContainer");
        gridContainer.forEach(function(gridContainer) {
            gridContainer.style.display = "grid";
            gridContainer.style.gridTemplateColumns = "90px auto";
            gridContainer.style.marginTop = "-230px";
            gridContainer.style.top = "0";
            gridContainer.style.left = "0";
            gridContainer.style.right = "0";
            gridContainer.style.width = "100%";
            gridContainer.style.maxWidth = "100%";
        });

        var picTure = document.querySelectorAll(".picTure");
        picTure.forEach(function(picTure) {
            picTure.style.paddingLeft = "20px";
            picTure.style.paddingRight = "25px";
            picTure.style.paddingTop = "80px";
            picTure.style.width = "40px"; 
            picTure.style.top = "0";
            picTure.style.left = "0";
            picTure.style.right = "0";
            picTure.style.maxWidth = "100%";  
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
            priCing.style.height = "auto"; 
            priCing.style.marginLeft = "-1px";
            priCing.style.paddingTop = "10px";
            priCing.style.paddingRight = "120px";
        });

        var styleFlexs = document.querySelectorAll(".flexContainer h2, .flexContainer p");
        styleFlexs.forEach(function(styleFlex) {
            styleFlex.style.fontSize = "5.2vw";
            styleFlex.style.top = "0px";
            styleFlex.style.left = "0px";
            styleFlex.style.right = "0px";
            styleFlex.style.maxWidth = "100%"; 
        });  
        
        var styleFooters = document.querySelectorAll(".fooTer p, .fooTer a");
        styleFooters.forEach(function(footer) {
            footer.style.fontSize = "4.8vw";
            footer.style.top = "0px";
            footer.style.left = "0px";
            footer.style.right = "0px";
            footer.style.maxWidth = "100%";
        });
    }
}

window.onload = checkMediaQuery;
window.onresize = checkMediaQuery;