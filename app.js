let index = 0,
    interval = 1000;

const rand = (min, max) => 
  Math.floor(Math.random() * (max - min + 1)) + min;

const animate = star => {
  star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
  star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

  star.style.animation = "none";
  star.offsetHeight;
  star.style.animation = "";
}

for(const star of document.getElementsByClassName("magic-star")) {
  setTimeout(() => {
    animate(star);
    
    setInterval(() => animate(star), 1000);
  }, index++ * (interval / 3))
}
for(const star of document.getElementsByClassName("magic-stare")) {
  setTimeout(() => {
    animate(star);
    
    setInterval(() => animate(star), 1000);
  }, index++ * (interval / 3))
}


const nav=document.querySelector(".navbar");
const text=document.querySelector(".text");
const tee=document.querySelector(".tee");
const icon1=document.querySelector(".icon1");
const icon2=document.querySelector(".icon2");


const t1=new TimelineMax();
t1.fromTo(nav,
  1,
  {y:"-100%"},
  {y:"0%", ease: Power2.easeInOut }
  )
  .fromTo(
    tee,
    1.5,
    {y: "100%"},
    {y: "0%", ease: Power2.easeInOut},
    "-=1"
  )
    .fromTo(
      text,
      1,
      {opacity:0},
      {opacity:1, ease: Power2.easeInOut},
      "-=1"

    )
  

   
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.defaults({
        toggleActions: "restart pause resume pause",
        scroller: ".container"
    });

    gsap.from(".design h2", {
      scrollTrigger: ".design",
      y:"30%",
      opacity:0
  });

    gsap.to(".design h2", {
      scrollTrigger: ".design",
      duration: 1,
      y:"0%",
      ease: Power2.easeInOut, 
      opacity:1
  });




var w=window.innerWidth;
if(w>480){
  gsap.to(".design .cards .card1", {
    scrollTrigger: ".design",
    duration: 1.5,
    y:"0px",
    x:"120px",
    rotate:20,
    ease: Power2.easeInOut,
    opacity:1
});

gsap.to(".design .cards .card2", {
  scrollTrigger: ".design",
  duration: 1.5,
  x:"-120px",
  rotate:-20,
  ease: Power2.easeInOut,
  opacity:1
});
}
else{
  gsap.to(".design .cards .card1", {
    scrollTrigger: ".design",
    duration: 1.5,
    y:"0px",
    x:"100px",
    rotate:18,
    ease: Power2.easeInOut,
    opacity:1
});

gsap.to(".design .cards .card2", {
  scrollTrigger: ".design",
  duration: 1.5,
  x:"-100px",
  rotate:-18,
  ease: Power2.easeInOut,
  
  opacity:1
});

}




    gsap.from(".wear .lastupper .backall", {
      scrollTrigger: ".wear",
      opacity:0
    });

    gsap.to(".wear .lastupper .backall", {
      scrollTrigger: ".wear",
      duration: 2,
      ease: Power2.easeInOut,
      opacity:1
    });


    gsap.from(".wear .lastupper h3", {
      scrollTrigger: ".wear",
      height:"0%",
      opacity:0
    });

    gsap.to(".wear .lastupper h3", {
      scrollTrigger: ".wear",
      duration: 2,
      height:"25%",
      ease: Power2.easeInOut,
      opacity:1
    });



    gsap.from(".wear .lastdown", {
      scrollTrigger: ".wear",
      height:"0%"
    });

    gsap.to(".wear .lastdown", {
      scrollTrigger: ".wear",

      duration: 1.4,
      ease: Power2.easeInOut,
      height:"20%",
      
    });





const teepic=document.querySelectorAll(".shirt");
var counter=0;

teepic.forEach((shirt,index) => {
  shirt.style.left=`${ index *100 }%`;
})

const goNext=()=>{
  counter++;
  if(counter>=4){
    counter=0;
  }
  slidetee();
}
const goPrev=()=>{
  counter--;
  if(counter<0){
    counter=3;
  }

  slidetee();
}
const slidetee=()=>{
  teepic.forEach((shirt)=>
  {
    shirt.style.transform = `translateX(-${counter * 100}%)`
  })

}
document.querySelector(".icon").addEventListener('click', ()=>{
  document.querySelector(".icon").classList.toggle("arrow");
  document.querySelector(".about").classList.toggle("inspect");
  document.querySelector(".icon1").classList.toggle("ikon");
  document.querySelector(".icon2").classList.toggle("ikon");
})






