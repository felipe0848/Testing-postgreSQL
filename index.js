(async () => {
  const Planet = require("./models/Planet");

  //   const newPlanet = await Planet.create({
  //     name: "Venus",
  //     position: 5,
  //   });

  const seePlanet = await Planet.findAll({
    where: {
      position: 3,
    },
  });

  console.log(seePlanet);
})();
