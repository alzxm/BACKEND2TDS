const cidade = "Curitiba";
const tempCelsius = 19;

const temFahrenheit =  tempCelsius * (9 / 5) + 32;
const temKelvin = tempCelsius + 273.15;

console.log(`A temperatura em ${cidade} está em ${tempCelsius} Cº`);
console.log(`\nCelsiu: ${tempCelsius} Cº`);
const variacaoDiaria = 26.3 - tempCelsius;

console.log(`A temperatura em ${cidade} está em ${temFahrenheit} Fº`);
console.log(`Fahrenheit: ${temFahrenheit} Fº`);

console.log(`A temperatura em ${cidade} está em ${temKelvin} Kº`);
console.log(`Fahrenheit: ${temKelvin} Kº`);

console.log(`Variação prevista: ${variacaoDiaria}`);