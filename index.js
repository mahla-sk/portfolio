/*function Toggle(){
  const nav=document.getElementById("navbar");
  nav.style.display=nav.style.display==="block"?"none":"block";
}*/

function Toggle(){
    const navMenu=document.getElementById("navbar");
    navMenu.classList.toggle("show");
}
document.addEventListener("DOMContentLoaded",function(){
    const btn=document.querySelector(".hamburger");
    const navMenu=document.getElementById("navbar");

    btn.addEventListener("click",Toggle);
});

