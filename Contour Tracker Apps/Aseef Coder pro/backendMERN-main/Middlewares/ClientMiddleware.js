// middleware/clientMiddleware.js
const Client = require('../Models/Client');

module.exports.checkClientExists = async (req, res, next) => {
    try {
        const client = await Client.findById(req.params.id);
        if (!client) {
            return res.status(404).json({ error: 'Client not found' });
        }
        req.client = client;
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};