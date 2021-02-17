var homei = true;
var kuli = new Array(14);
var begin = false;
var canPress = false;
var p1Amount = 0;
var p2Amount = 0;
var p1turn;
var previousv = 0;
var currentv = 0;
var interval;
interval = setInterval(update);
setAll(0);

function update() {
    var i = 0;
    for(i=0 ; i<14 ; i++) {
        document.getElementById( "kuli"+(i+1)).innerHTML = kuli[i];
        }
        document.getElementById( "kuli15").innerHTML = p1Amount;
        document.getElementById( "kuli16").innerHTML = p2Amount;
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
    }
    else if(!canPress) nextTurn();
    else playerturn();
}

function playerturn(){
    if(p1turn) alert("இது பிளேயர் 1 இன் முறை. பூஜ்ஜியமற்ற குழியைத் தேர்ந்தெடுக்கவும்.\nIt's player 1's turn. Select any one non zero hole.");
    else alert("இது பிளேயர் 2 இன் முறை. பூஜ்ஜியமற்ற குழியைத் தேர்ந்தெடுக்கவும்.\nIt's player 2's turn. Select any one non zero hole.");
}

function excecute(v){
    previousv = v;
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
    
    var i;
    for(i=0 ; i<14 ; i++){
        if(i==previousv)
            document.getElementById("kuli"+(i+1)).classList = "previousv";
            else if(i>previousv && i<currentv && previousv < currentv)
                document.getElementById("kuli"+(i+1)).classList = "kuli3";
                else if(i>previousv && i != currentv && previousv > currentv)
                    document.getElementById("kuli"+(i+1)).classList = "kuli3";
                    else if(i<currentv && previousv > currentv)
                        document.getElementById("kuli"+(i+1)).classList = "kuli3";
                        else if(i==currentv)
                                document.getElementById("kuli"+(i+1)).classList = "currentv";
                            else if(i<7) 
                                    document.getElementById("kuli"+(i+1)).classList = "kuli1";
                                else document.getElementById("kuli"+(i+1)).classList = "kuli2";
    }
}

function empty(v){
    var v1= v+1;
    v1%=14;
    if(p1turn) {p1Amount += kuli[v1]; if(kuli[v1]!=0) alert("பிளேயர் 1, "+ kuli[v1] +" புள்ளிகளைப் பெறுகிறார்.\nPlayer 1 earns "+ kuli[v1] +" points.");
    else alert("பிளேயர் 1 இம்முறை எந்த புள்ளிகளையும் பெறவில்லை.\nPlayer 1 earns no points in this turn.");
    alert("இது பிளேயர் 2 இன் முறை. பூஜ்ஜியமற்ற குழியைத் தேர்ந்தெடுக்கவும்.\nIt's player 2's turn. Select any one non zero hole.");}
    else {p2Amount += kuli[v1]; if(kuli[v1]!=0) alert("பிளேயர் 2, "+ kuli[v1] +" புள்ளிகளைப் பெறுகிறார்.\nPlayer 2 earns "+ kuli[v1] +" points.");
    else alert("பிளேயர் 2 இம்முறை எந்த புள்ளிகளையும் பெறவில்லை.\nPlayer 2 earns no points in this turn.");
    alert("இது பிளேயர் 1 இன் முறை. பூஜ்ஜியமற்ற குழியைத் தேர்ந்தெடுக்கவும்.\nIt's player 1's turn. Select any one non zero hole.");}
    kuli[v1] = 0;
    p1turn = !p1turn;
    isGameOver();
    canPress = true;
    for(i=0 ; i<14 ; i++){
        if(i<7) 
            document.getElementById("kuli"+(i+1)).classList = "kuli1";
        else document.getElementById("kuli"+(i+1)).classList = "kuli2";
}
}

function nextTurn(){
    pasu();
    if (kuli[currentv] != 0) excecute(currentv);
    else empty(currentv);
}

function pasu(){
    var i = 0;
    for(i=0 ; i<14 ; i++) { //Checking for Pasu
        if(kuli[i]==4){
            if(i<7) {p1Amount += 4; alert("வீரர் 1 ஒரு பசுவைப் பெறுகிறார்.\nPlayer 1 earns a Pasu.");}
            else {p2Amount += 4; alert("வீரர் 2 ஒரு பசுவைப் பெறுகிறார்.\nPlayer 2 earns a Pasu.");}
            kuli[i]=0;
        }
    }
}

function takethis(v) {
    if(canPress){
        if((p1turn && v<7) || (!p1turn && v>=7 && v<14)){
            if(kuli[v] != 0){
                canPress = false;
                previousv = currentv;
                excecute(v);
                isGameOver();
            }
            else alert("பூஜ்ஜியத்தைத் தேர்ந்தெடுக்க முடியாது. வேறு எதாவது குழியைத் தேர்ந்தெடுக்கவும்.\nCan't select zero. Select any other holes.")
        }
        else if(p1turn) alert("இது பிளேயர் 1 இன் முறை.\nIt's Player 1's turn.");
        else alert("இது பிளேயர் 2 இன் முறை.\nIt's Player 2's turn.")
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
    if(p1Amount>p2Amount) alert("பிளேயர் 1 வென்றார். மீண்டும் விளையாட OK வை அழுத்தவும்.\nPlayer 1 wins. Press OK to play again.");
    else if(p2Amount>p1Amount) alert("பிளேயர் 2 வென்றார். மீண்டும் விளையாட OK வை அழுத்தவும்.\nPlayer 2 wins. Press OK to play again.");
    else alert("போட்டி சமநிலையில் முடிந்தது. மீண்டும் விளையாட OK என்பதை அழுத்தவும்.\nIt's a Tie. Press OK to play again.");
    begin = false;
}

function game(){
    if(!homei){
        document.getElementById("board").style.display = "inline-block";
        document.getElementById("about").style.display = "none";
    }
    else {
        document.getElementById("board").style.display = "none";
        document.getElementById("about").style.display = "contents";
    }
    homei=!homei;
}