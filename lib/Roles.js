module.exports = class Roles {
    constructor(id, role, salary, department_id) {
        this.id = id;
        this.role = role;
        this.salary = salary;
        this.department_id = department_id;
    }
    get getId() {
        return this.id;
    }
    get getRole() {
        return this.role;
    }
    get getSalary() {
        return this.salary;
    }
    get getDepartment_id() {
        return department_id;
    }
};