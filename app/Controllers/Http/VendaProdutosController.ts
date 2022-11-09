// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import VendaProduto from "App/Models/VendaProduto"
import VendaProdutoValidator from "App/Validators/VendaProdutoValidator"

export default class VendaProdutosController {
    index() {
        return VendaProduto.query().paginate(1, 50)
    }

    async store({ request }) {
        const dados = await request.validate(VendaProdutoValidator)

        return VendaProduto.create(dados)
    }

    async show({ request }) {
        const id = await request.param('id')

        return await VendaProduto.query().where('id', id).firstOrFail()
    }

    async destroy({ request }) {
        const id = request.param('id')
        const dados = await VendaProduto.findOrFail(id)

        return dados.delete()
    }

    async update({ request }) {
        const id = request.param('id')
        const dados = await VendaProduto.findOrFail(id)
        const dado = await request.validate(VendaProdutoValidator)

        return dados.merge(dado).save()
    }
}
