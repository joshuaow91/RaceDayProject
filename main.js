const earlyReg = true;

const runnerAge = 18;

let raceNumber = Math.floor(Math.random() * 1000);

if (earlyReg === true && runnerAge > 18) {
    raceNumber + 1000;
}

if (runnerAge > 18 && earlyReg === true) {
    console.log(`You are racing at 9:30 am with the number ${raceNumber + 1000}`);
} else if (runnerAge > 18 && earlyReg === false) {
    console.log(`You are racing at 11:00 am with the number ${raceNumber}`);
} else if (runnerAge < 18 ) {
    console.log(`You are racing at 12:30 pm with the number ${raceNumber}`);
} else (runnerAge === 18) {
    console.log(`Race time unknown due to no mention in project directions, you number is ${raceNumber}`);
}
