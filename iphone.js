let time = document.getElementById("time");
const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
console.log(hours, minutes);
time.innerHTML = hours + ":" + minutes;
