// // union type
// type FrontendDev = 'Good Dev' | 'Best Dev';
// type BackendDev = 'Better Dev' | 'Expert Dev';


// const fullStackDev:FrontendDev | BackendDev= 'Good Dev';

// intersection type
type FrontendDev = {
    skills: string[],
    role1: 'mern',
}
type BackendDev = {
    skills: string[],
    role2: 'pern',
}
type FullStackDev = FrontendDev & BackendDev
const full: FullStackDev = {
    skills: ['a','b'],
    role1: 'mern',
    role2:'pern'
}

console.log(full);