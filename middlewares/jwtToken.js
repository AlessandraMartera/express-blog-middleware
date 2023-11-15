
const jwt = require("jsonwebtoken");

module.exports = function generateToken(user) {
    const payload = {
    id: user.id,
    username: user.username,
    email: user.email
    };

    // Ritorniamo il token firmato con scadenza di 1 ora
    return jwt.sign(payload, process.env.JWT_SECRET,
    { expiresIn: "1h" });
}   