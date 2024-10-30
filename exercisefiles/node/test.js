const assert = require('assert');
const http = require('http');
const server = require('./nodeserver');

describe('Node Server', () => {
    it('should return "key not passed" if key is not passed', (done) => {
        http
        .get('http://localhost:3000/get' , (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                assert.equal(data, 'key not passed');
                done();
            });
        });
    });

    it('should return "hello world" if key is equal to "world"', (done) => {
        http
        .get('http://localhost:3000/get?key=world' , (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                assert.equal(data, 'hello world');
                done();
            });
        });
    });

    it('should return "valid" if phone number is valid', (done) => {
        http
        .get('http://localhost:3000/Validatephonenumber?phoneNumber=+34666777888' , (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                assert.equal(data, 'valid');
                done();
            });
        });
    });

    it('should return "invalid" if phone number is invalid', (done) => {
        http
        .get('http://localhost:3000/Validatephonenumber?phoneNumber=123456789' , (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                assert.equal(data, 'invalid');
                done();
            });
        });
    });

    it('should return "valid" if DNI is valid', (done) => {
        http
        .get('http://localhost:3000/ValidateSpanishDNI?dni=12345678Z' , (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                assert.equal(data, 'valid');
                done();
            });
        });
    });

    it('should return "invalid" if DNI is invalid', (done) => {
        http
        .get('http://localhost:3000/ValidateSpanishDNI?dni=12345678A' , (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                assert.equal(data, 'invalid');
                done();
            });
        });
    });

    it('should return "#FF0000" if color is red', (done) => {
        http
        .get('http://localhost:3000/ReturnColorCode?color=red' , (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                assert.equal(data, '#FF0000');
                done();
            });
        });
    });

    it('should return the number of days between two dates', (done) => {
        http
        .get('http://localhost:3000/DaysBetweenDates?date1=2023-01-01&date2=2023-01-10' , (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                assert.equal(data, '9 days');
                done();
            });
        });
    });
});
