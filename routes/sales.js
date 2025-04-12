const express = require('express');
const { getSalesData } = require('../services/crmService');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
      // TODO: Replace with real data from CRM

    const data = await getSalesData();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch sales data' });
  }
});

module.exports = router;
