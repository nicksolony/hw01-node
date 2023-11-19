const fs = require("fs/promises");
const path = require("path");
const {nanoid} = require("nanoid");

const contactsPath = path.join(__dirname, 'db','contacts.json');


// TODO: document each function
async function listContacts() {
    const contacts = await fs.readFile(contactsPath);
    return JSON.parse(contacts)
};

async function getContactById(contactId) {
  const contactsId = String(contactId)
  const contacts = await listContacts();
  const contact = contacts.find(contact => contact.id === contactsId);
  return contact || null;
};

async function removeContact(contactId) {
  const contacts = await listContacts();
  const contactsId = String(contactId);
  const index = contacts.findIndex(contact => contact.id === contactsId);
  if (index === -1) {
    return null;
  };
  const [deletedContact] = contacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return deletedContact;
}

async function addContact(name, email, phone) {
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone
  };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
};


module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact
}