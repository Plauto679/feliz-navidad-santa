const canvas = document.getElementById('snow');
const ctx = canvas.getContext('2d');
let width = 0, height = 0;
function resize(){
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

class Flake{
  constructor(){
    this.reset();
  }
  reset(){
    this.x = Math.random()*width;
    this.y = Math.random()*-height;
    this.radius = 1 + Math.random()*3.5;
    this.speed = 0.5 + Math.random()*2.0;
    this.wind = (Math.random()-0.5) * 0.8;
    this.opacity = 0.4 + Math.random()*0.6;
  }
  update(){
    this.y += this.speed;
    this.x += this.wind;
    if(this.y > height + 10 || this.x < -50 || this.x > width + 50) this.reset();
  }
  draw(ctx){
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255,255,255,'+this.opacity+')';
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
    ctx.fill();
  }
}

const flakes = [];
function initFlakes(){
  flakes.length = 0;
  const count = Math.min(200, Math.floor((window.innerWidth/10)));
  for(let i=0;i<count;i++) flakes.push(new Flake());
}
initFlakes();

function loop(){
  ctx.clearRect(0,0,width,height);
  for(const f of flakes){
    f.update();
    f.draw(ctx);
  }
  requestAnimationFrame(loop);
}
loop();

// Re-init on resize with throttle
let rt;
window.addEventListener('resize', ()=>{ clearTimeout(rt); rt=setTimeout(()=>{ resize(); initFlakes(); },150); });

// Allow user to toggle mute by clicking the video (useful to hear Santa)
const video = document.getElementById('video');
video.addEventListener('click', ()=>{ video.muted = !video.muted; });

// Attempt programmatic play; if blocked, show play button for user
const playButton = document.getElementById('playButton');
function showPlay(){ playButton.style.display = 'flex'; }
function hidePlay(){ playButton.style.display = 'none'; }

video.play().then(()=>{
  hidePlay();
}).catch(()=>{
  showPlay();
});

playButton.addEventListener('click', ()=>{
  video.play().then(()=> hidePlay()).catch(()=>{});
});

// Hide play button when playback starts
video.addEventListener('play', hidePlay);
video.addEventListener('pause', showPlay);
