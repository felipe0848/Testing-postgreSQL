const Captain = require("../models/Captain");

module.exports = {
    async index(req, res) {
        const captains = await Captain.findAll();
        return res.json(captains);
    },
    async store(req, res) {
        const { name, fromPlanet } = req.body;
        const captain = await Captain.create({ name, fromPlanet });
        return res.json(captain);
    },
};
