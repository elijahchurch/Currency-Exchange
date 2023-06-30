import calculateConversion from "../src/js/calculator";

describe("calulateConversion function", () => {

    test("It should perform a basic multiplication", () => {
        let calculation = calculateConversion(10, 1.5);
        expect(calculation).toEqual("15.00");
    });

    test("It should return a result to the hundreth decimal point as a string", () => {
        let calculation = calculateConversion(20, 1.4817);
        expect(calculation).toEqual("29.63");
    });
})
