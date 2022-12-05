const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('Initialization', () => {
        //Success case
        it('Should create an Intern object with its four fields, appropriately accessible', () => {
            const testObj = {
                name : 'Musse',
                id : '17',
                email : 'musse@ordis.net',
                school : 'Thors Branch Campus'
            };

            const obj = new Intern('Musse', '17', 'musse@ordis.net', 'Thors Branch Campus');

            expect(obj.name).toEqual(testObj.name);
            expect(obj.id).toEqual(testObj.id);
            expect(obj.email).toEqual(testObj.email);
            expect(obj.school).toEqual(testObj.school);
        });
    
        // Insufficient args case
        it('Should leave school field undefined when only provided three args upon initialization', () => {
            const obj = new Intern('Musse', '17', 'musse@ordis.net');
    
            expect(obj.school).toEqual(undefined);
        });
    });

    describe('Inherited methods', () => {
        it('Should successfully access and use the three methods inherited from superclass - getName, getId, getEmail', () => {
            const testObj = {
                name : 'Musse',
                id : '17',
                email : 'musse@ordis.net',
                school : 'Thors Branch Campus'
            };

            const obj = new Intern('Musse', '17', 'musse@ordis.net', 'Thors Branch Campus');

            expect(obj.getName()).toEqual(testObj.name);
            expect(obj.getId()).toEqual(testObj.id);
            expect(obj.getEmail()).toEqual(testObj.email);
        });
    });

    describe('getRole', () => {
        it('Should return the role of the object (Intern)', () => {
            const obj = new Intern('Altina', '0', 'altina@homunculus.net', 'Black Workshop');

            expect(obj.getRole()).toEqual('Intern');
        });
    });

    describe('getSchool', () => {
        it('Should return the school of the object', () => {
            const testSchool = 'Black Workshop';

            const obj = new Intern('Altina', '0', 'altina@homunculus.net', 'Black Workshop');

            expect(obj.getSchool()).toEqual(testSchool);
        });
    });
});