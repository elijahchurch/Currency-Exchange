// import Galaxycalc from "../src/js/galactic";

// describe("Galaxycalc object and its methods", () => {

//     test("it should create a calculator object that contains the user current age", () => {
//         newUser = new Galaxycalc(32);
//         expect(newUser.earthAge).toEqual(32);
//         expect(newUser.mercuryAge).toEqual(0);
//         expect(newUser.venusAge).toEqual(0);
//         expect(newUser.marsAge).toEqual(0);
//         expect(newUser.jupiterAge).toEqual(0);
//         expect(newUser.earthPassage).toEqual("");
//         expect(newUser.mercuryPassage).toEqual("");
//         expect(newUser.venusPassage).toEqual("");
//         expect(newUser.marsPassage).toEqual("");
//         expect(newUser.jupiterPassage).toEqual("");
//     });

import calculateConversion from "../src/js/calculator";

describe("calulateConversion function", () => {

    test("It should perform a basic multiplication", () => {
        let calculation = calculateConversion(10, 1.5);
        expect(calculation).toEqual(15);
    })
})
