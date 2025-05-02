function add(num1: number, num2: number): number {
    return num1 + num2;
}

add(3, 34);

const add2 = (num1: number, num2: number): number => {
    return num1 + num2;
}

// obj --->  func ---> method
const newPerson = {
    name: 'Habib',
    balance: 50,
    addBalance(bal: number): number {
        return this.balance + bal;
    }
}

console.log(newPerson.addBalance(34));

const arr: number[] = [2, 4, 6];

const squire: number[] = arr.map((a: number): number => a * a);
