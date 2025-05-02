// type assertion
const value: any = 'HELLO JS';
const output = (value as string).split(' ')
console.log(output);

const calculate = (val: number | string) => {
    if (typeof val === 'string') {
        const converted = parseInt(val);
        return converted
    }
} 