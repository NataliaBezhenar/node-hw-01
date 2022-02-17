const fs = require("fs/promises");
const listContacts = require("./listContacts");
const contactsPath = require("../../contactsPath");
const nanoid = require("nanoid");

async function addContact(name, email, phone) {
  const contacts = await listContacts();
  const newContact = { id: nanoid.nanoid(), name, email, phone };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return newContact;
}

module.exports = addContact;
