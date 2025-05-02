"use strict";
// spread operator
const bro1 = ['alom', 'sahin'];
const bro2 = ['momin', 'atik'];
const spreadBro = [...bro1, 'kodom', ...bro2];
// rest operator
const myFriends = (...friends) => {
    friends.forEach((friend) => console.log(`Hi ${friend}`));
};
myFriends('alu', 'kalu', 'balu');
