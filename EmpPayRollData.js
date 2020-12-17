//UC14-Validating all employee details using regex pattern.
class EmployeePayrollData {

    //constructor
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.date = params[4];
    }

    //getter & setter
    get id() {
        return this._id;
    }
    set id(Id) {
        let i = parseInt(Id);
        let idRegex = RegExp("^[1-9][0-9]{1,}$");
        try {
            if (idRegex.test(i)) {
                this._id = i;
            } else {
                throw "Invalid ID";
            }
        } catch (error) {
            console.error(error);
        }
    }
    get name() {
        return this._name;
    }
    set name(name) {
        let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        try {
            if (nameRegex.test(name)) {
                this._name = name;
            } else {
                throw "Name incorrect";
            }
        } catch (error) {
            console.error(error);
        }
    }
    get salary() {
        return this._salary;
    }
    set salary(salary) {
        let s = parseInt(salary);
        let salaryRegex = RegExp("^[1-9][0-9]*$");
        try {
            if (salaryRegex.test(s)) {
                this._salary = s;
            } else {
                throw "Invalid input for salary";
            }
        } catch (error) {
            console.error(error);
        }
    }
    get gender() {
        return this._gender;
    }
    set gender(gender) {
        let genderRegex = RegExp("[MF]{1}$");
        try {
            if (genderRegex.test(gender)) {
                this._gender = gender;
            } else {
                throw "Invalid input for gender";
            }
        } catch (error) {
            console.error();
        }
    }
    get date() {
        return this._date;
    }
    set date(date) {
        this._date = date;
    }
    toString() {
        const options = { year: "numeric", month: "long", day: "numeric" };
        const empDate =
            this.date === undefined ?
            "undefined" :
            this.date.toLocaleDateString("en-US", options);
        return (
            "\nEmployee ID : " + this.id +
            "\nEmployee Name : " + this.name +
            "\nEmployee Salary : " + this.salary +
            "\nGender : " + this.gender +
            "\nStart Date : " + empDate
        );
    }
}
let employeePayrollData = new EmployeePayrollData(11, "Tushar", 60000, "M");
console.log(employeePayrollData.toString());
try {
    employeePayrollData.name = "tushar";
    console.log(employeePayrollData.toString());
} catch (error) {
    console.error(error);
}
let newEmployeePayrollData = new EmployeePayrollData(0, "Apeksha", 50000, "F", new Date());
console.log(newEmployeePayrollData.toString());
