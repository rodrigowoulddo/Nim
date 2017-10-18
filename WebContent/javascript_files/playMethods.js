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

    };
}

function getAllBrothers(checkbox){
    var pile = checkbox.parentElement;
    return checkboxes = pile.children;
}

function getCheckboxPosition(checkbox){
    var checkboxes = getAllBrothers(checkbox);

    for (var i = 0; i < checkboxes.length; i++) {
        if(checkboxes[i].name == checkbox.name)
            return i;
    }
}


/*PREDEFINED FUNCTIONS*/
function makeBoard(){
    if(numberOfPiles >= 3) {
        fillPileRndom(pile1);
        fillPileRndom(pile2);
        fillPileRndom(pile3);
    }
    if(numberOfPiles >= 4) {
        fillPileRndom(pile4);
    }
    if(numberOfPiles = 5) {
        fillPileRndom(pile5);
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
    btnStart.display = 'none';
    dialogConfig.style.display = "none";
};


/*Artificial Inteligence*/

document.getElementById('btnRandomPlay').onclick = function () { makeRandomPlay() };

function makeRandomPlay(){
var playableCbx = getPlayableCbx();
var index = getRandomInt(0,playableCbx.length);
playableCbx[index].click();
}

function getPlayableCbx(){
    var playableCbx;
    var piles = document.getElementsByClassName('pile');
    for (var i = 0; i < piles.length; i++) {
        var checkboxes = piles[i].children;


        for (var j = 0; i < checkboxes.length; i++) {
            if(checkboxes[j].checked){
                playableCbx.push(checkboxes[j])
            }
        }
    }

    return playableCbx;
}
