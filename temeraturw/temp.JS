function celsiusToFahrenheit(c) { return (c * 9/5) + 32; }
function fahrenheitToCelsius(f) { return (f - 32) * 5/9; }
function kelvinToCelsius(k) { return k - 273.15; }
function convert() {
 const temp = parseFloat(document.getElementById("temp").value);
 const unit = document.getElementById("unit").value;
 const result = document.getElementById("result");
 if (isNaN(temp)) {
 result.textContent = "Please enter a valid number.";
 return;
 }
 let converted, label;
 switch (unit) {
 case "C": converted = celsiusToFahrenheit(temp); label = "°F"; break;
 case "F": converted = fahrenheitToCelsius(temp); label = "°C"; break;
 case "K": converted = kelvinToCelsius(temp); label = "°C"; break;
 }
 result.textContent = `Result: ${converted.toFixed(2)} ${label}`;
}