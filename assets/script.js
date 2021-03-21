var hamMneu = document.getElementsByClassName("hamMenu");
var header  = document.getElementsByTagName("header");

hamMneu[0].addEventListener("click", function(){
    header[0].classList.toggle("open");
});