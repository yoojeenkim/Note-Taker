app.get('/api/notes', (req, res) => {
    res.status(200).json(`${req.method} request received to get notes.`);

    console.info(`${req.method} request received to get notes`);
});