const fs = require("fs/promises");
const listContacts = require("./listContacts");
const contactsPath = require("../../contactsPath");

async function removeContact(contactId) {
  const contacts = await listContacts();
  const index = contacts.findIndex((item) => item.id === contactId);
  if (index === -1) {
    return null;
  }
  const newContacts = contacts.filter((_, ind) => ind !== index);
  await fs.writeFile(contactsPath, JSON.stringify(newContacts));
  return contacts[index];
}

module.exports = removeContact;
