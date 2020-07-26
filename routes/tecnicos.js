var express = require('express');
var router = express.Router();

const TecnicoController = require('../controllers/TecnicoController');

router.get('/', TecnicoController.create)
router.post('/', TecnicoController.store)

module.exports = router;