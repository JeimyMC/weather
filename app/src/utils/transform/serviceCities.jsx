const cities = [
  { city: "Valencia", country: "España", countryCode: "ES" },
  { city: "Barcelona", country: "España", countryCode: "ES" },
  { city: "A Coruña", country: "España", countryCode: "ES" },
  { city: "Buenos Aires", country: "Argentina", countryCode: "AR" },
  { city: "Bogotá", country: "Colombia", countryCode: "CO" },
];

export const getCities = () => cities;

export const getCountryName = (countryCode) =>
  cities.filter((city) => city.countryCode === countryCode)[0].country;
