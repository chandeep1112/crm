const axios = require('axios');
require('dotenv').config();
const salesData = require('../mock/crmMock.json');
const interactionData = require("../mock/interactionsMock.json");


// for actual crm

// const api = axios.create({
//   baseURL: process.env.CRM_BASE_URL,
//   headers: {
//     Authorization: `Bearer ${process.env.CRM_API_KEY}`,
//     'Content-Type': 'application/json',
//   },
// });

const getSalesData = async () => {
  
  return salesData;
};

const getInteractionsData = async () => {
    return interactionData
};

module.exports = {
  getSalesData,
  getInteractionsData,
};
