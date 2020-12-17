//UC11-Performing Arrow functions on object created.
const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;




function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_FULL_TIME:
            console.log("Employee is Present");
            return FULL_TIME_HOURS;
        case IS_PART_TIME:
            console.log("Employee is Present");
            return PART_TIME_HOURS;
        default:
            console.log("Employee is Abscent");
            return 0;
    }
}
let empHrs = 0;
empCheck = Math.floor(Math.random() * 10) % 3;

function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}



//UC10-Object creation
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyHrsAndWageArr = new Array();
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyHrsAndWageArr.push({
        dailyNum: totalWorkingDays,
        dailyHours: empHrs,
        dailyWage: calcDailyWage(empHrs),
        toString() {
            return '\nDay: ' + this.dailyNum + '   Working Hours is: ' + this.dailyHours +
                '   Wage Earned : ' + this.dailyWage
        },
    });

}
console.log("\nUC10- Showing daily hours worked and wage earned : " + empDailyHrsAndWageArr);

//UC_11A - UC_11D
let totalWage = empDailyHrsAndWageArr
    .filter((dailyHrsAndWage) => dailyHrsAndWage.dailyWage > 0)
    .reduce((totalWage, dailyHrsAndWage) => (totalWage += dailyHrsAndWage.dailyWage), 0);

let totalHour = empDailyHrsAndWageArr
    .filter((dailyHrsAndWage) => dailyHrsAndWage.dailyWage > 0)
    .reduce((totalHour, dailyHrsAndWage) => (totalHour += dailyHrsAndWage.dailyHours), 0);
console.log("\nUC_11A   Total Hours: " + totalHour + "   Total Wages:" + totalWage);

process.stdout.write("\nUC_11B Logging Full Work Days");
empDailyHrsAndWageArr
    .filter((dailyHrsAndWage) => dailyHrsAndWage.dailyHours == 8)
    .forEach((dailyHrsAndWage) => process.stdout.write(dailyHrsAndWage.toString()));

let partWorkingDayStrArr = empDailyHrsAndWageArr
    .filter((dailyHrsAndWage) => dailyHrsAndWage.dailyHours == 4)
    .map((dailyHrsAndWage) => dailyHrsAndWage.toString());
console.log("\n\nUC_11C PartWorkingDayString" + partWorkingDayStrArr);

let nonWorkingDayNums = empDailyHrsAndWageArr
    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0)
    .map(dailyHrsAndWage => dailyHrsAndWage.dayNum);
console.log("\nUC_11D NonWorkingDayNums : " + nonWorkingDayNums);
