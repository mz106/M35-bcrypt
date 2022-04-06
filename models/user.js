const { DataTypes } = require("sequelize");

const connection = require("../connection");

const User = connection.define("User", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    fullname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = User;