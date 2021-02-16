var homei = true;
var abouti = false;
var kuli = new Array(14);
var begin = false;
var p1Amount = 0;
var p2Amount = 0;
var p1turn;
var isOpen = false;
var interval;
interval = setInterval(update);
setAll(0);

function update() {
    document.querySelector( '.kuli1' ).innerHTML = kuli[0];
    document.querySelector( '.kuli2' ).innerHTML = kuli[1];
    document.querySelector( '.kuli3' ).innerHTML = kuli[2];
    document.querySelector( '.kuli4' ).innerHTML = kuli[3];
    document.querySelector( '.kuli5' ).innerHTML = kuli[4];
    document.querySelector( '.kuli6' ).innerHTML = kuli[5];
    document.querySelector( '.kuli7' ).innerHTML = kuli[6];
    document.querySelector( '.kuli8' ).innerHTML = kuli[7];
    document.querySelector( '.kuli9' ).innerHTML = kuli[8];
    document.querySelector( '.kuli10' ).innerHTML = kuli[9];
    document.querySelector( '.kuli11' ).innerHTML = kuli[10];
    document.querySelector( '.kuli12' ).innerHTML = kuli[11];
    document.querySelector( '.kuli13' ).innerHTML = kuli[12];
    document.querySelector( '.kuli14' ).innerHTML = kuli[13];
    document.querySelector( '.kuli15' ).innerHTML = p1Amount;
    document.querySelector( '.kuli16' ).innerHTML = p2Amount;
}

function setAll(v) {
    for (i = 0; i < 14; i++) {
        kuli[i] = v;
    }
}

function start() {
    if(!begin) {
        setAll(5);
        p1Amount = 0;
        p2Amount = 0;
        begin = true;
        p1turn = true;
        isOpen = true;
    }
}

function excecute(v,amount){
    var v1;
    kuli[v]=0;
    for( var i=0; i<amount ; i++) { //Continuing excecution
        v1 = v+i+1;
        v1%=14;
        kuli[v1]+=1;
    }
}

function empty(v){
    var v1= v+1;
    v1%=14;
    if(p1turn) p1Amount += kuli[v1];
    else p2Amount += kuli[v1];
    kuli[v1] = 0;
    p1turn = !p1turn;
    isOpen = true;
}

function takethis(v) {
    if((p1turn && v<7) || (!p1turn && v>=7 && v<14)){
        if(isOpen && kuli[v] != 0){
            isOpen = false;
            var amount;

            do{ amount = kuli[v];
                excecute(v,amount);
                v = v + amount +1;
                v %= 14;
            }while (kuli[v] != 0); //Checking whether Empty
            empty(v);

            var i = 0;
            for(i=0 ; i<14 ; i++) { //Checking for Pasu
                if(kuli[i]==4){
                    if(i<7) p1Amount += 4;
                    else p2Amount += 4;
                    kuli[i]=0;
                }
            }

            for(i=0 ; kuli[i] == 0 && i<7 ; i++){ // checking allEmpty in first row
                if(i==6) gameOver();
            }

            for(i=7 ; kuli[i] == 0 && i<14 ; i++){ // checking allEmpty in second row
                if(i==13) gameOver();
            }
        }
        else alert("Can't select zero. Select any other holes.")
    }
    else alert("Do a valid move.");
}

function gameOver(){
    if(p1Amount>p2Amount) alert("Player 1 wins. Press OK to play again.");
    else if(p2Amount>p1Amount) alert("Player 2 wins. Press OK to play again.");
    else alert("It's a Tie. Press OK to play again.");
    setAll(0);
    begin = false;
}

function game(){
    document.getElementById("board").style.display = "inline-block";
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
    document.getElementById("board").style.display = "none";
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