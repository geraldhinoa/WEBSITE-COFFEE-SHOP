// Navbar toggle
const hamburger=document.querySelector('.hamburger');
const navLinks=document.querySelector('.nav-links');
hamburger.addEventListener('click',()=>navLinks.classList.toggle('active'));

// Carousel
const track=document.querySelector('.carousel-track');
const prev=document.querySelector('.prev');
const next=document.querySelector('.next');
let index=0;
next.addEventListener('click',()=>{index++;moveCarousel();});
prev.addEventListener('click',()=>{index--;moveCarousel();});
function moveCarousel(){
  const cards=document.querySelectorAll('.card');
  if(index<0)index=cards.length-1;
  if(index>=cards.length)index=0;
  track.style.transform=`translateX(${-index*(cards[0].offsetWidth+32)}px)`;
}

// Dark mode toggle
const themeToggle=document.getElementById('theme-toggle');
themeToggle.addEventListener('click',()=>{
  document.body.classList.toggle('dark');
  themeToggle.textContent=document.body.classList.contains('dark')?"☀️":"🌙";
});

// Preloader
window.addEventListener("load", ()=>{
  document.getElementById("preloader").style.display="none";
});

// Parallax Hero
window.addEventListener("scroll", ()=>{
  let offset=window.scrollY;
  document.querySelector(".parallax").style.transform=`translateY(${offset*0.4}px)`;
});

// Contact Form → WhatsApp
const form = document.getElementById("contactForm");
form.addEventListener("submit", function(e){
  e.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  let whatsappNumber = "085808750161"; // 👉 ganti dengan nomor WA kamu
  let url = `https://wa.me/${whatsappNumber}?text=Halo, saya *${name}* (${email})%0A%0A${message}`;
  window.open(url, "_blank");
});
