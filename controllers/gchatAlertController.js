const modules = require("../services/modules");
const { check, validationResult } = require('express-validator');

const getBody = async (req, res) => {
    try {
        const body = await modules.gchatAlertService.getBody(req);
        res.status(200).json(body);
    } catch (err) {        
        return res.status(500).json(err);
    }       
};

module.exports = {
    getBody,
};
