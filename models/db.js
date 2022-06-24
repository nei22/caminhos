const Sequelize = require('sequelize')

// config database
// conexao com banco de dados
const sequelize = new Sequelize('postapp', 'root', 'GRBgzaMAY!?!25', {
    host: 'localhost',
    dialect: 'mysql'
})

//exportando dois modulos de uma vez
module.exports = {
    sequelize: sequelize,
    Sequelize: Sequelize
}