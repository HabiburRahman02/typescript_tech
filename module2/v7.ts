const getProperty =<T, X extends keyof T> (obj: T, key: X): T[X] => {
    return obj[key]
}

const student = {
    id: 23,
    name: 'Habib',
    roll: 32
}
const studentName = getProperty(student, 'name');
console.log(studentName);