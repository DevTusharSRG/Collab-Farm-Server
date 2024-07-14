const adminMiddleware = (req, res, next) => {
    try {
        const isAdmin = req.user.isAdmin; // Corrected variable name
        if (!isAdmin) {
            return res.status(403).json({ message: "Access denied. User is not an admin" });
        }
        next();
    } catch (error) {
        next(error);
    }
}

module.exports = adminMiddleware;
