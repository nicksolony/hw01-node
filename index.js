const contacts  = require('./contacts');





const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case "list":
            const allContacts = await contacts.listContacts();
            return console.log(allContacts);
        case "get":
            const contact = await contacts.getContactById(id);
            return console.log(contact);
        case "add":
            const newContact = await contacts.addContact(name, email, phone);
            return console.log(newContact);
        case "remove":
            const deletedContact = await contacts.removeContact(id);
            return console.log(deletedContact);

        default:
            console.warn("\x1B[31m Unknown action type!");
    }
};
