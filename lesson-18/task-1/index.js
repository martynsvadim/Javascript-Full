export const even = {
  message: 'Welcome to the party',
  guests: [
    { name: 'John', age: 17, email: 'j@gmail.com' },
    { name: 'Bob', age: 18, email: 'b@gmail.com' },
  ],
  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ name, email }) => ({
        email,
        message: `Dear ${name}! ${this.message}!`,
      }));
  },
};

console.log(even.getInvitations());
