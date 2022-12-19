const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const wind = document.querySelector(".wind");
const hum = document.querySelector(".humidity");
const img = document.querySelector("img");
const input = document.querySelector("input");
const searchIcon = document.querySelector(".search-icon");
const container = document.querySelector(".container");

let cityName;
let icon;
let temp;
let windSpeed;
let humidity;
let iconUrl;
let backgroundUrl;
let inputName = "copenhagen";


//1.render default data-copenhagen
async function renderData() {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputName}&appid=adb03ad064dbe644ce0feb1a1d2e4758`
  );
  const data = await res.json();
  cityName = data.name;
  icon = data.weather[0].icon;
  temp = data.main.temp;
  windSpeed = data.wind.speed;
  humidity = data.main.humidity;
  h1.innerHTML = cityName;
  h2.innerHTML = Math.floor(temp - 272.15) + "°C";
  wind.innerHTML = `Wind: ${windSpeed} km/h`;
  hum.innerHTML = `Humidity: ${humidity}%`;
  iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  img.src = iconUrl;
}
renderData();



//2.update function
async function updateData() {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputName}&appid=adb03ad064dbe644ce0feb1a1d2e4758`
  );
  const data = await res.json();
  cityName = data.name;
  icon = data.weather[0].icon;
  temp = data.main.temp;
  windSpeed = data.wind.speed;
  humidity = data.main.humidity;
  h1.innerHTML = cityName;
  h2.innerHTML = Math.floor(temp - 272.15) + "°C";
  wind.innerHTML = `Wind: ${windSpeed} km/h`;
  hum.innerHTML = `Humidity: ${humidity}%`;
  iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  img.src = iconUrl;

  backgroundUrl = `url(https://source.unsplash.com/1600x900/?${cityName})`;

  container.style.background = backgroundUrl;
  input.value = "";
}



//2.1 search functionality
searchIcon.addEventListener("click", () => {
  inputName = input.value;

  updateData();
});



//2.2 keyboard functionality
document.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    inputName = input.value;

    updateData();
  }
});
