// {
//     const student1: {
//         name: string;
//         age: number,
//         position: string,
//         isOnsite: boolean
//     } = {
//         name: "Habib",
//         age: 20,
//         position: "Web Dev(MERN)",
//         isOnsite: true
//     }
// }


// type alias
type Student = {
    name: string
    age: number
    position: string
    isOnsite: boolean,
    contact?: string,
}


const student1: Student = {
    name: "Habib",
    age: 20,
    position: "Web Dev(MERN)",
    isOnsite: true
}

const student2: Student = {
    name: "Adu vai",
    age: 620,
    position: "Web Dev(PERN)",
    isOnsite: false
}

console.log(student1, student2);

type PersonName = string

// const personName: string = 'abidul islam';
const personName: PersonName = 'abidul islam';

type Multiply = (num1: number, num2: number) => number

// const multiply = (num1: number, num2: number) => num1 * num2;
const multiply: Multiply = (num1,num2) => num1 * num2;
console.log(multiply(2, 2));