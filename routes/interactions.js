const express = require('express');
const { getInteractionsData } = require('../services/crmService');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    let filtered = await getInteractionsData();

    const { type, from, to } = req.query;

    // let filtered = interactions;
  
    if (type) {
      filtered = filtered.filter(item => item.type === type);
    }
  
    if (from && to) {
      filtered = filtered.filter(item => {
        const date = new Date(item.followUpDate);
        return date >= new Date(from) && date <= new Date(to);
      });
    }
  


    res.json(filtered);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch interaction data' });
  }
});

module.exports = router;
