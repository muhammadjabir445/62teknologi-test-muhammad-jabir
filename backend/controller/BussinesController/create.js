const models = require('../../models/index')
const { Op } = require("sequelize");
const Sequelize = require("../../models/index").sequelize;
let craete = async function (req, res, next) {
    try {

        await Sequelize.transaction(async (t) => {
            let Bussnies = await models.Bussnies.create(req.body, { transaction: t })
            if (req.body.categories) {
                let categories_bussnies = req.body.categories.map((e) => ({ category_id: e, bussnies_id: Bussnies.id }))
                await models.Category_bussnies.bulkCreate(categories_bussnies, { transaction: t })
            }
            if (req.body.attributes) {
                let attributes_bussnies = req.body.attributes.map((e) => ({ attirbute_id: e, bussnies_id: Bussnies.id }))
                await models.Attribute_bussnies.bulkCreate(attributes_bussnies, { transaction: t })
            }
            if (req.body.opentime) {
                let opentime = req.body.opentime.map((e) => ({ ...e, bussnies_id: Bussnies.id }))
                await models.Opentime.bulkCreate(opentime, { transaction: t })
            }
            req.body.location.bussnies_id = Bussnies.id
            await models.Location.create(req.body.location, { transaction: t })

        })
        return res.status(200).json({
            message: 'Success submit data'
        })

    } catch (error) {
        return res.status(400).json({
            message: 'Error data',
            error: error.toString()
        })
    }
}


module.exports = craete