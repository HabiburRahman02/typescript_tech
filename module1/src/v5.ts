
const person: {
    //    readonly company: string
    company: 'abc',  // literal type
    firstName: string
    middleName?: string  // optional type if i use ?
    lastName: string
} = {
    company: 'abc',
    firstName: 'Abdul',
    middleName: 'Malek',
    lastName: 'Kibria'
}

console.log(person.firstName);
console.log('abc');