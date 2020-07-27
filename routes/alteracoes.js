var express = require('express');
var router = express.Router();

const AlteracaoController = require('../controllers/AlteracaoController');

router.get('/', AlteracaoController.create);
router.post('/', AlteracaoController.store);

module.exports = router;