let hr = document.getElementById('hr');
let mint = document.getElementById('mint');
let sec = document.getElementById('sec');
let ul = document.getElementById('ul');
let am = document.getElementById('am');
let month = document.getElementById('month');


function timeClock() {
    let monthNames = ["January", "February", "March", "April","May", "June", "July", "August", "September", "October", "November", "December"];
    let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];
    let time = new Date();
    let tday = time.getDay();
    let mont = time.getMonth();
    let yr = time.getFullYear();
    let hr = time.getHours();
    let mint = time.getMinutes();
    let sec = time.getSeconds();
    let formaterhr = hr >= 10 ? hr : '0'+hr;
    let day = formaterhr > 12 ? formaterhr - 12 :  formaterhr;
    let pm = day < 12 ? 'AM' : 'PM';
    let formatermin = mint >= 10 ? mint : '0'+mint;
    let formatersec = sec >= 10 ? sec : '0'+sec;
    ul.innerHTML = day + ' : ' + formatermin + ' : ' + formatersec + ' '+ ' '+ pm;
    month.innerHTML =  dayNames[tday] + ', ' + monthNames[mont] + ', ' + yr 
}
let int =  setInterval(timeClock)
