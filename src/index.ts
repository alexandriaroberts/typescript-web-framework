import { User } from './models/User';

const user = new User({ name: 'LExie', age: 38 });

user.set({ name: 'newName', age: 999 });
console.log(user.get('name'));
console.log(user.get('age'));
