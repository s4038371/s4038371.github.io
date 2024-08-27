function checkWeather() {
  let temp = document.querySelector("#temp");
  let body = document.querySelector("body");
  let outer = document.querySelector(".outer")
  console.log(temp.value);
  if(temp.value >=40) {
    console.log("You gonna DIE by hot");
    body.style.backgroundColor ="crimson";
    outer.style.backgroundColor ="blue";
    outer.style.borderColor ="yellow";
  } else if(temp.value <40 && temp.value >=30) {
    console.log("Almost DIE")
    body.style.backgroundColor ="yellow";
    outer.style.backgroundColor ="black";
    outer.style.borderColor ="red";
  } else if(temp.value <30 && temp.value >=15) {
    console.log("Maybe not DIE")
    body.style.backgroundColor ="green";
    outer.style.backgroundColor ="red";
    outer.style.borderColor ="blue";
  } else if(temp.value <15) {
    console.log("You gona DIE by cold");
    body.style.backgroundColor ="blue";
    outer.style.backgroundColor ="purple";
    outer.style.borderColor ="yellow";
  }
}