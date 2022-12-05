const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('Initialization', () => {
        //Success case
        it('Should create an Engineer object with its four fields, appropriately accessible', () => {
            const testObj = {
                name : 'Machias',
                id : '22',
                email : 'machias@ost.net',
                gitHub : 'betterthanjusis'
            };

            const obj = new Engineer('Machias', '22', 'machias@ost.net', 'betterthanjusis');

            expect(obj.name).toEqual(testObj.name);
            expect(obj.id).toEqual(testObj.id);
            expect(obj.email).toEqual(testObj.email);
            expect(obj.gitHub).toEqual(testObj.gitHub);
        });
    
        // Insufficient args case
        it('Should leave gitHub field undefined when only provided three args upon initialization', () => {
            const obj = new Engineer('Machias', '22', 'machias@ost.net');
    
            expect(obj.gitHub).toEqual(undefined);
        });
    });

    describe('Inherited methods', () => {
        it('Should successfully access and use the three methods inherited from superclass - getName, getId, getEmail', () => {
            const testObj = {
                name : 'Machias',
                id : '22',
                email : 'machias@ost.net',
                gitHub : 'betterthanjusis'
            };

            const obj = new Engineer('Machias', '22', 'machias@ost.net', 'betterthanjusis');

            expect(obj.getName()).toEqual(testObj.name);
            expect(obj.getId()).toEqual(testObj.id);
            expect(obj.getEmail()).toEqual(testObj.email);
        });
    });

    describe('getRole', () => {
        it('Should return the role of the object (Engineer)', () => {
            const obj = new Engineer('Tita', '51', 'tita@zcf.net', 'heartagate');

            expect(obj.getRole()).toEqual('Engineer');
        });
    });

    describe('getGitHub', () => {
        it('Should return the gitHub username of the object', () => {
            const testGitHub = 'heartagate';

            const obj = new Engineer('Tita', '51', 'tita@zcf.net', 'heartagate');

            expect(obj.getGitHub()).toEqual(testGitHub);
        });
    });
});