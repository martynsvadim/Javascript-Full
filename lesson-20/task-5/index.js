/* eslint-disable max-classes-per-file */

class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get sessionId() {
    return this._sessionId;
  }
}

class UserRepository {
  constructor(users) {
    this._users = Object.freeze(users);
  }

  get users() {
    return this._users;
  }

  getUserNames() {
    return this._users.map((element) => element.name);
  }

  getUserIds() {
    return this._users.map((element) => element.id);
  }

  getUserNameByID(id) {
    return this._users.find((element) => element.id === id).name;
  }
}

// examples
const user = new User('1', 'Tom', 'session-id');

// получить свойства можем
console.log(user.id); // ===> '1'
console.log(user.name); // ===> 'Tom'
console.log(user.sessionId); // ===> 'session-id'

// но изменить эти свойства нельзя
user.name = 'Bob'; // пытаемся изменить старое значение
console.log(user.name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует

const repository = new UserRepository([
  { id: '10', name: 'Vadim', sessionId: 'session-id' },
  { id: '11', name: 'Ann', sessionId: 'session-id' },
]);

console.log(repository._users);
console.log(repository.getUserNames());
console.log(repository.getUserIds());
console.log(repository.getUserNameByID('10'));
