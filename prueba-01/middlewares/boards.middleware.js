// Models
const { Board } = require('../models/board.model');

// Utils
const { AppError } = require('../utils/appError.util');
const { catchAsync } = require('../utils/catchAsync.util');

const boardExists = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const board = await Board.findOne({ where: { id } });

  if (!board) {
    return next(new AppError('Board not found', 404));
  }

  req.board = board;
  next();
});

module.exports = { boardExists };
