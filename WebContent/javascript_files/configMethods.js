
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
