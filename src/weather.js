/**
 * weather consente di chiamare l'API di OpenMapWeather e di estrarre i dati
 * meteorologici dal risultato in JSON
 * * @module weather
 * @return {weatherOf} un oggetto contenent la funzione weatherOf
 */
const weather = (() => {
  /**
   * estrai i dati meteorologici da un oggetto JSON
   * @param data l'oggetto JSON contenente i dati
   * @return un oggetto con temperature attuale, minima, massima giornaliere,
   * descrizione del meteo e un link all'icona meteo appropriata
   */
  function extractWeatherData(data) {
    const {
      main: {temp, temp_min, temp_max},
      weather: [{description, icon}]

    } = data;
    return {temp, temp_min, temp_max, description, icon};
  }
  /**
   * effettua la chiamata all'API per i dati meteo odierni
   * @param cityName il nome della città di cui ottenere i dati meteo
   * @return Promise da cui estrarre il chiamante estrae i dati grezzi
   */
  async function weatherOf(cityName) {
    const endpoint = 'https://api.openweathermap.org/data/2.5/weather?';
    const units = '&units=metric';
    const lang = '&lang=it';
    //a questo punto del corso non era possibile usare il backend per le API key
    const API_KEY = '81cac2909ffc57d50e007c6afd31a2ba';
    const url = `${endpoint}q=${cityName}${units}${lang}&appid=${API_KEY}`;

    try {
      const req = await fetch(url);
      return extractWeatherData(await req.json());
    } catch (e) {
      // here's go error handling code
    }
    return undefined;
  }
  return {weatherOf};
})();

export default weather;
