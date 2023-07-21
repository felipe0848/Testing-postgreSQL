const Captain = require("../models/Captain");
const Captain_spaceship = require("../models/Captain_spaceship");
const Planet = require("../models/Planet");
const Satelite = require("../models/Satelite");
const Spaceship = require("../models/Spaceship");

Planet.hasMany(Satelite, { onUpadate: "CASCADE", onDelete: "CASCADE" });
Satelite.belongsTo(Planet, { foreingkey: "planetId", as: "planet" });

Spaceship.belongsToMany(Captain, {
    through: Captain_spaceship,
    // foreingKey: "captainId",
    // as: "captains",
});
Captain.belongsToMany(Spaceship, {
    through: Captain_spaceship,
    // foreingKey: "spaceshipId",
    // as: "spaceships",
});

module.exports = { Planet, Satelite };
