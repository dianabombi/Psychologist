const jwt = require("jsonwebtoken");

async function verifyToken(req, res, next) {
    try {
        // Check for the Authorization header
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).send({
                msg: "Unauthorized: Token not found.",
            });
        }

        // Extract the token from the header
        const clientToken = authHeader.split(" ")[1];
        if (!clientToken) {
            return res.status(401).send({
                msg: "Unauthorized: Malformed token.",
            });
        }

        // Verify the token
        const decoded = jwt.verify(clientToken, process.env.SECRET_KEY);

        // Attach the decoded token data (e.g., user info) to the request object
        req.user = decoded;

        // Call the next middleware or route handler
        next();
    } catch (error) {
        console.error("Token verification error:", error);

        // Handle specific JWT errors for clarity
        const errorMessage =
            error.name === "TokenExpiredError"
                ? "Unauthorized: Token has expired."
                : "Unauthorized: Invalid token.";

        return res.status(401).send({
            msg: errorMessage,
            error: error.message,
        });
    }
}

module.exports = verifyToken;