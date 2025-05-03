{
    
interface Developer<T, X> {
    name: string,
    pc: {
        brand: string,
        price: number
    },
    car: T,
    hasGf?: X
}

type GoodDeveloper = {brand: string, release: number}
interface GoodDeveloperPro {brand: string, release: number}

const goodDeveloper: Developer<GoodDeveloperPro, boolean> = {
    name: 'Habib',
    pc: {
        brand: 'Asus',
        price: 34000
    },
    car:{
        brand: 'Lambor ginni',
        release: 2013
    },
    hasGf: false,
}
console.log(goodDeveloper);
}