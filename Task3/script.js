let celsiusInput = document.querySelector("#celsius > input");
let fahrenheitInput = document.querySelector("#Fahrenheit > input");
let kelvinInput = document.querySelector("#Kelvin > input");

let button = document.querySelector(".clear");

function roundNumber(number) {
  return Math.round(number * 100) / 100;
}

celsiusInput.addEventListener("input", function () {
  let cTemp = parseFloat(celsiusInput.value);
  let kTemp = cTemp + 273.15;
  let fTemp = cTemp * (9 / 5) + 32;

  fahrenheitInput.value = roundNumber(fTemp);
  kelvinInput.value = roundNumber(kTemp);
});

fahrenheitInput.addEventListener("input", function () {
  let fTemp = parseFloat(fahrenheitInput.value);
  let kTemp = (fTemp - 32) * (5 / 9) + 273.15;
  let cTemp = (fTemp - 32) * (5 / 9);

  celsiusInput.value = roundNumber(cTemp);
  kelvinInput.value = roundNumber(kTemp);
});

kelvinInput.addEventListener("input", function () {
  let kTemp = parseFloat(kelvinInput.value);
  let fTemp = (kTemp - 273.15) * (9 / 5) + 32;
  let cTemp = kTemp - 273.15;

  celsiusInput.value = roundNumber(cTemp);
  fahrenheitInput.value = roundNumber(fTemp);
});

button.addEventListener("click", () => {
  celsiusInput.value = "";
  fahrenheitInput.value = "";
  kelvinInput.value = "";
});
