const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function get(req, res) {
    const companies = await prisma.company.findMany({
        include: { user: true, projects: true },
    })

    return res.status(200).json(companies)
}

async function store(req, res) {
    const { name, address, userId } = req.body
    const result = await prisma.company.create({
        data: {
            name,
            address,
            user: { connect: { id: Number(userId) } },
        },
    })
    return res.status(200).json(result)
}

async function show(req, res) {
    const { id } = req.params

    const company = await prisma.company.findUnique({
        where: { id: Number(id) },
        include: { user: true, projects: true },
    })
    return res.status(200).json(company)
}

async function update(req, res) {
    const { id } = req.params
    const company = await prisma.company.update({
        where: { id: Number(id) },
        data: { name: 'updated' },
    })
    return res.status(200).json(project)
}

async function destroy(req, res) {
    const { id } = req.params
    const company = await prisma.company.delete({
        where: {
            id: Number(id),
        },
    })
    return res.status(200).json(company)
}

module.exports = {
    get,
    store,
    show,
    update,
    destroy
}