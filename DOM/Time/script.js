const time=document.querySelector("#time");


setInterval(() => {
    date=new Date();
    time.textContent=date.toLocaleTimeString();
}, 1000);