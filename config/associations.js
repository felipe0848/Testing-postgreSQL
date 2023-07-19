const Planet = require("../models/Planet");
const Satelite = require("../models/Satelite");

Planet.hasOne(Satelite, { onUpadate: "CASCADE", onDelete: "CASCADE" });
Satelite.belongsTo(Planet, { foreingkey: "planetId", as: "planet" });

module.exports = { Planet, Satelite };
