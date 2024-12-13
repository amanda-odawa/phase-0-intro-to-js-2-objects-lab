// Write your solution in this file!
const employee = {
    name : 'Sam',
    streetAddress : '10004'
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = {...employee};
    newObj[key] = value;
    return newObj;
};
const nonDestructive = updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway');


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
};
const destructive = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway');


function deleteFromEmployeeByKey(employee, key) {
    const newObj = {...employee};
    newObj[key]
    delete newObj.name;
    return newObj;
}


function destructivelyDeleteFromEmployeeByKey(employee, key) {
    employee[key]
    delete employee.name;
    return employee;
}