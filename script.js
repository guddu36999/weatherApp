// script.js
const apiKey = "1e8f6967909a4bb7b9841845252301";
const searchButton = document.getElementById('search');
const locationInput = document.getElementById('location');
const weatherInfo = document.getElementById('weather-info');
const cityName = document.getElementById('city-name');
const temperature = document.getElementById('temperature');
const condition = document.getElementById('condition');

searchButton.addEventListener('click', () => {
  const location = locationInput.value.trim();
  if (location) {
    fetchWeather(location);
  }
});

async function fetchWeather(location) {
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Location not found");

    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    alert(error.message);
  }
}

function displayWeather(data) {
  cityName.textContent = data.location.name + ", " + data.location.country;
  temperature.textContent = `Temperature: ${data.current.temp_c}°C`;
  condition.textContent = `Condition: ${data.current.condition.text}`;
  weatherInfo.classList.remove('hidden');
}
