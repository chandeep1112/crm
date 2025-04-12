// middleware/auth.js
module.exports = function(req, res, next) {
    const token = req.headers['authorization'];
  
    const VALID_TOKEN = 'chandeeplogsin'; 
  
    if (token === `Bearer ${VALID_TOKEN}`) {
      next();
    } else {
      return res.status(403).json({ error: 'Forbidden: Invalid token' });
    }
  };
  