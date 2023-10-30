
let resourceJson = function (json) {
    let data = json['dataValues']
    return data
}

let resourceCollection = async function (collection) {
    let data = []
    collection.forEach(json => {
        data.push(resourceJson(json))
    });
    return data
}

module.exports = {
    resourceJson, resourceCollection
}