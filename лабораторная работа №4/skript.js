let section = document.querySelector("section"),
  icons = document.querySelector(".icons");

icons.onclick = () => {
  section.classList.toggle("dark");
};

// creating a function and calling it in every seconds
setInterval(updateClock,1000); // 1000 milliseconds = 1s

function updateClock(){
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let day = date.getDay();
  let month= date.getMonth();
  let dateNum= date.getDate();
  let year= date.getFullYear();
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  document.querySelector(".hour_num").innerText = hour;
  document.querySelector(".min_num").innerText = min;
  document.querySelector(".sec_num").innerText = sec;
  document.querySelector(".am_pm").innerText = d;
  document.querySelector(".date").innerText = `${week[day]}, ${months[month]} ${dateNum}, ${year}`;
}
