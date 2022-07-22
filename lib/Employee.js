module.exports = class Employee {
    constructor(id, role, department, salary) {
        this.id = id;
        this.role = role;
        this.department = department;
        this.salary = salary;
    }
    get getId() {
        return this.id;
    }
    get getRole() {
        return this.role;
    }
    get getDepartment() {
        return department;
    }
    get getSalary() {
        return this.salary;
    }
}
