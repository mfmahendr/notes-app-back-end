const {
  addNotesHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  deleteNoteByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },
  {
    method: 'Delete',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler,
  },
];

module.exports = routes;
