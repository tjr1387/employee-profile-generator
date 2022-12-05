const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
    }

    //overrides its superclass to give 'Engineer'
    getRole() {
        return 'Engineer'
    }

    getGitHub() {
        return this.gitHub;
    }
}

module.exports = Engineer;