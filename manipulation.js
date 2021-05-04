// Get the modal
var modal = document.getElementById("myModal");
var modalLumik = document.getElementById("myModalLumik");
var modalLA = document.getElementById("myModalLA");
var modalLL = document.getElementById("myModalLL");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btnLumik = document.getElementById("myBtnLumik");
var btnLA = document.getElementById("myBtnLA");
var btnLL = document.getElementById("myBtnLL");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var spanLumik = document.getElementsByClassName("close")[1];
var spanLA = document.getElementsByClassName("close")[2];
var spanLL = document.getElementsByClassName("close")[3];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
btnLumik.onclick = function() {
  modalLumik.style.display = "block";
}
btnLA.onclick = function() {
  modalLA.style.display = "block";
}
btnLL.onclick = function() {
  modalLL.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
spanLumik.onclick = function() {
  modalLumik.style.display = "none";
}
spanLA.onclick = function() {
  modalLA.style.display = "none";
}
spanLL.onclick = function() {
  modalLL.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modalLumik) {
    modalLumik.style.display = "none";
  }
  if (event.target == modalLA) {
    modalLA.style.display = "none";
  }
  if (event.target == modalLL) {
    modalLL.style.display = "none";
  }
}

//COLLAPSIBLE
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}