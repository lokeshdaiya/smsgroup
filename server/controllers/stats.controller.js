const {Stats} = require('../models/Stats');

async function getStats(req, res) {
    try {
      const stats = await Stats.find()
      res.send(stats);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async function addStats(req, res) {  
    try {
      let stats = new Stats({
        city: req.body.city,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        price: req.body.price,
        status: req.body.status,
        color: req.body.color,
      });
      stats = await stats.save()
      res.send(stats);
    } catch (error) {
        console.log('error', error)
      res.status(500).send(error)
    }
}

async function updateStats(req, res) {

  
    const stats = await Stats.findByIdAndUpdate(req.params.id,
      {
        city: req.body.city,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        price: req.body.price,
        status: req.body.status,
        color: req.body.color
      }, { new: true });
  
    if (!stats) return res.status(404).send('Record not found.');
  
    res.send(stats);
  
  }

  module.exports  = {getStats, addStats, updateStats}