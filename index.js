document.title="Christopher Li"

const tiltEffectSettings = {
    max: 00, // max tilt rotation (degrees (deg))
    perspective: 1000, // transform perspective, the lower the more extreme the tilt gets (pixels (px))
    scale: 1, // transform scale - 2 = 200%, 1.5 = 150%, etc..
    speed: 500, // speed (transition-duration) of the enter/exit transition (milliseconds (ms))
    easing: "cubic-bezier(.03,.98,.52,.99)" // easing (transition-timing-function) of the enter/exit transition
  };

const card = document.querySelector('.card');


function adjustCardSize() {
  card.style.height = '85%';
  card.style.width = `${0.85 * window.innerHeight * 8.5/11}px`;
}

window.addEventListener('resize', adjustCardSize);
adjustCardSize(); // call the function once on page load

  const cards = document.querySelectorAll(".card");
  
  cards.forEach(card => {
    card.addEventListener("mouseenter", cardMouseEnter);
    card.addEventListener("mousemove", cardMouseMove);
    card.addEventListener("mouseleave", cardMouseLeave);
  });
  
  function cardMouseEnter(event) {
    setTransition(event);
  }
  
  function cardMouseMove(event) {
    const card = event.currentTarget;
    const cardBound = card.getBoundingClientRect();
    const cardWidth = card.offsetWidth;
    const cardHeight = card.offsetHeight;
    const centerX = cardBound.left + cardWidth/2;
    const centerY = cardBound.top + cardHeight/2;
    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;

    const rotateXUncapped = (-1)*tiltEffectSettings.max*mouseY/(cardHeight/2);
    const rotateYUncapped = 1*tiltEffectSettings.max*mouseX/(cardWidth/2);
    const rotateX = rotateXUncapped < -tiltEffectSettings.max ? -tiltEffectSettings.max : 
                  (rotateXUncapped > tiltEffectSettings.max ? tiltEffectSettings.max : rotateXUncapped);
    
    const rotateY = rotateYUncapped < -tiltEffectSettings.max ? -tiltEffectSettings.max : 
                  (rotateYUncapped > tiltEffectSettings.max ? tiltEffectSettings.max : rotateYUncapped);
  
    card.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) 
                            scale3d(${tiltEffectSettings.scale}, ${tiltEffectSettings.scale}, ${tiltEffectSettings.scale})`;
  }
  
  function cardMouseLeave(event) {
    event.currentTarget.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    setTransition(event);
  }
  
  function setTransition(event) {
    const card = event.currentTarget;
    clearTimeout(card.transitionTimeoutId);
    card.style.transition = `transform ${tiltEffectSettings.speed}ms ${tiltEffectSettings.easing}`;
    card.transitionTimeoutId = setTimeout(() => {
      card.style.transition = "";
    }, tiltEffectSettings.speed);
  }


var ageEl = document.getElementById("age")
var birthday = new Date("2004-06-10")
var ageDifMs = Date.now() - birthday.getTime();

var seconds = ageDifMs / 1000;

var years = Math.trunc(ageDifMs / 31536000000)
var remMs = ageDifMs % 31536000000
var months = Math.trunc(remMs / 2628000000)
remMs = remMs % 2628000000
var days = Math.trunc(remMs / 86400000)

ageEl.innerHTML = `${years} Years, ${months} Months and ${days} Days`

var lastupdated = new Date("2023-01-18")
var ageDiff = Date.now() - lastupdated.getTime();
var secondsLU = ageDiff / 1000;
var daysLU = Math.trunc(secondsLU / 86400000);


var toggle = document.getElementById("toggle")
const body = document.querySelector("body")
toggle.addEventListener("click", function(){
  body.classList.toggle("dark");
  if(toggle.innerHTML.includes("moon"))
  {
    toggle.innerHTML = "<i class='bx bx-sun'></i>"
  }
  else if(toggle.innerHTML.includes("sun"))
  {
    toggle.innerHTML = "<i class='bx bx-moon'></i>"
  }
  else{
    console.log(toggle.innerHTML)
  }
})
