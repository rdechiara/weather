const weather = (() => {

  function extractWeatherData(data) {
    const {
      main: {temp, temp_min, temp_max},
      weather: [{description, icon}]

    } = data;
    return {temp, temp_min, temp_max, description, icon};
  }
  /*
   */
  async function weatherOf(cityName) {
    const endpoint = 'https://api.openweathermap.org/data/2.5/weather?';
    const units = '&units=metric';
    const lang = '&lang=it';
    const API_KEY = '81cac2909ffc57d50e007c6afd31a2ba';
    const url = `${endpoint}q=${cityName}${units}${lang}&appid=${API_KEY}`;

    try {
      const req = await fetch(url);
      return extractWeatherData(await req.json());
    } catch (e) {
      // here's go error handling code
    }
    return null;
  }
  return {weatherOf};
})();

export default weather;
