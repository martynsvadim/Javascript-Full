const contacts = [
  { name: 'Tom', phone: '37 - 33', city: 'Kiyv' },
  { name: 'Ann', phone: '38 - 33', city: 'Lviv' },
  { name: 'Liza', phone: '33 - 33', city: 'Odesa' },
  { name: 'Jack', phone: '31 - 33', city: 'Poltava' },
];

const sortContacts = (contacts, boolean) => {
  if (!Array.isArray(contacts)) {
    return null;
  }
  const result = contacts.sort((a, b) => {
    if (boolean === true) {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });
  return result;
};

console.log(sortContacts(contacts, true));
