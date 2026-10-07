
document.addEventListener("DOMContentLoaded",()=>{
  const toggle=document.querySelector(".mobile-toggle");
  const links=document.querySelector(".navlinks");
  if(toggle&&links) toggle.addEventListener("click",()=>links.classList.toggle("open"));
  const year=document.querySelectorAll("[data-year]");
  year.forEach(x=>x.textContent=new Date().getFullYear());
});
