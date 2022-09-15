const ui = (() => {
  const currentTemperature = document.getElementById('temp-oggi');
  const minTemperature = document.getElementById('min-temp');
  const maxTemperature = document.getElementById('max-temp');
  const description = document.getElementById('desc-oggi');
  const weatherIcon = document.getElementById('icon');
  const date = document.getElementById('date');

  function updateTemperatureUI(current, min, max) {
    currentTemperature.textContent = `${current}`;
    minTemperature.textContent = `${min}`;
    maxTemperature.textContent = `${max}`;
  }
  function updateDate() {
    date.textContent = `${new Date().toLocaleDateString()}`;
  }

  function updateWeatherDescription(desc) {
    description.textContent = `${desc}`;
  }

  function updateWeatherIcon(iconURL) {
    weatherIcon.src = `${iconURL};`
  }
  return {
    updateTemperatureUI,
    updateDate,
    updateWeatherIcon,
    updateWeatherDescription
  };
})();

export default ui;