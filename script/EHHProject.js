
const say = console.table
const myCanvas = document.getElementById("ehhHolder")
const canvas =[
document.getElementById("canvas1"),
document.getElementById("canvas2"),
document.getElementById("canvas3"),
]
let startImg = 1
let curImg = 0
let imgOut = 0
let pauseEHHIntervel = false

//pauses carousel on mouse over
myCanvas.onmouseout = function(){pauseEHHIntervel=false};
myCanvas.onmouseover = function(){pauseEHHIntervel=true};

start()

function start(){
curImg = startImg
imgOut = curImg - 1

for(i=0; i<canvas.length; i++){
  canvas[i].style.opacity = 0.0;
}
canvas[curImg].style.opacity = 1.0;


  ehh = setInterval(function(){
    crossfade({fadeTime:15})
  },5000)
}


function crossfade({fadeTime = 1}) {
  //pause flag
  if(pauseEHHIntervel) return


  // Step curImg and imgOut variables to modify
  // canvas holding array
  curImg++
  imgOut++
  i = 0;
  j = 100;
  k = window.setInterval(function() {
    if (i >= 100) {
      clearInterval(k);
    } else {
      canvas[curImg%3].style.opacity = i / 100;
      canvas[imgOut%3].style.opacity = j / 100;
      i++;
      j--;
    }
  }, fadeTime);
};



