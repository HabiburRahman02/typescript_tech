// spread operator
const bro1: string[] = ['alom', 'sahin'];
const bro2: string[] = ['momin', 'atik'];

const spreadBro: string[] = [...bro1, 'kodom', ...bro2]
console.log('boyz', spreadBro);

// rest operator
const myFriends = (...friends: string[])=>{
friends.forEach((friend: string)=> console.log(`Hi ${friend}`))
}

myFriends('alu', 'kalu', 'balu')