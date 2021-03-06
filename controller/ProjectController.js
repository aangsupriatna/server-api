const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function get(req, res) {
    const projects = await prisma.project.findMany({
        where: { finished: true },
        include: { company: true },
    })

    return res.status(200).json(projects)
}

async function store(req, res) {
    const { title, location, companyId } = req.body
    const result = await prisma.project.create({
        data: {
            title,
            location,
            finished: false,
            company: { connect: { id: Number(companyId) } },
        },
    })
    return res.status(200).json(result)
}

async function show(req, res) {
    const { id } = req.params

    const project = await prisma.project.findUnique({
        where: { id: Number(id) },
        include: { company: true },
    })
    return res.status(200).json(project)
}

async function update(req, res) {
    const { id } = req.params
    const project = await prisma.project.update({
        where: { id: Number(id) },
        data: { finished: true },
    })
    return res.status(200).json(project)
}

async function destroy(req, res) {
    const { id } = req.params
    const project = await prisma.project.delete({
        where: {
            id: Number(id),
        },
    })
    return res.status(200).json(project)
}

module.exports = {
    get,
    store,
    show,
    update,
    destroy
}