// middleware/authMiddleware.js
const User = require("../Models/UserModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports.userVerification = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ status: false });

    }

    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
        if (err) {
            return res.json({ status: false });
        }

        try {
            const user = await User.findById(data.id);
            if (user) {
                req.user = user;
                return next();
            } else {
                return res.json({ status: false });
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Server error' });
        }
    });
};
