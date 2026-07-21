let responseTime = 100;
let sla = 1000;// service level agreement
let testResult = responseTime <= sla ? "within SLA" : " SLA Breached";
console.log(`Response: ${responseTime} ms - ${testResult}`);
