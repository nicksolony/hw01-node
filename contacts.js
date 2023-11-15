const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, './db/contacts.json');

// TODO: document each function
function listContacts() {
  // ...your code
}

function getContactById(contactId) {
  // ...your code
}

function removeContact(contactId) {
  // ...your code
}

function addContact(name, email, phone) {
  // ...your code
}


module.exports = {
    contactsPath,
}