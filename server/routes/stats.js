const express = require('express')

const { getStats, addStats, updateStats} =  require('../controllers/stats.controller');

const router = express.Router()

router.get('/', getStats)

router.post('/', addStats);

router.put('/:id', updateStats)

module.exports = router;