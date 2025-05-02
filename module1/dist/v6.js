"use strict";
function add(num1, num2) {
    return num1 + num2;
}
add(3, 34);
const add2 = (num1, num2) => {
    return num1 + num2;
};
// obj --->  func ---> method
const newPerson = {
    name: 'Habib',
    balance: 50,
    addBalance(bal) {
        return this.balance + bal;
    }
};
console.log(newPerson.addBalance(34));
const arr = [2, 4, 6];
const squire = arr.map((a) => a * a);
