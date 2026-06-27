function updateClock() {
 const now = new Date();
 const h = String(now.getHours()).padStart(2, "0");
 const m = String(now.getMinutes()).padStart(2, "0");
 const s = String(now.getSeconds()).padStart(2, "0");
 const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
 const months = ["Jan","Feb","Mar","Apr","May","Jun",
 "Jul","Aug","Sep","Oct","Nov","Dec"];
 const day = days[now.getDay()];
 const date = now.getDate();
 const month = months[now.getMonth()];
 const year = now.getFullYear();
 document.getElementById("clock").innerHTML =
 `<span class="time">${h}:${m}:${s}</span>
 <span class="date">${day}, ${month} ${date}, ${year}</span>`;
}
updateClock(); // run immediately
setInterval(updateClock, 1000); // update every second