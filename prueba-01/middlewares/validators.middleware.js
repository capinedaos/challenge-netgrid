const { body, validationResult } = require('express-validator');

const { AppError } = require('../utils/appError.util');

const checkResult = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    // Array has errors
    const errorMsgs = errors.array().map((err) => err.msg);

    const message = errorMsgs.join('. ');

    return next(new AppError(message, 400));
  }

  next();
};

const createBoardValidators = [
  body('stage')
    .notEmpty()
    .withMessage('stage cannot be empty')
    .isNumeric()
    .withMessage('stage must be a number')
    .custom((val) => val > 0)
    .withMessage('stage cannot be a negative value'),
  body('title')
    .notEmpty()
    .withMessage('title cannot be empty')
    .isString()
    .withMessage('title must be a string'),
  checkResult,
];

module.exports = { createBoardValidators };
