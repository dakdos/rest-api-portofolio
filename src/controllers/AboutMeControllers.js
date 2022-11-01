const AboutMeModel = require('../models/AboutMeModels');

const Skils = async (req, res) => {
    try {
        const listSkils    = await AboutMeModel.getSkils();
        res.json({data : listSkils})
    } catch (error) {
        console.log(error);
        res.status(500).json({message : error});
    }
}

module.exports = {
    Skils
}