{
    // array des
    const [a, b, ...other] = [2, 4, 5, 6, 78, 45];
    console.log(a, b, other);

    const person = {
        id: 101,
        name: {
            firstName: 'Alia',
            lastName: 'Bhatt'
        },
        phoneNo: '01834343'
    }

    const {
        id,
        name: {firstName}
    } = person;

    console.log(id, firstName);
}