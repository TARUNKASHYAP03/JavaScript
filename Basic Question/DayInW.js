let day=new Date().getDay() + 1; // getDay() returns 0 for Sunday, so we add 1 to make it 1 for Monday

switch (day) {
    case 1:
        console.log("Today is","Monday");
        break;
    case 2:
        console.log("Today is","Tuesday");
        break;
    case 3:
        console.log("Today is","Wednesday");
        break;
    case 4:
        console.log("Today is","Thursday");
        break;
    case 5:
        console.log("Today is","Friday");
        break;
    case 6:
        console.log("Today is","Saturday");
        break;
    case 7:
        console.log("Today is ","Sunday");
        break;  
    default:
        break;
}