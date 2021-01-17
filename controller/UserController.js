
async function get(req, res) {
    return res.status(200).json({
        message: "Get success"
    });
}

async function store(req, res) {
    const data = req.body;
    return res.status(200).json({
        data: data
    });
}

async function show(req, res) {
    const id = req.params.id;
    return res.status(200).json({
        message: `Show ${id} success`
    });
}

async function update(req, res) {
    const id = req.params.id;
    return res.status(200).json({
        message: `Update ${id} success`
    });
}

async function destroy(req, res) {
    const id = req.params.id;
    return res.status(200).json({
        message: `Destroy ${id} success`
    });
}

module.exports = {
    get,
    store,
    show,
    update,
    destroy
}