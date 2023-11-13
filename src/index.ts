import { User } from './models/User';

const user = new User({ name: 'new', age: 0 });

// user.fetch();

// setTimeout(() => {
//   console.log(user);
// }, 4000);

// user.set({ name: 'Lexie', age: 30 });

user.save();
