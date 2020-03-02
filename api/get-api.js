function getApi (req, res) {
    const {name} = req.params;
    res.json(require(`./json/${name}.json`));
}

module.exports = getApi;
