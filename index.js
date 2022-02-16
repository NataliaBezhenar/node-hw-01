const fs = require("fs/promises");
const path = require("path");

const contactsOperations = require("./contacts");
console.log("index.js file is running <<<--------------");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const data = await contactsOperations.listContacts();
      console.log(data);
      break;
    case "getById":
      const contact = await contactsOperations.getContactById(id);
      if (!contact) {
        throw new Error(`Contact with id: ${id} not found`);
      }
      console.log(contact);
      break;
    case "add":
      const newContact = await contactsOperations.addContact(
        name,
        email,
        phone
      );
      console.log(newContact);
      break;

    default:
      console.log("Unknown action");
  }
};

const name = "Natalia";
const email = "kjhsdkjhas@ll.com";
const phone = "123-321-123";
const id = "Rnr5gmtDfeZxgtoeqoxTZ";
invokeAction({ action: "add", name, email, phone });
