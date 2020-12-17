class EmployeePayrollData {
    //property
    id;
    salary;
   

    //constructor
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    // Getter & Setter 
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }

    tostring() {
        return ("Employee ID: " + this.id + "  Employee Name: " + this.name + "  Employee Salary: " + this.salary);
    }
}
let employeePayrollData = new EmployeePayrollData(1, "Tushar", 60000);
console.log(employeePayrollData.tostring());
employeePayrollData.name = "Yash";
employeePayrollData.id = 2;
employeePayrollData.salary = 100000;
console.log(employeePayrollData.tostring());
