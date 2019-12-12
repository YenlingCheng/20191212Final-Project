
var balls= document.getElementsByClassName("ball")

// 取得滑鼠的x,y軸資訊-->event.clientX
// window.innerWidth是瀏覽器的寬度
document.onmousemove=function(){
  var x = event.clientX*100/window.innerWidth+"%";
  var y = event.clientY*100/window.innerHeight+"%";

  for (var i=0;i<2;i++){
    balls[i].style.left=x;
    balls[i].style.top=y;
    balls[i].style.transform="translate(-"+x+",-"+y+")";
  }
};


var ways = [
  {
    name: "To make sure the source of information is valid"
  },

  {
    name: "To check if the pictures embedded are photoshopped "
  },

  {
    name: "Try to jump out of your echo chamber"
  }
];

var wayList= document.querySelector("#strategies");
var inputEl=document.querySelector("input");

function updateWay(){
  var wayHTML="";
  for (way of ways) {
    wayHTML += `<div id="${ way.name }">${ way.name }</div>`
	}

if (wayHTML===""){
  wayHTML= "<div>No post...</div>";
}
wayList.innerHTML=wayHTML;
}

function validateInput(input){
  if(input !==""){
    return true;
  }

  else{
    return false;
  }
}

function addWay(){
  if (!validateInput(inputEl.value)){
    return
  }

  var userInput=inputEl.value;
  var newWays={name:userInput};

  ways.push(newWays);
  updateWay();
}

updateWay();

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
