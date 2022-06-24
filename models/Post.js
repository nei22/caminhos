// importando database
const db = require('./db')

// criando tabela de postagens
const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
})

module.exports = Post 

// executar o codigo abaxo apenas uma vez
// Post.sync({force: true})