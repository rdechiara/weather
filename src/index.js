import ui from './ui';
import weather from './weather';

const app = (async () => {
  const button = document.getElementById('city-btn');
  button.addEventListener('click', async () => {
    const cityName = prompt('Enter a city: ');
    const city = document.getElementById('city');
    city.textContent = cityName;
    const data = await weather.weatherOf(cityName);
    ui.updateDate();
    ui.updateTemperatureUI(data.temp, data.temp_min, data.temp_max);
    ui.updateWeatherDescription(data.description);
    console.log(data.icon);  //
    ui.updateWeatherIcon(
        `https://openweathermap.org/img/wn/${data.icon}@2x.png`);
  });
})();