module.exports = class Employee {
    constructor(id, first_name, last_name, role_id, manager_id) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.role_id = role_id;
        this.manager_id = manager_id;
    }
    get getId() {
        return this.id;
    }
    get getFirst_name() {
        return this.first_name;
    }
    get getLast_name() {
        return this.last_name;
    }
    get getRole_id() {
        return role_id;
    }
    get getManager_id() {
        return this.manager_id;
    }
};
