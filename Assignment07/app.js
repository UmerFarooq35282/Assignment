let minute = document.getElementById('minute');
let second = document.getElementById('second');
let hour = document.getElementById('hour');
let startBtn = document.getElementById('startBtn');
let stopBtn = document.getElementById('stopBtn');
let myTimer;

let halfMinuteAddedBtn = document.getElementById('halfMinuteAdded')
let oneMinuteAddedBtn = document.getElementById('oneMinuteAdded')
let fiveMinuteAddedBtn = document.getElementById('fiveMinuteAdded')

halfMinuteAddedBtn.addEventListener('click' , () => {
    if(Number(second.innerText) < 30){
        let updatedValue = Number(second.innerText) + 30;
        second.innerText = updatedValue;
    }else{
        second.innerText = '00';
       if(Number(minute.innerText) < 59){
         minute.innerText = (Number(minute.innerText) + 1).toString()
       }else{
        minute.innerText = '00';
        hour.innerText = (Number(hour.innerText) + 1).toString() 
       }
    }
})

oneMinuteAddedBtn.addEventListener('click' , () => {
    if(Number(minute.innerText) < 59){
        minute.innerText = (Number(minute.innerText) + 1).toString();
    }else{
        minute.innerText = '00';
        hour.innerText = (Number(hour.innerText) + 1).toString() 
    }
})
fiveMinuteAddedBtn.addEventListener('click' , () => {
    if(Number(minute.innerText) < 55){
        minute.innerText = (Number(minute.innerText) + 5).toString();
    }else{
        minute.innerText = '00'
        hour.innerText = (Number(hour.innerText) + 1).toString() 
    }
})

startBtn.addEventListener('click' , () => {
    let currentTime = Number(second.innerText);
    let reducer = 0;
    if(currentTime === 0){
        reducer = 59;
        second.innerText = (reducer).toString()
        minute.innerText = (Number(minute.innerText) - 1).toString()
        myTimer = setInterval(() => {
            reducer--;
            second.innerText = (reducer).toString()
            if(reducer === 0){
                reducer = 60;
            }
        } , 1000)
    }else{
        reducer = Number(second.innerText);
        myTimer = setInterval(() => {
            reducer--;
            second.innerText = (reducer).toString()
            if(reducer === 0){
                if(Number(minute.innerText) !== 0){
                    minute.innerText = (Number(minute.innerText) - 1).toString()
                    reducer = 60;
                }
            }
        } , 1000)
    }
})

stopBtn.addEventListener('click' , () => {
    clearInterval(myTimer);
})