export const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName() {
    return { firstName: this.firstName, lastName: this.lastName };
  },
};

console.log(user.setFullName.call(user));
