var count = 0;
var element = document.body;
var homei = true;
var abouti = false;
var aboutmei = false;
var contacti = false;

function swapmode() {
    count++;
    if(count%5==1)
        element.classList.toggle("black");
    else if(count%5==2) {
        element.classList.toggle("orange");
        element.classList.toggle("black");
    }
    else if(count%5==3) {
        element.classList.toggle("orange");
        element.classList.toggle("green");
    }
    else if(count%5==4) {
        element.classList.toggle("purple");
        element.classList.toggle("green");
    }
    else
        element.classList.toggle("purple");
    }

function home(){
    document.getElementById("home").style.display = "contents";
    document.getElementById("about").style.display = "none";
    document.getElementById("aboutme").style.display = "none";
    document.getElementById("contact").style.display = "none";
    if(!homei){
    document.getElementById("homei").classList.toggle("active");
    homei = !homei;
    }
    if(abouti){
    document.getElementById("abouti").classList.toggle("active");
    abouti = !abouti;
    }
    if(aboutmei){
    document.getElementById("aboutmei").classList.toggle("active");
    aboutmei = !aboutmei;
    }
    if(contacti){
    document.getElementById("contacti").classList.toggle("active");
    contacti = !contacti;
    }
}
function about(){
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "contents";
    document.getElementById("aboutme").style.display = "none";
    document.getElementById("contact").style.display = "none";
    if(homei){
    document.getElementById("homei").classList.toggle("active");
    homei = !homei;
    }
    if(!abouti){
    document.getElementById("abouti").classList.toggle("active");
    abouti = !abouti;
    }
    if(aboutmei){
    document.getElementById("aboutmei").classList.toggle("active");
    aboutmei = !aboutmei;
    }
    if(contacti){
    document.getElementById("contacti").classList.toggle("active");
    contacti = !contacti;
    }
}
function aboutme(){
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("aboutme").style.display = "contents";
    document.getElementById("contact").style.display = "none";
    if(homei){
    document.getElementById("homei").classList.toggle("active");
    homei = !homei;
    }
    if(abouti){
    document.getElementById("abouti").classList.toggle("active");
    abouti = !abouti;
    }
    if(!aboutmei){
    document.getElementById("aboutmei").classList.toggle("active");
    aboutmei = !aboutmei;
    }
    if(contacti){
    document.getElementById("contacti").classList.toggle("active");
    contacti = !contacti;
    }
}
function contact(){
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("aboutme").style.display = "none";
    document.getElementById("contact").style.display = "contents";
    if(homei){
    document.getElementById("homei").classList.toggle("active");
    homei = !homei;
    }
    if(abouti){
    document.getElementById("abouti").classList.toggle("active");
    abouti = !abouti;
    }
    if(aboutmei){
    document.getElementById("aboutmei").classList.toggle("active");
    aboutmei = !aboutmei;
    }
    if(!contacti){
    document.getElementById("contacti").classList.toggle("active");
    contacti = !contacti;
    }
}
function game(){
    document.getElementById("home").style.display = "contents";
    document.getElementById("about").style.display = "none";
    if(!homei){
    document.getElementById("homei").classList.toggle("active");
    homei = !homei;
    }
    if(abouti){
    document.getElementById("abouti").classList.toggle("active");
    abouti = !abouti;
    }
}
function info(){
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "contents";
    if(homei){
    document.getElementById("homei").classList.toggle("active");
    homei = !homei;
    }
    if(!abouti){
    document.getElementById("abouti").classList.toggle("active");
    abouti = !abouti;
    }
}