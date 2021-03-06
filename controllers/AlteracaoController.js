const Alteracao = require('../database/models/Alteracao');
const Tecnico = require('../database/models/Tecnico');

module.exports = {
    create(req, res) {
        res.render('alteracoes/create');
    },

    async store(req, res) {

        const tecnico_id = req.body.tecnico_id.trim();
        const numero_ticket = req.body.numero_ticket.trim();
        const previsao = new Date(req.body.previsao.replace("T", " ") + ':00.000Z');
        const contato = req.body.contato.trim();

        const alteracao = await Alteracao.create({
            tecnico_id,
            numero_ticket,
            previsao,
            contato,
        });

        return res.render('alteracoes/success', { numero_ticket: alteracao.numero_ticket, created_at: alteracao.createdAt });
    },

    async search(req, res) {

        const { numero_ticket } = req.params;

        let alteracao = await Alteracao.findOne({
            where: { numero_ticket }
        });

        return res.json(alteracao);
    }
}