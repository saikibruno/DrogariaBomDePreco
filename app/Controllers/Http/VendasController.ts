// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Venda from "App/Models/Venda"
import VendaValidator from "App/Validators/VendaValidator"

export default class VendasController {
    index() {
        return Venda.query().preload('cliente').preload('funcionario').preload('produtos').paginate(1, 50)
    }

    async store({ request }) {
        const dados = await request.validate(VendaValidator)

        return Venda.create(dados)
    }

    async show({ request }) {
        const id = await request.param('id')

        return await Venda
            .query()
            .where('id', id)
            .preload('cliente')
            .preload('funcionario')
            .preload('produtos')
            .firstOrFail()
    }

    async destroy({ request }) {
        const id = request.param('id')
        const dados = await Venda.findOrFail(id)

        return dados.delete()
    }

    async update({ request }) {
        const id = request.param('id')
        const dados = await Venda.findOrFail(id)
        const dado = await request.validate(VendaValidator)

        return dados.merge(dado).save()
    }
}
