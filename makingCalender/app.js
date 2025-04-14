// let days = document.getElementById('days');
// let hours = document.getElementById('hours');
// let minutes = document.getElementById('minutes');
// let seconds = document.getElementById('seconds');

// let myLocalDate = new Date();

// function setTimeForCountdownd(){
//     let startRamadan = 28;
//     let currentDate = myLocalDate.getDate()

//     days.innerText = startRamadan - currentDate;
//     hours.innerText = currentDate * 24;
// }

// setTimeForCountdownd()

// let myLocalDate = new Date();
// let setAmPm = ''
// let hour;
// let minutes;
// let seconds;

// function makeClock(){
//     let minutes = myLocalDate.getMinutes();
//     let seconds = myLocalDate.getSeconds();
//     let hour;

//     if(myLocalDate.getHours() > 12){
//         hour = myLocalDate.getHours() - 12;
//         setAmPm = 'PM'
//     }else if(myLocalDate.getHours() < 10){
//         hour = "0" + myLocalDate.getHours();
//         setAmPm = "AM"
//     }else{
//         hour = myLocalDate.getHours();
//         setAmPm = "AM"
//     }
//     console.log(`${hour}:${minutes}:${seconds} ${setAmPm}`)
// }

// setInterval(() => {
//     makeClock()
// },1000)

// setInterval(makeClock, 1000);

// setInterval(() => {
    
// },1000)

// let localdate;
// setInterval(()=> {

//     localdate = myLocalDate.toLocaleTimeString()
//     document.getElementById('demo').innerHTML = localdate;
// },1000)

let startRamdan = new Date("2025-Dec-01").getMonth();

console.log(startRamdan);