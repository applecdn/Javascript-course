// let js = 'amazing';
// if (js === 'amazing') alert('javaScript is Fun!');

// 40 - 8 + 23 - 10;
// console.log(40 - 8 + 23 - 10);

// console.log("Jonas");
// console.log(23);

// let firstName = "Matilda";

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let Person = 'jonas'
// let PI = 3.14159;

// let myFirstJob = 'Programmer';
// let myCurrentJob = 'Teacher';

// let job1 = 'programmer';
// let job2 = 'teacher';

// console.log(myFirstJob);

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

// javascriptIsFun = 'YES!';
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);


// let age = 30;
// age = 31;

// console.log(age);

// const birthYear = 1991;
// birthYear = 1990;
// const job;

// var  job = 'pogrammer';
// job = 'teacher'

// LastName = 'Schmedtmann';
// console.log(LastName);







// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// const firstName = 'Jonas';
// const lastName = 'Schmedtmann';
// console.log(firstName + ' ' + lastName);

// let x = 10 + 5;
// x += 10;
// x *= 4;
// x++;
// x--;
// x--;
// console.log(x);

// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);

// const now = 2037
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// console.log(25 - 10 - 5);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x,y);

// const averageAge = ageJonas + ageSarah / 2;
// console.log(ageJonas, ageSarah, averageAge);

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;


// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / heightJohn ** 2;
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI);

// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm" + firstName + ', a' + (year - birthYear) + 'years old' + job + '!';
// const jonasNew = `I'm ${firstName} a ${year - birthYear} years old ${job} !`;
// console.log(jonasNew);

// console.log(`Just a regular string ...`);
// console.log('String with \n\
//     multiple \n\
//     lines');
// console.log(`String with
// multiple
// lines`);

// const age = 15;

// if (age >= 18) {
//     console.log('Sarah can start driving license');
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years:)`);
// }

// const birthYear = 1991;
// if (birthYear <= 2000) {
//     var century = 20;
// } else {
//     var century = 21;
// }
// console.log(century);




// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;


// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / heightJohn ** 2;
// console.log(`BMIMark ${BMIMark}, BMIJohn ${BMIJohn}`);

// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
// } else {
//     console.log(`John's BMI (${BMIJohn}) is higher than Mark's! (${BMIMark})`)
// }

// const inputYear = '1991';

// console.log(Number(inputYear));
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' * '2');

// let n = '1' + 1;
// n = n - 1;
// console.log(n );


// 5 falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 0;
// if (money) {
//     console.log("Don't spend it all");
// } else {
//     console.log("You should get a job!");
// }

// const age = '18';
// if (age === 18) console.log("You should became an adult:D")

// if (age == 18) console.log("You should became an adult:D(lose)")

// const favourit = Number(prompt("What's your favourite number?"));
// console.log(favourit);
// console.log(typeof favourit);

// if (favourit === 23) {
//     console.log('Coll! 23 is an amazing number!');
// } else if (favourit === 7) {
//     console.log('Coll! 7 is an amazing number!');
// } else if (favourit === 9) {
//     console.log('Coll! 9 is an amazing number!');
// } else {
//     console.log('Number is not 23 or 7 or 9');
// }

// if (favourit !== 23) console.log('Why not 23?');

const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);