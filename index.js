(async () => {
    const Planet = require("./models/Planet");

    //   const newPlanet = await Planet.create({
    //     name: "Venus",
    //     position: 5,
    //   });

    // const seePlanet = await Planet.findAll({
    // where: {
    //     position: 3,
    // },
    // });

    const updatePlanet = await Planet.findByPk(1);
    updatePlanet.name = "terra";
    await updatePlanet.save();

    console.log(updatePlanet);
})();
