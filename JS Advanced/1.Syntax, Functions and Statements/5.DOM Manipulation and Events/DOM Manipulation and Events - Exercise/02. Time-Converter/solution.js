function attachEventsListeners() {
let daysInput = document.getElementById("days");
let hoursInput = document.getElementById('hours');
let minuteInput = document.getElementById('minutes');
let secondsInput = document.getElementById('seconds');

let buttonDays = document.getElementById('daysBtn');
let buttonHours = document.getElementById('hoursBtn');
let minuteButton = document.getElementById('minutesBtn');
let secondsButton = document.getElementById('secondsBtn');

buttonDays.addEventListener('click',function(){
    let days = daysInput.value;
   hoursInput.value = days * 24;
   minuteInput.value = days * 1440;
   secondsInput.value = days * 86400;

})

buttonHours.addEventListener('click',function(){
    
    let hours = hoursInput.value;
    daysInput.value = hours / 24;
    minuteInput.value = hours * 60;
    secondsInput.value = hours * 3600;
 
 })

 minuteButton.addEventListener('click',function(){
    
    let minutes = minuteInput.value;
    daysInput.value = minutes / 60 / 24;
    hoursInput.value = minutes / 60;
    secondsInput.value = minutes * 60;
 
 })

secondsButton.addEventListener('click',function(){
    
    let seconds = secondsInput.value;
    daysInput.value = seconds / 60 / 60 / 24;
    hoursInput.value = seconds / 60 / 60;
    minuteInput.value = seconds / 60;
 
 })
}