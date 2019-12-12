
function setup() {
  createCanvas(400, 400);
  background(255, 255, 255);

  // translucent stroke using alpha value
  stroke(0, 0, 0, 15);
}

function randomChord() {
  // find a random point on a circle
  let angle1 = random(0, 2 * PI);
  let xpos1 = 200 + 200 * cos(angle1);
  let ypos1 = 200 + 200 * sin(angle1);

  // find another random point on the circle
  let angle2 = random(0, 2 * PI);
  let xpos2 = 200 + 200 * cos(angle2);
  let ypos2 = 200 + 200 * sin(angle2);

  // draw a line between them
  line(xpos1, ypos1, xpos2, ypos2);
}

function draw() {
  // draw two random chords each frame
  randomChord();
  randomChord();
}


// function fadeIn(el){
//   el.classList.add('show');
//   el.classList.remove('hide');
// }
//
// function onLoadFun(){
//
//   var web = draw();
//   var animationEls= document.querySelectorAll(".ani")
//     for (var i=0; i<animationEls.length; i++){
//       animationEls[i].classList.add("hide");
//     }
//     for (var i=0; i<animationEls.length; i++){
//       setTimeout(function(){fadeIn(animationEls[i])},10000);
//     }
// }
//
// window.onload=onLoadFun()
