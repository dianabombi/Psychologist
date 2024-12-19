
// RBAC = role based access control 

function isAdmin (req, res, next) {
    if (req.user && req.user.role === "admin") {
        next ();
    } else {
        res.status(403).send({msg: "Access denied"})
    }
}

// Admin-only route
app.get('/admin', isAdmin, (req, res) => {
    res.json({ message: 'Welcome Admin!' });
});