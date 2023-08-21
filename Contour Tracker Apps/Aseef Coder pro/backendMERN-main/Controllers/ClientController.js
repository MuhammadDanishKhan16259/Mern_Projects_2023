const Client = require('../Models/Client');
const User = require('../Models/UserModel');
const { validateClientData } = require('../util/validateClient');

// Get all clients
module.exports.getClients = async (req, res) => {
    try {
        const clients = await Client.find().populate('user');
        res.json(clients);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Get a single client
module.exports.getClient = async (req, res) => {
    const { id } = req.params;
    try {
        const client = await Client.findById(id).populate('user');
        if (!client) {
            return res.status(404).json({ error: 'Client not found' });
        }
        res.json(client);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Create a new client
module.exports.createClient = async (req, res) => {
    const { body: clientData } = req;
    

    // Validate client data
    const errors = validateClientData(clientData);

    if (Object.keys(errors).length > 0) {
        return res.status(400).json({ errors });
    }

    const {
        firstname,
        lastname,
        phone,
        dateofjoining,
        activity,
        description,
        durations,
        image,
        user
    } = req.body;

    try {
        // Check if the user exists
        const existingUser = await User.findById(user);
        if (!existingUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        const client = await Client.create({
            firstname,
            lastname,
            phone,
            dateofjoining,
            activity,
            description,
            durations,
            image,
            user
        });
        res.status(201).json(client);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Update a client
module.exports.updateClient = async (req, res) => {
    const { id } = req.params;
    const { body: clientData } = req;

    // Validate client data
    const errors = validateClientData(clientData);

    if (Object.keys(errors).length > 0) {
        return res.status(400).json({ errors });
    }

    try {
        const client = await Client.findByIdAndUpdate(id, clientData, { new: true });

        if (!client) {
            return res.status(404).json({ error: 'Client not found' });
        }

        res.json(client);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Delete a client
module.exports.deleteClient = async (req, res) => {
    const { id } = req.params;
    try {
        const client = await Client.findByIdAndDelete(id);

        if (!client) {
            return res.status(404).json({ error: 'Client not found' });
        }

        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Search clients by firstname
module.exports.searchClient = async (req, res) => {
    const { firstname } = req.query;
    try {
        const clients = await Client.find({ firstname: { $regex: firstname, $options: 'i' } });

        if (clients.length === 0) {
            return res.status(404).json({ error: 'No clients found' });
        }

        res.json(clients);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};