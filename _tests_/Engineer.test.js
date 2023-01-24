//Importing Engineer constructor
const Engineer = require("../lib/Engineer");

//Creating Engineer constructor with properties
test("Can create a github.", () => {
    const testGithub = "Carol";
    const employeeInstance = new Engineer("Carol", 2, "carol@gmail.com", testGithub);
    expect(employeeInstance.github).toEqual(testGithub);
});

//Testing methods
test("Testing getGithub will return github.", () => {
    const testGithub = "Carol";
    const employeeInstance = new Engineer("Carol", 2, "carol@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toEqual(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Carol", 2, "carol@gmail.com", "Carol");
    expect(employeeInstance.getRole()).toEqual(returnValue);
});