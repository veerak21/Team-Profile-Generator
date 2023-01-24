// My Attempt
const Intern = require("../lib/Intern");

test("Can create school.", () => {
    const testSchool = "School Name";
    const employeeInstance = new Intern("Carol", 2, "carol@gmail.com", testSchool);
    expect(employeeInstance.school).toEqual(testSchool);
});

test("Testing officeNumber will return office number.", () => {
    const testSchool = "School Name";
    const employeeInstance = new Intern("Carol", 2, "carol@gmail.com", testSchool);
    expect(employeeInstance.getSchool()).toEqual(testSchool);
});

test("Testing role.", () => {
    const returnValue = "Intern";
    const employeeInstance = new Intern("Carol", 2, "carol@gmail.com", "School Name");
    expect(employeeInstance.getRole()).toEqual(returnValue);
});