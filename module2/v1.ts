// type assertion
const value: any = 'HELLO JS';
const output = (value as string).split(' ')
// console.log(output);

const calculate = (val: number | string): number |string | undefined => {
    if (typeof val === 'string') {
        const converted = parseInt(val);
        return `String value: ${converted}`
    }
    else if (typeof val === 'number') {
        return `Number value ${val}`;
    }else{
        return 'Please provide a value';
    }
} 

const result1 = calculate(24) as number;
const result2 = calculate('25') as string;

type CustomErr = {
    message: string
}

try {
    
} catch (error) {
    console.log((error as CustomErr).message);
}