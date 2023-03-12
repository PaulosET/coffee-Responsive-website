/* adjust dynamic year */
const date=document.getElementById("date");
const year=new Date().getFullYear();
date.innerHTML=year;
/*  */
const linkcontainer=document.querySelector(".links_container");
const toggle=document.querySelector(".toggle")
const links=document.querySelector(".link");
toggle.addEventListener("click",function(){
  const containerheight=linkcontainer.getBoundingClientRect().height;
  const linkheight=links.getBoundingClientRect().height;

if(containerheight===0){
    linkcontainer.style.height=`${linkheight}px`
}
else{
    linkcontainer.style.height=0;
}
})

/* fixed navbar */
const nav=document.querySelector(".nav");
const top_link=document.querySelector(".top-link");

window.addEventListener("scroll",function(){
const scrollheight=window.pageYOffset;
const navheight=nav.getBoundingClientRect().height
if(scrollheight>=navheight){
    nav.classList.add("fixed-navbar")
}
else{
  nav.classList.remove("fixed-navbar")
}

if(scrollheight>500){
  top_link.classList.add("show-toplink")
}
else{
  top_link.classList.remove("show-toplink")
}
})

/* scroll */
const scroll=document.querySelectorAll(".sroll_link");

scroll.forEach(function(link) {
  link.addEventListener("click",function(e){
   e.preventDefault();
const id=e.currentTarget.getAttribute("href").slice(1)
const element=document.getElementById(id);
const navheight=nav.getBoundingClientRect().height;
const containerheight=linkcontainer.getBoundingClientRect().height;
const fixedNav = nav.classList.contains("fixed-navbar");
let position=element.offsetTop-navheight;

    if (!fixedNav) {
      position = position - navheight;
    }
    if (navheight > 82) {
      position = position + containerheight;
    }

window.scrollTo({
  left: 0,
  top: position,
})
linkcontainer.style.height=0;

  })
});