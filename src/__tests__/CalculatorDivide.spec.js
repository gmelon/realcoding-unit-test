import Calculator from "../js/calculator/Calculator";

describe("사칙연산 나눗셈 테스트.", () => {
    test("6에서 3을 나누면 2다.", () => {
        const calculator = new Calculator();
        expect(calculator.divide(6, 3)).toEqual(2);
    });

    test("10에서 5을 나누면 2다.", () => {
        const calculator = new Calculator();
        expect(calculator.divide(10, 5)).toEqual(2);
    });

    test("100에서 10을 나누면 10이다.", () => {
        const calculator = new Calculator();
        expect(calculator.divide(100, 10)).toEqual(10);
    });

    test("분모가 0이면 나눌 수 없다.", () => {
        const calculator = new Calculator();
        expect(calculator.divide(10, 0)).toEqual();
    });
});