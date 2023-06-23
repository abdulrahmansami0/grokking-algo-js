/**
 * @param {number} celsius
 * @return {number[]}
 */
const convertTemperature = (celsius) => {
  let kelvin = celsius + 273.15;
  let fahrenheit = celsius * 1.8 + 32.0;

  return [kelvin, fahrenheit];
};

console.log(convertTemperature(36.5));
