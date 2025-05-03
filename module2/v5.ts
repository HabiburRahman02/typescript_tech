const createArray = (value: string): string[] => {
    return [value]
}

const createArrayWithGenerics = <T>(value: T): T[] => {
    return [value]
}
interface Person {
    name: string;
    age: number
}
const result = createArrayWithGenerics<string>('alia');
const genericObj = createArrayWithGenerics<Person>({ name: 'Adu', age: 45 })
// console.log(genericObj);

const addCourse = <T>(value: T) => {
    const dev = 'Web Developer'
    return {
        ...value,
        dev
    }
}
interface Result90 {
    name: string,
    role: string,
    company: string,
    location?: string
}
const result90 = addCourse<Result90>({ name: 'Habib', role: 'Pern stack', company: 'sscl' });
const result91 = addCourse<Result90>({ name: 'Habib', role: 'Pern stack', company: 'sscl', location: 'bd' });
console.log(result90); 
console.log(result91); 
