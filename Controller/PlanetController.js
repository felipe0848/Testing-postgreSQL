const Planet = require("../models/Planet");

module.exports = {
    async store(req, res) {
        const { name, position } = req.body;

        const newPlanet = await Planet.create({ name, position });

        return res.json(newPlanet);
    },
    async index(req, res) {
        const planets = await Planet.findAll();
        return res.json(planets);
    },
    async put(req, res) {
        const { name, size, position } = req.body;

        await Planet.update(
            { name, size, position },
            {
                where: {
                    id: req.params.id,
                },
            }
        );
        return res.send("Planeta atualizado com sucesso!");
    },
};
