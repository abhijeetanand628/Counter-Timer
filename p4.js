const daysElement = document.querySelector(".Days");
const hoursElement = document.querySelector(".Hours");
const minutesElement = document.querySelector(".Minutes");
const secondsElement = document.querySelector(".Seconds");
const heading = document.querySelector("h1");
const counterTimer =  document.querySelector(".counterTimer");

//// Converting second,minute,hour,day in miliseconds
const second = 1000,
 minute = 60 * second,
 hour = 60 * minute,
 day = 24 * hour;

const timerFunction = () => {

    //// Generating Current Date in mm/dd/yyyy format

    let now = new Date(),
    dd = String(now.getDate()).padStart(2,"0"),
    mm = String(now.getMonth() + 1).padStart(2,"0"),  // we used +1 here because index starts from 0 in JS so jan = 0
    yyyy = now.getFullYear();
    

    //// Taking Target Date from User
    const enteredDay = prompt("Enter Day").padStart(2,"0");
    const enteredMonth = prompt("Enter Month").padStart(2,"0");
    
    now = `${mm}/${dd}/${yyyy}`;  // Format
    
    let targetDate = `${enteredMonth}/${enteredDay}/${yyyy}`;
 //// Checking if Target date is for next year
    if ( now > targetDate) {
        targetDate =`${enteredMonth}/${enteredDay}/${yyyy + 1}`;
    }

    const intervalId = setInterval(() => {
        //// Converting Target Date in ms
        const timer = new Date(targetDate).getTime();  // .getTime function is used to convert the date in miliseconds
        //// Taking Current Date in ms
        const today = new Date().getTime(); // .getTime function is used to convert the date in miliseconds
//// Finding Difference b/w target date and today's date
    const diff = timer - today;
   
   //// Finding Left Days,hours,minutes and seconds
    const leftDay = Math.floor(diff / day);
    const leftHour = Math.floor((diff % day) / hour);
    const leftMinute = Math.floor((diff % hour) / minute);
    const leftSecond = Math.floor((diff % minute) / second);
   //// Showing Timer in DOM 
    daysElement.innerText = leftDay;  
    hoursElement.innerText = leftHour;  // These are used to change the time of the HTML text
    minutesElement.innerText = leftMinute;
    secondsElement.innerText = leftSecond;
   //// Stop Set Interval after reaching the target time
   if(diff < 0) {
    counterTimer.style.display = "none";
    heading.innerText = "Time's Up";
    clearInterval(intervalId);
   }
    }, 0)
};

timerFunction();