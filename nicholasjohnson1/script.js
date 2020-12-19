/* Hello JavaScript, you Handsome Little Thing */

// 1
alert('Hello world');

// 2
let daysInYear = 365.25;
let daysInWeek = 7;
let yearsInLifetime = 80;

let averageOfWeeks = (daysInYear * yearsInLifetime)/daysInWeek; // ????
console.log('Average Of Weeks:', averageOfWeeks);

//2
const greeting  = 'hello';
const name = 'world';
alert(greeting + ' ' + name);
let result = greeting + ' ' + name;
let reg = result.replaceAll('l', '1').replaceAll('o', '0');
console.log(reg);
let reversedStr = reg.split('').reverse().join('');
console.log(reversedStr);

//3
let hour = new Date().getHours();
console.log(hour);
if(hour >= 6 && hour <= 12) {
    console.log("It's the morning");
} else if(hour > 12 && hour <= 17) {
    console.log("It's the afternoon");
} else {
    console.log("It's the night");
}

//4
let num = 10;
for(let i = num; i >= 0; i--) {
    if(i == 0) {
        alert("Blast Off!");
    } else {
        alert(i);
    }
}



    

