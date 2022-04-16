// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("btn2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



// Get the modal
var modalo = document.getElementById("myModalo");

// Get the button that opens the modal
var btno = document.getElementById("btn3");

// Get the <span> element that closes the modal
var spano = document.getElementsByClassName("closeo")[0];

// When the user clicks on the button, open the modal
btno.onclick = function() {
  modalo.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spano.onclick = function() {
  modalo.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalo) {
    modalo.style.display = "none";
  }
}