{
    // nullable
    const searchSomething = (value: string | null) => {
        return value;
    }
    // console.log(searchSomething(null));

    // never 

    const throwErr = (msg: string): never => {
        throw new Error(msg)
    }
    // console.log(throwErr);

    // unknown
    const something = (value: unknown ) :unknown=> {
        if(typeof value ==='number'){
            return value * value;
        }
        else if(typeof value === 'string'){
            const [val, other] = value.split(' ');
            return parseInt(val) * parseInt(val);
        }
    };
    console.log(something('20 tk'));
}