var coll = document.getElementsByClassName("collapsible");
const contt = document.querySelectorAll(".content");
var i;
var j;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.classList.remove("current_content");
      this.classList.remove("active-callapse");
    } else {
      this.classList.add("active-callapse");

      if (content.scrollHeight > 900) {
        content.style.maxHeight = "900px";
        content.style.overflowY = "auto";
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
      content.classList.add("current_content");
      for (j = 0; j < contt.length; j++) {
        if (content !== contt[j]) {
          if (contt[j].style.maxHeight) {
            contt[j].style.maxHeight = null;
            coll[j].classList.remove("active-callapse");
            contt[j].classList.remove("current_content");
          }
        }
      }
    }
  });
}
