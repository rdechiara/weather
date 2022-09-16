const ui = (() => {
  const currentTemperature = document.getElementById('temp-oggi');
  const minTemperature = document.getElementById('min-temp');
  const maxTemperature = document.getElementById('max-temp');
  const description = document.getElementById('w-desc');
  const weatherIcon = document.getElementById('icon');
  const date = document.getElementById('date');
  function round(value)
  {
    return Math.round(parseFloat(value));
  }
  function updateTemperatureUI(current, min, max) {
    currentTemperature.textContent = `${round(current)} °C`;
    minTemperature.textContent = `${round(min)} °C`;
    maxTemperature.textContent = `${round(max)} °C`;
  }
  function updateDate() {
    date.textContent = `${new Date().toLocaleDateString()}`;
  }

  function updateWeatherDescription(desc) {
    description.textContent = `${desc}`;
  }

  function updateWeatherIcon(iconURL) {
    weatherIcon.src = `${iconURL}`;
  }
  return {
    updateTemperatureUI,
    updateDate,
    updateWeatherIcon,
    updateWeatherDescription
  };
})();

export default ui;