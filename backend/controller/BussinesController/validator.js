const { body, validationResult } = require('express-validator');
const models = require('../../models/index')
const { Op } = require("sequelize");
const multer = require('multer');

let validate = [
    multer().none(),
    body('name').notEmpty().withMessage('name is a required field'),
]

let validateCreate = [
    ...validate,

]

let validateUpdate = [
    ...validate,
]


module.exports = { validateCreate, validateUpdate }


