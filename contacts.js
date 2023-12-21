const fs = require("node:fs/promises");
const crypto = require("node:crypto");
const path = require("node:path");

const contactsPath = path.join(__dirname, "./db/contacts.json");

//* helpers
async function writeContacts(contacts) {
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
}

//* api
async function getContacts() {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
}

async function getContactById(contactId) {
  const contacts = await getContacts();

  const contact = contacts.find((contact) => contact.id === contactId);
  if (!contact) {
    return null;
  }

  return contact;
}

async function addContact(contact) {
  const contacts = await getContacts();

  const newContact = {
    ...contact,
    id: crypto.randomUUID(),
  };
  contacts.push(newContact);
  await writeContacts(contacts);

  return newContact;
}

async function updateContact(contactId, update) {
  const contacts = await getContacts();

  const idx = contacts.findIndex((contact) => contact.id === contactId);
  if (idx === -1) {
    return null;
  }

  contacts[idx] = {
    ...update,
    id: contactId,
  };
  await writeContacts(contacts);

  return contacts[idx];
}

async function removeContact(contactId) {
  const contacts = await getContacts();

  const idx = contacts.findIndex((contact) => contact.id === contactId);
  if (idx === -1) {
    return null;
  }

  const deletedContact = contacts.splice(idx, 1);
  await writeContacts(contacts);

  return deletedContact;
}

module.exports = {
  getContacts,
  getContactById,
  addContact,
  updateContact,
  removeContact,
};
