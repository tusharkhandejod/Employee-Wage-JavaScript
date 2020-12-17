console.log("Welcome to Employee Wage program using Javascript")

//UC1--> Checking empkoyee is present or absent
{
    const IS_ABSENT = 0;
    const IS_PRESENT = 1;
    let empCheck = Math.floor(Math.random() * 10) % 2;
    if (empCheck == IS_PRESENT) {
        console.log("Employee is present.");
    } else if (empCheck == IS_ABSENT) {
        console.log("Employee is absent.");
    }
}
