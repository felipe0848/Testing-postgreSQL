const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Captain_spaceship = sequelize.define("captain_spaceships", {
    captainId: DataTypes.INTEGER,
    spaceshipId: DataTypes.INTEGER,
});

module.exports = Captain_spaceship;
