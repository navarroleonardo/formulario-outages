var express = require('express');
var router = express.Router();

const AlteracaoController = require('../controllers/AlteracaoController');

router.get('/', AlteracaoController.create);
router.post('/', AlteracaoController.store);
router.get('/:numero_ticket', AlteracaoController.search);

module.exports = router;