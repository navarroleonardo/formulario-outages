var express = require('express');
var router = express.Router();

const FechamentoController = require('../controllers/FechamentoController');

router.get('/', FechamentoController.create);
router.post('/', FechamentoController.store);
router.get('/:numero_ticket', FechamentoController.search);

module.exports = router;