const Captain = require("../models/Captain");
const Spaceship = require("../models/Spaceship");

module.exports = {
    async index(req, res) {
        const { captainId, spaceshipId } = req.params;
        if (captainId) {
            try {
                const captain = await Captain.findByPk(captainId, {
                    include: Spaceship,
                });

                return res.json(captain);
            } catch (error) {
                console.log(error);
                return res.status(500).send(error);
            }
        }
        if (spaceshipId) {
            try {
                const spaceship = await Spaceship.findByPk(spaceshipId, {
                    include: Captain,
                });

                return res.json(spaceship);
            } catch (error) {
                console.log(error);
                return res.status(500).send(error);
            }
        }
    },
};
