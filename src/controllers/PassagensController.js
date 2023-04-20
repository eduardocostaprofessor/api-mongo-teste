const mongoose = require('mongoose')

//model que vai usar
const Passagem = mongoose.model('Passagem')


module.exports = {


    async readAll(req, res) {
        const { page = 1 } = req.query

        passagens = await Passagem.paginate({}, { page, limit: 50 })

        return res.json(passagens)
    },

    readAllJSON(req, res) {
        const jsonData = [
            {
                nome: 'Eduardo Costa',
                origem: "São Paulo",
                destino: "Minas Gerais",
                dataViagem: "20/07/2023"
            },
            {
                nome: 'Maria Silva',
                origem: "São Paulo",
                destino: "Manaus",
                dataViagem: "20/06/2023"
            },
        ]

        return res.json(jsonData)
    },

    async insert(req, res) {

        // if (typeof req.body.userId === "undefined")
        //     return res.json({ error: "favor informar o usuário" })

        const PassagemCreated = await Passagem.create(req.body)

        return res.json(PassagemCreated)
    },

}