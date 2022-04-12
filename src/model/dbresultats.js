const { Sequelize, Model, DataTypes } = require("sequelize");
let dbresultats = {};

const sequelize = new Sequelize('dbresultats', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb'
});


const Resultat = sequelize.define('resultat', {
    salinite: {
        type: DataTypes.STRING,
        notEmpty: false
    },
    no3: {
        type: DataTypes.STRING,
        notEmpty: false
    },
    po4: {
        type: DataTypes.STRING,
        notEmpty: false
    },
    alcalinite: {
        type: DataTypes.STRING,
        notEmpty: false
    },
    calcium: {
        type: DataTypes.STRING,
        notEmpty: false
    },
    magnesium: {
        type: DataTypes.STRING,
        notEmpty: false
    },
    ph:{
        type: DataTypes.STRING,
        notEmpty: false
    },
})

dbresultats.sequelize= sequelize
dbresultats.Sequelize= Sequelize


module.exports = Resultat;