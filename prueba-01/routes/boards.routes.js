const express = require('express');

// Controllers
const {
  createBoard,
  getAllBoards,
  getBoardById,
  updateBoard,
  deleteBoard,
} = require('../controllers/boards.controller');

// Middlewares
const {
  createBoardValidators,
} = require('../middlewares/validators.middleware');
const { boardExists } = require('../middlewares/boards.middleware');

const boardsRouter = express.Router();

boardsRouter.post('/', createBoardValidators, createBoard);

boardsRouter.get('/', getAllBoards);

boardsRouter
  .use('/:id', boardExists)
  .route('/:id')
  .get(getBoardById)
  .patch(updateBoard)
  .delete(deleteBoard);

module.exports = { boardsRouter };
