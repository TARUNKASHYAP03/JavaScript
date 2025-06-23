// let myDate=new Date();

// console.log(myDate); // Current date and time
// console.log(myDate.toString()); // String representation of the date
// console.log(myDate.toDateString()); // Date part only
// console.log(myDate.toTimeString()); // Time part only
// console.log(myDate.toISOString()); // ISO format
// console.log(myDate.toLocaleDateString()); // Local date format
// console.log(myDate.toLocaleTimeString()); // Local time format
// console.log(myDate.getFullYear()); // Get year
// console.log(myDate.getMonth()); // Get month (0-based index)    
// console.log(myDate.getDate()); // Get day of the month
// console.log(myDate.getDay()); // Get day of the week (0 = Sunday)
// console.log(myDate.getHours()); // Get hours
// console.log(myDate.getMinutes()); // Get minutes
// console.log(myDate.getSeconds()); // Get seconds
// console.log(myDate.getMilliseconds()); // Get milliseconds
// console.log(myDate.getTime()); // Get timestamp (milliseconds since epoch)
// console.log(myDate.getTimezoneOffset()); // Get timezone offset in minutes/

let myTimeStamp = Date(); // Get current timestamp
console.log(myTimeStamp); // Date object representing the current date and time

// My system IP Address
console.log(`Current Timestamp: ${myTimeStamp}`); // Display the current timestamp
console.log(`Current Date: ${new Date(myTimeStamp).toLocaleDateString()}`); // Display the current date in local format
console.log(`Current Time: ${new Date(myTimeStamp).toLocaleTimeString()}`); // Display the current time in local format