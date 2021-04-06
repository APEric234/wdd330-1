function animateMenu() {
  var element = document.getElementById("navbarToggler");
 
  if(element.classList.contains("open")){
    element.classList.remove("open");
  }else{
    element.classList.add("open");
  }
}