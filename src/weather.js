/*
** Given a JSON object <data> extract weather information
 */
export default function extractWeatherData(data) {
  const {
    main: {temp, temp_min, temp_max},
    weather: [{description}]

  } = data;
  return {temp, temp_min, temp_max, description};
}
/*
 */
export default async function weatherOf(cityName) {
  const endpoint = 'https://api.openweathermap.org/data/2.5/weather?';
  const units = '&units=metric';
  const lang = '&lang=it';
  const API_KEY = '81cac2909ffc57d50e007c6afd31a2ba';
  const url = `${endpoint}q=${cityName}${units}${lang}&appid=${API_KEY}`;

  try {
    const req = await fetch(url);
    const data = extractWeatherData(await req.json());
    return data;
  }
  catch (e) {
    // here's go error handling code
  }
  return null;
}