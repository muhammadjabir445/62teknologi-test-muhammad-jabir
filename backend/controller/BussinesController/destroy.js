const models = require('../../models/index')
let destroy = async function (req, res, next) {
    await models.Bussnies.destroy({
        where: {
            id: req.params.id
        }
    })
    return res.status(200).json({
        message: 'Success delete data'
    })
}


module.exports = destroy