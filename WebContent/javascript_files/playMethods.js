/*COMMON ELEMENTS*/
var board = document.getElementById("divBoard");
var txtMessege = document.getElementById("txtMessage");
var player = "you"; /*default, starts with player*/
// var player = "cpu";

/*COMMANDS*/
var playables = document.getElementsByClassName('playable');
for (var i = 0; i < playables.length; i++) {
    var checkbox = playables[i];
    checkbox.onclick = function () {
        /*makes the checkbox uncheackble but not cheackble again*/
        if (this.checked)
            return false;

        /*Make chackbox uncheck the checkboxes above it*/
        checkboxPosition = getCheckboxPosition(this);
        var checkboxes = getAllBrothers(this);
        for (var i = checkboxPosition; i < checkboxes.length; i++) {
            checkboxes[i].checked = false;
        }


        if(player == "you"){


            /*COMPUTER MOVE*/
            player = "cpu";

            /*block board*/
            board.style.pointerEvents = "none";

            /*show message of computer's turn*/
            txtMessege.innerHTML = "Computer's turn!";
            txtMessege.style.color = "red";



            /*TODO: Implement non-random moves*/
            setTimeout(makeRandomPlay,2000); /*wait 2 seconds*/
            /*the rest of the steps are defined nside makeRandomPlay function*/

        }else{
            player = "you";
        }

    };
}

function getAllBrothers(checkbox){
    var pile = checkbox.parentElement;
    return checkboxes = pile.children;
}

function getCheckboxPosition(checkbox){
    var checkboxes = getAllBrothers(checkbox);

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].name == checkbox.name) { /*TODO: IDE alert for an error here, check later*/
            return i;
        }
    }
}


/*PREDEFINED FUNCTIONS*/
function makeBoard(){
    if(numberOfPiles >= 3) {
        fillPileRndom(pile1);
        fillPileRndom(pile2);
        fillPileRndom(pile3);
        // alert("Piles 1-3 filled"); /*DEBUG*/
    }
    if(numberOfPiles >= 4) {
        fillPileRndom(pile4);
        // alert("Pile 4 filled"); /*DEBUG*/
    }
    if(numberOfPiles >= 5) {
        fillPileRndom(pile5);
        // alert("Pile 5 filled"); /*DEBUG*/
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function fillPileRndom(pile){
    var checkboxes = pile.children;
    var numberOfChecked = getRandomInt(2,checkboxes.length);
    for (var i = 0; i < numberOfChecked; i++) {
        checkboxes[i].checked = true;
    }
}

/*when you click start, you cant login or change the config anymore*/
var btnStart = document.getElementById('btnStart');
btnStart.onclick = function () {
    makeBoard();
    btnLogin.setAttribute("disabled", true);
    btnConfig.setAttribute("disabled", true);
    btnStart.setAttribute("disabled", true);
    dialogConfig.style.display = "none";

    /*shows who plays first*/
    if(player == "cpu"){
        txtMessege.innerHTML = "Computer's turn!";
        txtMessege.style.color = "red";
    }else if (player == "you"){
        txtMessege.innerHTML = "Your turn!";
        txtMessege.style.color = "green";
    }
};


/*Artificial Inteligence*/
var playableCbx;
var indexOfPlayCbx;

function makeRandomPlay(){

getPlayableCbx();
// alert("Number of playable checkboxes is "+playableCbx.length); /*DEBUG*/
    if(playableCbx.length > 0){
         indexOfPlayCbx = getRandomInt(0,playableCbx.length-1);
        playableCbx[indexOfPlayCbx].click();
    }

    /*unblock board*/
    board.style.pointerEvents = "all";

    /*show message of your turn*/
    txtMessege.innerHTML = "Your turn!";
    txtMessege.style.color = "green";
}

function getPlayableCbx(){
    playableCbx = [];
    var piles = document.getElementsByClassName('pile');
    // alert("Te board has "+piles.length+" pile(s)"); /*DEBUG*/
    for (var i = 0; i < piles.length; i++) {
        var checkboxes = piles[i].children;
        // alert("Pile "+i+" has "+checkboxes.length+" checkboxes."); /*DEBUG*/
        for (var j = 0; j < checkboxes.length; j++) {
            // alert("looking checkbox nº "+j); /*DEBUG*/
            if(checkboxes[j].checked){
                // alert("checkbox "+j+" is checked"); /*DEBUG*/
                playableCbx.push(checkboxes[j])
            }
        }
    }
}
