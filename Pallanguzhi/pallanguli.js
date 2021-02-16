var homei = true;
var abouti = false;
var kuli = new Array(14);
var begin = false;
var canPress = false;
var p1Amount = 0;
var p2Amount = 0;
var p1turn;
var currentv;
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
        canPress = true;
        alert("It's player 1's turn. Select any one valid hole.");
    }
    else if(!canPress) nextTurn();
    else playerturn();
}

function playerturn(){
    if(p1turn) alert("It's player 1's turn. Select any one valid hole.");
    else alert("It's player 2's turn. Select any one valid hole.");
}

function excecute(v){
    var amount = kuli[v];
    var v1;
    kuli[v]=0;
    for( var i=0; i<amount ; i++) { //Continuing excecution
        v1 = v+i+1;
        v1%=14;
        kuli[v1]+=1;
    }
    v = v + amount +1;
    v %= 14;
    currentv = v;
}

function empty(v){
    var v1= v+1;
    v1%=14;
    if(p1turn) {p1Amount += kuli[v1]; if(kuli[v1]!=0) alert("Player 1 earns "+ kuli[v1] +" points.");
    else alert("Player 1 earns no points in this turn.");
    pasu();
    alert("It's player 2's turn. Select any one valid hole.");}
    else {p2Amount += kuli[v1]; if(kuli[v1]!=0) alert("Player 2 earns "+ kuli[v1] +" points.");
    else alert("Player 2 earns no points in this turn.");
    pasu();
    alert("It's player 1's turn. Select any one valid hole.");}
    kuli[v1] = 0;
    p1turn = !p1turn;
    isGameOver();
    canPress = true;
}

function nextTurn(){
    if (kuli[currentv] != 0) excecute(currentv);
    else empty(currentv);
}

function pasu(){
    var i = 0;
    for(i=0 ; i<14 ; i++) { //Checking for Pasu
        if(kuli[i]==4){
            if(i<7) {p1Amount += 4; alert("Player 1 earns a Pasu.");}
            else {p2Amount += 4; alert("Player 2 earns a Pasu.");}
            kuli[i]=0;
        }
    }
}

function takethis(v) {
    if(canPress){
        if((p1turn && v<7) || (!p1turn && v>=7 && v<14)){
            if(kuli[v] != 0){
                canPress = false;
                excecute(v);
                isGameOver();
            }
            else alert("Can't select zero. Select any other holes.")
        }
        else alert("Do a valid move.");
    }
}

function isGameOver(){
    for(i=0 ; kuli[i] == 0 && i<7 ; i++){ // checking allEmpty in first row
        if(i==6) gameOver();
    }

    for(i=7 ; kuli[i] == 0 && i<14 ; i++){ // checking allEmpty in second row
        if(i==13) gameOver();
    }
}

function gameOver(){
    if(p1Amount>p2Amount) alert("Player 1 wins. Press OK to play again.");
    else if(p2Amount>p1Amount) alert("Player 2 wins. Press OK to play again.");
    else alert("It's a Tie. Press OK to play again.");
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