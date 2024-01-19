import { CollectioView } from './CollectionView';
import { User, UserProps } from '../models/User';
import { UserShow } from './UserShow';

export class UserList extends CollectioView<User, UserProps> {
  renderItem(model: User, itemparent: Element): void {
    new UserShow(itemparent, model).render();
  }
}
