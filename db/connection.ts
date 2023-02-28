import { Sequelize, Model } from "sequelize";

const db = new Sequelize('node-ts', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
    // logging: false
});

export default db;