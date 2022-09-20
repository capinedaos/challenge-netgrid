// Models
const { Board } = require('../models/board.model');

// Utils
const { catchAsync } = require('../utils/catchAsync.util');
// Utils
const { AppError } = require('../utils/appError.util');

const createBoard = catchAsync(async (req, res, next) => {
  const { stage, title } = req.body;

  const board = await Board.findAll();
  let newStage = 0;
  if (board.length === 0) {
    newStage = 1;
  } else {
    newStage = stage;
  }

  const newBoard = await Board.create({
    stage: newStage,
    title,
  });

  res.status(201).json({
    status: 'success',
    newBoard,
  });
});

const getAllBoards = catchAsync(async (req, res, next) => {
  const board = await Board.findAll();
  res.status(201).json({
    status: 'success',
    board,
  });
});

const getBoardById = catchAsync(async (req, res, next) => {
  const { board } = req;
  res.status(201).json({
    status: 'success',
    board,
  });
});

const updateBoard = catchAsync(async (req, res, next) => {
  const { board } = req;
  const { stage } = req.body;

  if (stage > 3) {
    return next(new AppError('undefined stage', 404));
  }
  await board.update({ stage });
  res.status(201).json({ status: 'success', board });
});

const deleteBoard = catchAsync(async (req, res, next) => {
  const { board } = req;
  await board.destroy();
  res.status(201).json({ status: 'success' });
});

module.exports = {
  createBoard,
  getAllBoards,
  getBoardById,
  updateBoard,
  deleteBoard,
};
