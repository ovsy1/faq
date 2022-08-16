var coll = document.getElementsByClassName("collapsible");
var li = document.getElementsByClassName("faq__li");
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


document.getElementsByClassName('collapsible').onclick = function() {
  document.getElementsByClassName('faq__li').classList.add('change');
}


