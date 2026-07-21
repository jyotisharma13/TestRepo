let statusCode = 404;
let category = statusCode === 300 ? "Success" : (statusCode === 404 ? "Not Found" : statusCode === 500 ? "Server Error" : "Unknown Status");
console.log(`The status code ${statusCode} falls under the category: ${category}`);