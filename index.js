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
      const contact = await contactsOperations.getContactById();
      console.log(contact);
      break;
  }
};

invokeAction({ action: "getById", id: "2" });
