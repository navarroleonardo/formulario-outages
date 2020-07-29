const Fechamento = require('../database/models/Fechamento');
const Solucao = require('../database/models/Solucao');

module.exports = {
    async create(req, res) {

        let solucoes = await Solucao.findAll();
        solucoes = solucoes.map(solucao => solucao.toJSON())

        res.render('fechamentos/create', { solucoes });
    },
    
    async store(req, res) {

        const { tecnico_id, solucao_id, numero_ticket } = req.body;

        const fechamento = await Fechamento.create({
            tecnico_id,
            solucao_id,
            numero_ticket,
        });

        return res.render('fechamentos/success', { numero_ticket: fechamento.numero_ticket, created_at: fechamento.createdAt });
    },

    async search(req, res) {

        const { numero_ticket } = req.params;

        let fechamentos = await Fechamento.findAll({
            where: { numero_ticket }
        });

        fechamentos = fechamentos.map(fechamento => fechamento.toJSON());

        return res.json(fechamentos);
    }
}