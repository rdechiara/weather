import ui from './ui';
import weather from './weather';
import message from "./message";

const app = (async () => {
  const msg = message.create('err-msg');
  const button = document.getElementById('city-btn');
  button.addEventListener('click', async () => {
    if(msg.isVisible()) {
      msg.toggleVisibility('err-msg-visible',
          'err-msg-hidden');
    }
    const cityName = prompt('Enter a city: ');
    const city = document.getElementById('city');
    city.textContent = cityName;
    try {

      const data = await weather.weatherOf(cityName);
      if (data === undefined) {
        throw new Error('Error: unable to fetch weather information');

      }
      ui.updateDate();
      ui.updateTemperatureUI(data.temp, data.temp_min, data.temp_max);
      ui.updateWeatherDescription(data.description);

      ui.updateWeatherIcon(
          `https://openweathermap.org/img/wn/${data.icon}@2x.png`);

    } catch (err) {
      msg.setMessage('Error: unable to load data');
      msg.toggleVisibility('err-msg-visible',
          'err-msg-hidden');
    }
  });
})();