const express = require('express')
const Post = require('./models/Post')
const bodyParser = require('body-parser')
const app = express()
const hbs = require('express-handlebars')
const port = 3000

// config
// body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// config handlesbars
// template engine
app.engine('hbs', hbs.engine({
    extname: 'hbs',
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    }
}))

app.set('view engine', 'hbs')

// Rotas
app.get('/list', (req, res) => {
    Post.findAll({ order: [['id', 'desc']] }).then(function (posts) {
        res.render('home', { posts: posts })

    })
})

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/cad', (req, res) => {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(() => {
        res.redirect('/list')
    }).catch((erro) => {
        res.send('Erro encontrado: ' + erro)
    })
})
app.get('/deletar/:id', (req, res)=>{
    Post.destroy({where: {id:req.params.id}}).then(()=>{
        res.send('Postagem deletada com sucesso!!')
    }).catch((erro)=>{
        res.send('Esta postagem não existe!!'+ erro)
    })
})

// escutador
app.listen(port, () => {
    console.log(`listening in http://localhost:${port}`);
})