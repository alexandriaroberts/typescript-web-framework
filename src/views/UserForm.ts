import { User, UserProps } from '../models/User';
import { View } from './View';
export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
    };
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');

    const name = input?.value;
    this.model.set({ name });
  };

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  template(): string {
    return `
        <div>
          <h1>User Form</h1>
          <p>User name: ${this.model.get('name')}</p>
          <p>User age: ${this.model.get('age')}</p>
          <input />
          <button class="set-name">Change Name</button>
          <button class="set-age">Set random age</button>
        </div>
      `;
  }
}
