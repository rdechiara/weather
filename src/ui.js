/**
 * gestisci il rendering dei componenti nel browser (View)
 * @returns un oggetto con le funzioni per impostare il testo dei componenti
 * dell'app (temperatura attuale, min, max, descrizione, icona e data odierna)
 */
const ui = (() => {
  // gli ID sono hard coded e necessita di un refactoring
  const currentTemperature = document.getElementById('temp-oggi');
  const minTemperature = document.getElementById('min-temp');
  const maxTemperature = document.getElementById('max-temp');
  const description = document.getElementById('w-desc');
  const weatherIcon = document.getElementById('icon');
  const date = document.getElementById('date');

  /**
   * Approssima un valore numerico all'intero più vicino
   * refactoring richiesto: da spostare in altro modulo
   * @param value
   * @returns {number}
   */
  function round(value) {
    return Math.round(parseFloat(value));
  }

  /**
   * Aggiorna l'UI dedicata alla temperatura
   * @param current
   * @param min
   * @param max
   */
  function updateTemperatureUI(current, min, max) {
    currentTemperature.textContent = `${round(current)} °C`;
    minTemperature.textContent = `${round(min)} °C`;
    maxTemperature.textContent = `${round(max)} °C`;
  }

  /**
   * Aggiorna la data corrente
   */
  function updateDate() {
    date.textContent = `${new Date().toLocaleDateString()}`;
  }

  /**
   * Aggiorna la descrizione delle condizioni meteo attuali
   * @param desc la descrizione del meteo fornita da Openweathermap
   */
  function updateWeatherDescription(desc) {
    description.textContent = `${desc}`;
  }

  /**
   * Aggiorna l'icona del meteo
   * @param iconURL l'url dell'icona ottenuto da Openweathermap
   */
  function updateWeatherIcon(iconURL) {
    weatherIcon.src = `${iconURL}`;
  }
  return {
    updateTemperatureUI,
    updateDate,
    updateWeatherIcon,
    updateWeatherDescription,
  };
})();

export default ui;