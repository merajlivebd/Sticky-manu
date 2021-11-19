var navbar =  document.getElementById("navbar")


window.onscroll = function(){
if(window.pageYOffset >= manu.offsetTop){
 navbar.classList.add("sticky");

}
else{
navbar.classList.remove("sticky");
 }
}