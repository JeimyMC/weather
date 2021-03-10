const appid = "455fd46dd2b9bd458ba912e45bd5eb88";

export const getForecastUrl = (city, countryCode) =>
  `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${appid}`;

export const getWeatherUrl = (city, countryCode) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`;
