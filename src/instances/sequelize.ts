// src/instances/sequelize.ts

import Sequelize from 'sequelize';
const db = 'expressapp';
const username = 'root';
const password = 'root';

export const sequelize = new Sequelize(db, username, password, {
    dialect: "mysql",
    port: 5001,
});

sequelize.authenticate()
