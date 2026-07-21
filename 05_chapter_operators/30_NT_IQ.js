let temp  = 25;
let feel =(temp>=40) ? "very Hot" : (temp>=30) ? "Hot" : (temp>=20) ? "Warm" : (temp>=10) ? "Cool" : (temp>=0) ? "Cold" : "Freezing";
console.log(`The temperature is ${temp}°C and it feels ${feel}.`);