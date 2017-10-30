
// Get the dialog
var dialogRanking = document.getElementById('dialogRanking');

// Get the button that opens the modal
var btnRanking = document.getElementById('btnRanking');

// Get the <span> element that closes the modal
var btnCloseRanking = document.getElementById('btnCloseRanking');

// When the user clicks the button, open the modal
btnRanking.onclick = function() {
    dialogRanking.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
btnCloseRanking.onclick = function() {
    dialogRanking.style.display = "none";
};

var tableRanking = document.getElementById("tableRanking");
var indexRanking = 0; /*change it later to function that counts the number of moves*/
function insertNewGame(player, moves) {
    indexRanking++;
    var row = tableRanking.insertRow(indexRanking);
    var cellIndex = row.insertCell(0);
    var cellPlayer = row.insertCell(1);
    var cellMoves = row.insertCell(2);
    cellIndex.innerHTML = indexRanking;
    cellPlayer.innerHTML = player;
    cellMoves.innerHTML = moves;
}

