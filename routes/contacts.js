const express = require('express');
const router = express.Router();
const { getAllContacts, getSingleContact, createContact, updateContact, deleteContact } = require('../controllers/contacts');

router.get('/', getAllContacts);
// #swagger.description = 'Get all contacts'

router.get('/:id', getSingleContact);
// #swagger.description = 'Get a single contact by ID'

router.post('/', createContact);
/* #swagger.parameters['body'] = {
  in: 'body',
  description: 'Contact to create',
  required: true,
  schema: { $ref: '#/definitions/Contact' }
} */

router.put('/:id', updateContact);
/* #swagger.parameters['body'] = {
  in: 'body',
  description: 'Updated contact data',
  required: true,
  schema: { $ref: '#/definitions/Contact' }
} */

router.delete('/:id', deleteContact);
// #swagger.description = 'Delete a contact by ID'

module.exports = router;
