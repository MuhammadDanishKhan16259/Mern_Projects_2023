const express = require('express');
const { Signup, Login } = require('../Controllers/AuthController');
const { userVerification } = require('../Middlewares/AuthMiddleware');
const ClientMiddleware = require('../Middlewares/ClientMiddleware');
const ClientController = require('../Controllers/ClientController');

const router = express.Router();

router.post('/signup', Signup);
router.post('/login', Login);
router.post('/user', userVerification);

router.post('/addclient', ClientController.createClient); // Use the correct controller function
router.get('/getclient', ClientController.getClients); // Use the correct controller function
router.get('/getclient/:id', ClientMiddleware.checkClientExists, ClientController.getClient);
router.put('/updateclient/:id', ClientMiddleware.checkClientExists, ClientController.updateClient);
router.delete('/deleteclient/:id', ClientMiddleware.checkClientExists, ClientController.deleteClient);


module.exports = router;
