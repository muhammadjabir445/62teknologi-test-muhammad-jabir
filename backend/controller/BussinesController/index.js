const models = require('../../models/index')
const { Op } = require("sequelize");
const { resourceCollection } = require('./resource')
let index = async function (req, res, next) {
    let where = []
    let whereCategory = []
    let whereAttribute = []
    let offset = req.query.offset ?? 0
    let limit = req.query.limit ?? 10
    if (req.query.latitude) {
        where.push({
            latitude: req.query.latitude
        })
    }
    if (req.query.longitude) {
        where.push({
            longitude: req.query.longitude
        })
    }

    if (req.query.categories) {
        let categories = req.query.categories.split(',')
        whereCategory.push({
            name: {
                [Op.in]: categories
            }
        })
    }
    if (req.query.attributes) {
        let attributes = req.query.attributes.split(',')
        whereAttribute.push({
            name: {
                [Op.in]: attributes
            }
        })
    }
    let data = await models.Bussnies.findAndCountAll({
        where: where,
        include: [
            {
                model: models.Location
            },
            {
                model: models.Opentime
            },
            {
                model: models.Categories,
                where: whereCategory
            },
            {
                model: models.Attributes,
                where: whereAttribute

            }
        ],
        limit: parseInt(limit),
        offset: parseInt(offset)
    })
    let count = data.count
    data = await resourceCollection(data.rows)
    return res.status(200).json({
        data: data,
        count: count
    })
}


module.exports = index

