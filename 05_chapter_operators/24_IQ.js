let environment = "production";
let baseUrl = environment === "production" ? "https://api.example.com" : "https://staging-api.example.com";
console.log(baseUrl);