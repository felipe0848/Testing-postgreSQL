const Spaceship = require("../models/Spaceship");

module.exports = {
    async index(req, res) {
        try {
            const spaceships = await Spaceship.findAll();
            return res.status(200).json(spaceships);
        } catch (error) {
            return res.status(500).send(error);
        }
    },
    async store(req, res) {
        try {
            const { name, serial_number } = req.body;
            const spaceship = await Spaceship.create({ name, serial_number });
            return res.status(200).json(spaceship);
        } catch (error) {
            return res.status(500).send(error);
        }
    },
};
