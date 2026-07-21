let responseTime = 100;
let sla = 1000;
let testResult = responseTime <= sla ? "within SLA" : " SLA Breached";
console.log(`Response: ${responseTime} ms - ${testResult}`);