//import { MyMath } from './mymath.js';
const MyMath = require ('./mymath.js')

describe ('Liste des tests de MyMath : ', () => {
    describe ('Méthode pour additionner', () => {
        it ('Est-ce que MyMath a une méthode nommée sum' , () => {
            expect(MyMath.sum).toBeDefined();
        });
        it ('Est-ce que MyMath addtionne 1 + 1 et que c est égale à 2)', () => {
            expect(MyMath.sum(1,1)).toBe(2);
        });
    });
    describe ('Méthode pour soustraire', () => {
        it('est-ce que MyMath à une méthode nommée sub', () => {
            expect(MyMath.subs(1,1)).toBe(0);
        })
    })
})