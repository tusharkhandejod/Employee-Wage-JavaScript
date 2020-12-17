//UC3 -->  write a function for daily working hours 
const IS_ABSENT = 0;
const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const WAGE_PER_HR = 20;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;

function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_ABSENT:
            return 0;

        default:
            console.log("This is default case.");;
    }
}
let empHrs = 0;
let empCheck = Math.floor(Math.random() * 10) % 3;
empHrs = getWorkingHours(empCheck);
let dailyEmpWage = empHrs * WAGE_PER_HR;
console.log("Daily Emp Wage : " + dailyEmpWage);

