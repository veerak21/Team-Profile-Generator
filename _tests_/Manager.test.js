// My Attempt
const Manager = require("../lib/Manager");

test("Can create an office number.", () => {
    const testOfficeNumber = 2;
    const employeeInstance = new Manager("Carol", 2, "carol@gmail.com", testOfficeNumber);
    expect(employeeInstance.officeNumber).toEqual(testOfficeNumber);
});

test("Testing officeNumber will return office number.", () => {
    const testOfficeNumber = 2;
    const employeeInstance = new Manager("Carol", 2, "carol@gmail.com", testOfficeNumber);
    expect(employeeInstance.getOfficeNumber()).toEqual(testOfficeNumber);
});

test("Testing role.", () => {
    const returnValue = "Manager";
    const employeeInstance = new Manager("Carol", 2, "carol@gmail.com", 2);
    expect(employeeInstance.getRole()).toEqual(returnValue);
});