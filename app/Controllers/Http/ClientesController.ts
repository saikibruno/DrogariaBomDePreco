// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Cliente from "App/Models/Cliente"
import ClienteUpdateValidator from "App/Validators/ClienteUpdateValidator"
import ClienteValidator from "App/Validators/ClienteValidator"

export default class ClientesController {
    index() {
        return Cliente.query().preload('venda').paginate(1, 50)
    }

    async store({ request }) {
        const dados = await request.validate(ClienteValidator)

        return Cliente.create(dados)
    }

    async show({ request }) {
        const id = await request.param('id')

        return await Cliente.query().where('id', id).preload('venda').firstOrFail()
    }

    async destroy({ request }) {
        const id = request.param('id')
        const dados = await Cliente.findOrFail(id)

        return dados.delete()
    }

    async update({ request }) {
        const id = request.param('id')
        const dados = await Cliente.findOrFail(id)
        const dado = await request.validate(ClienteUpdateValidator)

        return dados.merge(dado).save()
    }
}
