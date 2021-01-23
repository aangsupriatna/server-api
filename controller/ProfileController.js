const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function get(req, res) {
    const user = await prisma.profile.findMany().user()

    return res.status(200).json(user)
}

async function store(req, res) {
    const { userId } = req.params
    const { address } = req.body
    console.log(userId)
    const result = await prisma.profile.create({
        data: {
            address,
            user: {
                connect: { id: Number(userId) }
            }
        },
    })
    return res.status(200).json(result)
}

async function show(req, res) {
    const { userId } = req.params
    const user = await prisma.profile.findUnique().user({
        where: { id: Number(userId) }
    })
    return res.status(200).json(user)
}

async function update(req, res) {
    const { id } = req.params
    const { address } = req.body
    const profile = await prisma.profile.upsert({
        where: { id: Number(id) },
        update: { address: address },
        create: { address: address },
    })
    return res.status(200).json(profile)
}

async function destroy(req, res) {
    const { id } = req.params
    const profile = await prisma.profile.delete({
        where: {
            id: Number(id),
        },
    })
    return res.status(200).json(profile)
}

module.exports = {
    get,
    store,
    show,
    update,
    destroy
}