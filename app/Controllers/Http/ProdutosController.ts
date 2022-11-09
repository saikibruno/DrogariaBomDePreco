// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Produto from "App/Models/Produto"
import ProdutoValidator from "App/Validators/ProdutoValidator"

export default class ProdutosController {
    index() {
        return Produto.query().preload('vendas').preload('fornecedor').preload('tipo').paginate(1, 50)
    }

    async store({ request }) {
        const dados = await request.validate(ProdutoValidator)

        return Produto.create(dados)
    }

    async show({ request }) {
        const id = await request.param('id')

        return await Produto.query().where('id', id).preload('vendas').preload('fornecedor').preload('tipo').firstOrFail()
    }

    async destroy({ request }) {
        const id = request.param('id')
        const dados = await Produto.findOrFail(id)

        return dados.delete()
    }

    async update({ request }) {
        const id = request.param('id')
        const dados = await Produto.findOrFail(id)
        const dado = await request.validate(ProdutoValidator)

        return dados.merge(dado).save()
    }
}
