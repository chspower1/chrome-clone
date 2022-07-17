const toDoListBtn = document.querySelector(".todolist-btn");
const picturesBtn = document.querySelector(".pictures-btn");
const titleBtn = document.querySelector(".time-btn");
const locationBtn = document.querySelector(".location-btn");
const weatherBtn = document.querySelector(".weather-btn");

// 섹션 변수
const toDoListSec = document.querySelector("#sec-todolist");
const picturesSec = document.querySelector("#sec-pictures");
const locationSec = document.querySelector("#sec-location");
const weatherSec = document.querySelector("#sec-weather");
const timeSec = document.querySelector("#sec-time");

// 지우기 함수
function hideToDoList() {
    toDoListSec.classList.add("hidden");
}
function hidePictures() {
    picturesSec.classList.add("hidden");
}
function hideLocation() {
    locationSec.classList.add("hidden");
}
function hideWeather() {
    weatherSec.classList.add("hidden");
}
// 생성함수
function addToDoList() {
    toDoListSec.classList.remove("hidden");
}
function addPictures() {
    picturesSec.classList.remove("hidden");
}
function addLocation() {
    locationSec.classList.remove("hidden");
}
function addWeather() {
    weatherSec.classList.remove("hidden");
}
// 핸들 함수
function handleClickToDoList(e) {
    addToDoList();
    hidePictures();
    hideLocation();
    hideWeather();
    timeChangeSub();
}
function handleClickPictures(e) {
    addPictures();
    hideToDoList();
    hideLocation();
    hideWeather();
    timeChangeSub();
}
function handleClickLocation(e) {
    addLocation();
    hidePictures();
    hideToDoList();
    hideWeather();
    timeChangeSub();
}
function handleClickWeather(e) {
    addWeather();
    hidePictures();
    hideLocation();
    hideToDoList();
    timeChangeSub();
}
function handleClickTitle(e) {
    hideWeather();
    hidePictures();
    hideLocation();
    hideToDoList();
    timeChangeMain();
}

function timeChangeSub() {
    timeSec.classList.add("time-sub");
}
function timeChangeMain() {
    timeSec.classList.remove("time-sub");
}

toDoListBtn.addEventListener("click", handleClickToDoList);
picturesBtn.addEventListener("click", handleClickPictures);
titleBtn.addEventListener("click", handleClickTitle);
locationBtn.addEventListener("click", handleClickLocation);
weatherBtn.addEventListener("click", handleClickWeather);
