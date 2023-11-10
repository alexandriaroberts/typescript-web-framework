import { User } from './models/User';

const user = new User({ name: 'LExie', age: 38 });

user.on('change', () => {
  console.log('change');
});

user.on('hi', () => {
  console.log('hi');
});

user.trigger('change');
