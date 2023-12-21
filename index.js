const { program } = require("commander");
const Contacts = require("./contacts.js");

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);
const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = await Contacts.getContacts();
      console.table(contacts);
      break;

    case "get":
      const contact = await Contacts.getContactById(id);
      console.log(contact ?? "Not Found");
      break;

    case "add":
      const addedContact = await Contacts.addContact({ name, email, phone });
      console.log(addedContact);
      break;

    case "update":
      const updatedContact = await Contacts.updateContact(id, {
        name,
        email,
        phone,
      });
      console.log(updatedContact ?? "Not Found");
      break;

    case "remove":
      const removedContact = await Contacts.removeContact(id);
      console.log(removedContact ?? "Not Found");
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
