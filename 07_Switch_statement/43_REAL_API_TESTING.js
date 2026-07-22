let responseCode = 404;
switch(responseCode){
    case 200:
        console.log("Success");
        break;
    case 404:
        console.log("Not Found");
        break;
    case 500:
        console.log("Server Error");
        break;
    default:
        console.log("Unknown Status Code");
}