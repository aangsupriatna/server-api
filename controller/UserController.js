const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function get(req, res) {
    const users = await prisma.user.findMany()

    return res.status(200).json(users)
}

async function store(req, res) {
    const { email, name, password } = req.body
    const result = await prisma.user.create({
        data: {
            name,
            email,
            password
        },
    })
    return res.status(200).json(result)
}

async function show(req, res) {
    const { id } = req.params
    const user = prisma.user.findFirst({
        where: {
            id: Number(id)
        },
        include: { project: true },
        orderBy: {
            title: "asc",
        },
        take: -1,
    })
    console.log(user)
    return res.status(200).json(user)
}

async function update(req, res) {
    const { id } = req.params
    const { name, email, password, role } = req.body
    const user = await prisma.user.update({
        where: { id: Number(id) },
        data: {
            name: name,
            email: email,
            password: password,
            role: role
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