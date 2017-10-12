
// Get the dialog
var dialogConfig = document.getElementById('dialogConfig');

// Get the button that opens the modal
var btnConfig = document.getElementById("btnConfig");

// Get the <span> element that closes the modal
var btnCloseConfig = document.getElementById("btnCloseConfig");

// When the user clicks the button, open the modal
btnConfig.onclick = function() {
    dialogConfig.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
btnCloseConfig.onclick = function() {
    dialogConfig.style.display = "none";
}


/*Defines the clicks that change the board size*/
var radio3piles = document.getElementById('radio3piles');
var radio4piles = document.getElementById('radio4piles');
var radio5piles = document.getElementById('radio5piles');

var pile1 = document.getElementById("pile1");
var pile2 = document.getElementById("pile2");
var pile3 = document.getElementById("pile3");
var pile4 = document.getElementById("pile4");
var pile5 = document.getElementById("pile5");

radio3piles.onclick = function () {
    pile3.style.display= 'block';
    pile1.style.display= 'block';
    pile2.style.display= 'block';
    pile4.style.display= 'none';
    pile5.style.display= 'none';
}

radio4piles.onclick = function () {
    pile1.style.display= 'block';
    pile2.style.display= 'block';
    pile3.style.display= 'block';
    pile4.style.display= 'block';
    pile5.style.display= 'none';
}

radio5piles.onclick = function () {
    pile1.style.display= 'block';
    pile2.style.display= 'block';
    pile3.style.display= 'block';
    pile4.style.display= 'block';
    pile5.style.display= 'block';
}

