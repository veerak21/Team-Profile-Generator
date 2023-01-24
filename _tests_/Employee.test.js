// Importing Employee constructor
const Employee = require("../lib/Employee");

// Creating employee constructor with object
test("Can create an new employee.", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toEqual("object");
})

// Testing methods
test("Testing name.", () => {
    const name = "Carol";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toEqual(name);
})

test("Testing ID.", () => {
    const id = 2;
    const employeeInstance = new Employee("Carol", id);
    expect(employeeInstance.id).toEqual(id);
})

test("Testing email.", () => {
    const email = "carol@gmail.com";
    const employeeInstance = new Employee("Carol", 2, email);
    expect(employeeInstance.email).toEqual(email);
})



test("Gets name through getName method.", () => {
    const testName = "Carol";
    const employeeInstance = new Employee(testName);
    expect(employeeInstance.getName()).toBe(testName);
})

test("Can test ID through getID method.", () => {
    const testID = 2;
    const employeeInstance = new Employee("Carol", testID);
    expect(employeeInstance.getId()).toBe(testID);
})

test("Can test email through getEmail method.", () => {
    const testEmail = "carol@gmail.com";
    const employeeInstance = new Employee("Carol", 2, testEmail);
    expect(employeeInstance.getEmail()).toBe(testEmail);
})

test("Testing role.", () => {
    const returnValue = "Employee";
    const employeeInstance = new Employee("Carol", 2, "carol@gmail.com");
    expect(employeeInstance.getRole()).toBe(returnValue);
})