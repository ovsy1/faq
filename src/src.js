var coll = document.getElementsByClassName("collapsible");
var li = document.getElementsByClassName("faq__li");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    this.classList.toggle("open");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

window.onscroll = function() {
  scrollFunction();
}

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("topBtn").style.display = "block";
  } else {
    document.getElementById("topBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Other
}
