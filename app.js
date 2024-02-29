window.onload = () => {
 document.querySelector("#calculate").onclick = calculate;
 document.querySelector("#reset").onclick = reset;
}

function calculate() {
 const date = document.querySelector("#date").value;
 const time = document.querySelector("#time").value;
 const endTime = new Date(date + " " + time);
 const stop = document.querySelector("#stop")

 const intervel = setInterval(() => calculateTime(endTime), 1000);
  stop.addEventListener("click",()=>{
   clearInterval(intervel)
  })
}

function calculateTime(endTime) {
 const currentTime = new Date();
 const days = document.querySelector("#countdown_days");
 const hours = document.querySelector("#countdown_hours");
 const minute = document.querySelector("#countdown_minute");
 const seconds = document.querySelector("#countdown_seconds");

 if (endTime > currentTime) {
     const timeleft = (endTime - currentTime) / 1000;

     days.innerText = Math.floor(timeleft / (24 * 60 * 60));
     hours.innerText = Math.floor((timeleft / (60 * 60)) % 24);
     minute.innerText = Math.floor((timeleft / 60) % 60);
     seconds.innerText = Math.floor(timeleft % 60);
 } else {
     days.innerText = 0;
     hours.innerText = 0;
     minute.innerText = 0;
     seconds.innerText = 0;
 }
}
function reset() {
 document.querySelector("#countdown_days").innerText = 0 ;
document.querySelector("#countdown_hours").innerText = 0 ;
document.querySelector("#countdown_minute").innerText = 0 ;
 document.querySelector("#countdown_seconds").innerText = 0 ;

}