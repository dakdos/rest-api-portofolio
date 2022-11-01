const knex = require('../config/db');

const getSkils = () => {
    const skils = knex.select("*");
    skils.from('skils');

    return skils;
}

module.exports = {
    getSkils
}