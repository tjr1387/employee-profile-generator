const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('Initialization', () => {
        //Success case
        it('Should create a Manager object with its four fields, appropriately accessible', () => {
            const testObj = {
                name : 'Jusis',
                id : '11',
                email : 'jusis@bareahard.net',
                officeNum : '1'
            };

            const obj = new Manager('Jusis', '11', 'jusis@bareahard.net', '1');

            expect(obj.name).toEqual(testObj.name);
            expect(obj.id).toEqual(testObj.id);
            expect(obj.email).toEqual(testObj.email);
            expect(obj.officeNum).toEqual(testObj.officeNum);
        });
    
        // Insufficient args case
        it('Should leave officeNum field undefined when only provided three args upon initialization', () => {
            const obj = new Manager('Jusis', '11', 'jusis@bareahard.net');
    
            expect(obj.officeNum).toEqual(undefined);
        });
    });

    describe('getRole', () => {
        it('Should return the role of the object (Manager)', () => {
            const obj = new Manager('Joshua', '13', 'joshua@liberl.net', '9');

            expect(obj.getRole()).toEqual('Manager');
        });
    });

    describe('getOffice', () => {
        it('Should return the officeNum field of the object', () => {
            const testOfficeNum = '9';

            const obj = new Manager('Joshua', '13', 'joshua@liberl.net', '9');

            expect(obj.getOffice()).toEqual(testOfficeNum);
        });
    });
});