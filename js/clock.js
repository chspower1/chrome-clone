const clock = document.querySelector(".time-time");
const calendar = document.querySelector(".time-calendar");

function getClock() {
    const date = new Date();
    const year = String(date.getFullYear());
    const month = date.toLocaleString("en-US", { month: "short" });
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    calendar.innerText = `${day} ${month} ${year}`;
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);
