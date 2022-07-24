module.exports = class Department {
    constructor(id, department) {
        this.id = id;
        this.department = department;
    }
    get getId() {
        return this.id;
    }
    get getDepartment() {
        return this.department;
    }
};