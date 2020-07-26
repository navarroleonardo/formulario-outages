const Tecnico = require('../database/models/Tecnico');

module.exports = {
    create(req, res) {
        res.render('tecnicos/create');
    },

    async store(req, res) {

        function formatarNomeProprio(nome) {
            var nomeSplit = nome.toLowerCase().split(' ');
            for (var i = 0; i < nomeSplit.length; i++) {
                if (nomeSplit[i] == '') {
                    nomeSplit.splice(i, 1);
                    i--;
                }
                nomeSplit[i] = nomeSplit[i].charAt(0).toUpperCase() + nomeSplit[i].substring(1);     
            }
            return nomeSplit.join(' ');
        }

        const nome = formatarNomeProprio(req.body.nome.trim());
        const email = req.body.email.trim().toLowerCase();

        const [ tecnico, created ] = await Tecnico.findOrCreate({
            where: { email },
            defaults: {
                nome,
                email,
            }
        });

        created ? res.json(tecnico) : res.json(tecnico.id);

    },
}