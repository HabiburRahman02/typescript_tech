{
    // generics

    type GenericArray<T> = Array<T>;

    // const friends: string[] = ['abul', 'babul'];
    // const friends: Array<string> = ['abul', 'babul'];
    const friends: GenericArray<string> = ['abul', 'babul'];

    // const ages: number[] = [45, 435, 34];
    const ages: GenericArray<number> = [45, 435, 34];


    const user: GenericArray<{ name: string, age: number }> = [
        { name: "Abid", age: 34 },
        { name: "Sabid", age: 24 },
    ]

    // Generic tuple
    type GenericTuple<a, b> = [a, b]
    const ex: GenericTuple<string, string> = ['Alia', 'Dalia',];

    const multipleValueArray: GenericTuple<string, {village: string, postCode: number}> = ['Habib', { village: 'dgc', postCode: 2021 }]
}