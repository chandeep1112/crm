const express = require('express');
const cors = require('cors');
require('dotenv').config();
const authMiddleware = require('./middleware/auth');
const salesRoutes = require('./routes/sales');
const interactionRoutes = require('./routes/interactions');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/sales',authMiddleware, salesRoutes);
app.use('/api/interactions',authMiddleware, interactionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
