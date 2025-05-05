{
    //
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

    const addCourse = <T extends { id: number; name: string; roll: number }>(value: T) => {
        const dev = 'Web Developer'
        return {
            ...value,
            dev
        }
    }
    interface Student1 {
        id: number;
        name: string;
        roll: number;
    }
    const student1: Student1 = addCourse({ id: 1, name: 'habib', roll: 34 });
    const student2: Student1 = addCourse({ id: 1, name: 'habib', roll: 34, hasGf: false });


    //
}