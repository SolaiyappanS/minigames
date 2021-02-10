var count = 0;
var element = document.body;

function swapmode() {
    count++;
    if(count%4==1)
        element.classList.toggle("orange");
    else if(count%4==2) {
        element.classList.toggle("black");
        element.classList.toggle("orange");
    }
    else if(count%4==3) {
        element.classList.toggle("purple");
        element.classList.toggle("black");
    }
    else
        element.classList.toggle("purple");
}