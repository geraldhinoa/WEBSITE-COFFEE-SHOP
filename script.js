// Navbar toggle
const hamburger=document.querySelector('.hamburger');
const navLinks=document.querySelector('.nav-links');
hamburger.addEventListener('click',()=>navLinks.classList.toggle('active'));

// Fade-in scroll
const sections=document.querySelectorAll('section');
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('fade-in');}
  });
},{threshold:0.2});
sections.forEach(sec=>observer.observe(sec));

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

// Coffee beans animation
const canvas=document.getElementById('coffeeCanvas');
const ctx=canvas.getContext('2d');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

class Bean{
  constructor(){
    this.x=Math.random()*canvas.width;
    this.y=Math.random()*-canvas.height;
    this.size=10+Math.random()*10;
    this.speed=1+Math.random()*2;
  }
  update(){this.y+=this.speed;if(this.y>canvas.height)this.y=0;}
  draw(){
    ctx.fillStyle='rgba(60,30,10,0.8)';
    ctx.beginPath();
    ctx.ellipse(this.x,this.y,this.size/2,this.size,0,0,Math.PI*2);
    ctx.fill();
  }
}
const beans=[];for(let i=0;i<20;i++){beans.push(new Bean());}
function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  beans.forEach(b=>{b.update();b.draw();});
  requestAnimationFrame(animate);
}
animate();
window.addEventListener('resize',()=>{
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
});

// Dark mode toggle
const themeToggle=document.getElementById('theme-toggle');
themeToggle.addEventListener('click',()=>{
  document.body.classList.toggle('dark');
  if(document.body.classList.contains('dark')){
    themeToggle.textContent="☀️";
  }else{
    themeToggle.textContent="🌙";
  }
});
