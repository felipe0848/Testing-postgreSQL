(async () => {
    const Planet = require("./models/Planet");

    const newPlanet = await Planet.create({
        name: "Venus",
        position: 5,
    });

    const seePlanet = await Planet.findAll();

    console.log(seePlanet.map((p) => p.dataValues));

    // const updatePlanet = await Planet.findByPk(1);
    // updatePlanet.name = "terra";
    // await updatePlanet.save();

    const deletePlanet = await Planet.findByPk(newPlanet.id);
    deletePlanet.destroy();

    const updatePlanet = await Planet.findAll();

    console.log(updatePlanet.map((p) => p.dataValues));
})();
