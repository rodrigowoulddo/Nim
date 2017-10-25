
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
function insertNewGame(player, moves) {
    // tableRanking.append('<tr> <td>'+1+'</td> <td>'+player+'</td> <td>'+moves+'</td> </tr>');
}

