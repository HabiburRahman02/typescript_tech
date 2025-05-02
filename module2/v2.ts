type User1 = {
    name: string;
    roll: number;
};

interface User2 {
    name: string;
    roll: number
}



type RollNumber = number;
type UserWithRole1 = User1 & { dept: string }

interface UserWithRole2 extends User2 {
    dept: string;
}

const user: UserWithRole2 = {
    name: 'Habib',
    roll: 45,
    dept: 'CMT'
}

type Age1 = number[];
interface Age2 {
    [index: number]: number
}
const age1: Age2 = [0, 4, 6];