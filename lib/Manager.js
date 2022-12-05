const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);
        this.officeNum = officeNum;
    }

    //overrides its superclass to give 'Manager'
    getRole() {
        return 'Manager';
    }

    getOffice() {
        return this.officeNum;
    }
}

module.exports = Manager;