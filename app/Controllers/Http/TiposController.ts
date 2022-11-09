// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Tipo from "App/Models/Tipo"
import TipoValidator from "App/Validators/TipoValidator"

export default class TiposController {
    index() {
        return Tipo.query().preload('produto').paginate(1, 50)
    }

    async store({ request }) {
        const dados = await request.validate(TipoValidator)

        return Tipo.create(dados)
    }

    async show({ request }) {
        const id = await request.param('id')

        return await Tipo.query().where('id', id).preload('produto').firstOrFail()
    }

    async destroy({ request }) {
        const id = request.param('id')
        const dados = await Tipo.findOrFail(id)

        return dados.delete()
    }

    async update({ request }) {
        const id = request.param('id')
        const dados = await Tipo.findOrFail(id)
        const dado = await request.validate(TipoValidator)

        return dados.merge(dado).save()
    }
}
