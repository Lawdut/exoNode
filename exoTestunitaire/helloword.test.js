const helloword = require ('./helloword.js')

describe('ma suite de tests', () => {
    test('mon premier test', () => {
        expect(true).toBe(true)
    })
    test('mon 2 ème test', () => {
        const fonctionToTest = helloword;
        expect(fonctionToTest).toBe(true)
    })
})