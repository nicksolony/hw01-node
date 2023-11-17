const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, './db/contacts.json');


// TODO: document each function
async function listContacts() {
    const contacts = await fs.readFile(contactsPath);
    return JSON.parse(contacts)
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
    listContacts,
}