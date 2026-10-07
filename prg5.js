const celsius = [0, 20, 30, 40];
const fahrenheit =  celsius.map(celsius => (celsius * 9/5) + 32);
console.log(fahrenheit)
module.exports = fahrenheit;