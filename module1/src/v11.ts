{
    // ternary operator
const age: number = 15;

if (age >= 18) {
    console.log('Boro manush');
}
else {
    console.log('Bacca punai');
}

const checkAdult = age >= 18 ? 'Adult' : 'Not Adult';
console.log({ checkAdult });

type Company = {
    name: string;
    address: {
        road: string
        location: string
    },
    employee: number;
}
const company: Company = {
    name: 'SSCL',
    address: {
        location: 'Dhaka',
        road: '23/234'
    },
    employee: 190
}

const location = company?.address?.location  ?? 'No location added'
console.log({location});

// nullish coalescing
const userInput: string | undefined | null = null;
const name = userInput ?? 'Guest';
console.log(name);

}

