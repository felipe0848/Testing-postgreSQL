"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("captain_spaceships", {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            captainId: {
                type: Sequelize.INTEGER,
                refereces: { model: "captain", key: "id" },
                onUpadte: "CASCADE",
                onDelete: "CASCADE",
            },
            spaceshipId: {
                type: Sequelize.INTEGER,
                references: { model: "spaceships", key: "id" },
                onUpadte: "CASCADE",
                onDelete: "CASCADE",
            },
            createdAt: {
                type: Sequelize.DATE,
            },
            updatedAt: {
                type: Sequelize.DATE,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("captain_spaceships");
    },
};
