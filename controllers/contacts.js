const { ObjectId } = require('mongodb');
const { getDb } = require('../db/connect');

const getAllContacts = async (req, res) => {
  const db = getDb();
  const contacts = await db.collection('contacts').find().toArray();
  res.json(contacts);
};

const getSingleContact = async (req, res) => {
  const db = getDb();
  const contact = await db
    .collection('contacts')
    .findOne({ _id: new ObjectId(req.params.id) });

  if (!contact) {
    return res.status(404).json({ message: 'Contact not found' });
  }
  res.json(contact);
};

module.exports = { getAllContacts, getSingleContact };
