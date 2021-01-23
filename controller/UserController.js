const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function get(req, res) {
    const users = await prisma.user.findMany({
        include: { company: true, profile: true }
    })

    return res.status(200).json(users)
}

async function store(req, res) {
    const { email, name, password, address } = req.body
    const result = await prisma.user.create({
        data: {
            name,
            email,
            password,
            profile: {
                address: address
            }
        },
    })
    return res.status(200).json(result)
}

async function show(req, res) {
    const { id } = req.params
    const user = await prisma.user.findUnique({
        include: { company: true, profile: true },
        where: { id: Number(id) }
    })
    return res.status(200).json(user)
}

async function update(req, res) {
    const { id } = req.params
    const { name, email, password, role, address } = req.body
    const user = await prisma.user.update({
        include: { profile: true },
        where: { id: Number(id) },
        data: {
            name: name,
            email: email,
            password: password,
            role: role,
            profile: {
                upsert: {
                    create: { address: address },
                    update: { address: address },
                }
            }
        }
    })
    return res.status(200).json(user)
}

async function destroy(req, res) {
    const { id } = req.params
    const user = await prisma.user.delete({
        where: {
            id: Number(id),
        },
    })
    return res.status(200).json(user)
}

module.exports = {
    get,
    store,
    show,
    update,
    destroy
}