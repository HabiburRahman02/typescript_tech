const createSomething = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const value = 'i am a web developer';
        if (value) {
            resolve(value)
        }
        else {
            reject('Error khia gesos beta');
        }
    })
}

const getResult = async (): Promise<string> => {
    const data: string = await createSomething()
    return data;
}

getResult()
type APiResponse = {
    userId: number,
    id:number,
    title: string,
    body: string
}
const fetchData = async (): Promise<APiResponse> => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data =await res.json();
    return data;
}

fetchData()
.then(result=>{
    console.log(result);
})