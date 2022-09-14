
async function weatherOf(cityName)
{
  const API_KEY = '81cac2909ffc57d50e007c6afd31a2ba';
  const req = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=it&units=metric&appid=${API_KEY}`)
  req.json().then((info) =>{
      document.getElementById('temp-oggi').textContent =
          `${Math.round(parseFloat(info['main']['temp']))} °C`;
      document.getElementById('desc-oggi').textContent =
          `${info['weather'][0]['description']} `;
      document.getElementById('min-temp').textContent =
          `Minima: ${Math.round(parseFloat(info['main']['temp_min']))} °C`;
    document.getElementById('max-temp').textContent =
        `Massima: ${Math.round(parseFloat(info['main']['temp_max']))} °C`;
   });
}
document.getElementById('city-btn').onclick = function promptCity()
{
  const city = prompt('Inserire una città: ')
  document.getElementById('city').textContent = city;
  weatherOf(city);
}