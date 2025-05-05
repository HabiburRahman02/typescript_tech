{
    // utility type

    type Person = {
        name: string;
        age: number;
        email: string;
        semester?: string
    }

    type Name = Pick<Person, 'name'>  // get only name as type

    // Omit type
    type AgeAndEmail = Omit<Person, 'age' | 'email'>  // get age and email as type

    // Required
    type NameRequired = Required<Person>  // all value is required

    // Partial
    type AllOptional = Partial<Person>   // all value is optional

    type Student = {
        name: string;
        roll: number
    }

    // Readonly
    type ValueReadOnly = Readonly<Student>

    const student: ValueReadOnly = {
        name: 'Habib',
        roll: 45,
    }

    // student.name = 'alia bhatt' // can not reassign

  
const recordTeacher: Record<string, number | string>  = {}
    
recordTeacher.year = 2024;
recordTeacher.hasGf = '3ta'
console.log(recordTeacher);
}