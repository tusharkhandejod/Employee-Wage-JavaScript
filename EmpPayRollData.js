//UC13- Employee name validation is added using regex pattern
class EmployeePayrollData {

    //property
    id;
    salary;
    gender;
    startDate;


    //constructor
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    //Getter & Setter methods
    get name() {
        return this._name;
    }
    set name(name) {
        let nameRegex = RegExp("^[A-Z]{1}[a-z]{3,}$");
        if (nameRegex.test(name)) this._name = name;
        else throw "Name is incorrect";
    }

    tostring() {
        const options = { year: "numeric", month: "long", day: "numeric" };
        const empDate =
            this.startDate == undefined ?
            "undefined" :
            this.startDate.toLocaleDateString("en-US", options);
        return (
            "\nEmployee ID : " + this.id +
            "\nEmployee Name : " + this.name +
            "\nEmployee Salary : " + this.salary +
            "\nGender : " + this.gender +
            "\nStart Date : " + this.startDate
        );
    }
}

try {
    let employeePayrollData = new EmployeePayrollData(1000, "Tushar", 60000);
    console.log(employeePayrollData.tostring());
    employeePayrollData.name = "Yash";
    employeePayrollData.id = 1001;
    employeePayrollData.salary = 100000;
    console.log(employeePayrollData.tostring());
    let newEmployeePayrollData = new EmployeePayrollData(1003, "Apeksha", 60000, "F", new Date());
    console.log(newEmployeePayrollData.tostring());


} catch (e) {
    console.log(e);
}
