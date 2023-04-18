const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(fullName) {
    const surname = fullName.split(' ');
    this.firstName = surname[0];
    this.lastName = surname[1];
  },
};
