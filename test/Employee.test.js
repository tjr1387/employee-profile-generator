const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('Initialization', () => {
        //Success case
        it('Should create an Employee object with its three fields, appropriately accessible', () => {
            const testObj = {
                name : 'Rean',
                id : '2',
                email : 'rean@ymir.net'
            };

            const obj = new Employee('Rean', '2', 'rean@ymir.net');

            expect(obj.name).toEqual(testObj.name);
            expect(obj.id).toEqual(testObj.id);
            expect(obj.email).toEqual(testObj.email);
        });
    
        // Insufficient args case
        it('Should leave email field undefined when only provided two args upon initialization', () => {
            const obj = new Employee('Rean', '2');
    
            expect(obj.email).toEqual(undefined);
        });
    });

    describe('getName', () => {
        it('Should return the name field of the object', () => {
            const testName = 'Estelle';

            const obj = new Employee('Estelle', '4', 'estelle@liberl.net');

            expect(obj.getName()).toEqual(testName);
        });
    });

    describe('getId', () => {
        it('Should return the ID field of the object', () => {
            const testId = '4';

            const obj = new Employee('Estelle', '4', 'estelle@liberl.net');

            expect(obj.getId()).toEqual(testId);
        });
    });

    describe('getEmail', () => {
        it('Should return the email field of the object', () => {
            const testEmail = 'estelle@liberl.net';

            const obj = new Employee('Estelle', '4', 'estelle@liberl.net');

            expect(obj.getEmail()).toEqual(testEmail);
        });
    });

    describe('getRole', () => {
        it('Should return the role of the object (Employee)', () => {
            const obj = new Employee('Estelle', '4', 'estelle@liberl.net');

            expect(obj.getRole()).toEqual('Employee');
        });
    });
});