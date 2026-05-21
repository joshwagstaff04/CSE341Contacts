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

const createContact = async (req, res) => {
  const db = getDb();
  const { firstName, lastName, email, favoriteColor, birthday } = req.body;
  const result = await db.collection('contacts').insertOne({ firstName, lastName, email, favoriteColor, birthday });
  res.status(201).json(result);
};

const updateContact = async (req, res) => {
  const db = getDb();
  const { firstName, lastName, email, favoriteColor, birthday } = req.body;
  const result = await db.collection('contacts').replaceOne(
    { _id: new ObjectId(req.params.id) },
    { firstName, lastName, email, favoriteColor, birthday }
  );
  if (result.matchedCount === 0) {
    return res.status(404).json({ message: 'Contact not found' });
  }
  res.status(204).send();
};

const deleteContact = async (req, res) => {
  const db = getDb();
  const result = await db.collection('contacts').deleteOne({ _id: new ObjectId(req.params.id) });
  if (result.deletedCount === 0) {
    return res.status(404).json({ message: 'Contact not found' });
  }
  res.status(200).json({ message: 'Contact deleted' });
};

module.exports = { getAllContacts, getSingleContact, createContact, updateContact, deleteContact };
