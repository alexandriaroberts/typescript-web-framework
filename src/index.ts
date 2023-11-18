import { User } from './models/User';

const user = new User({ name: 'new record', age: 0 });

user.attributes.get('id');
user.sync.save();
