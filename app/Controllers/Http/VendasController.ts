// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Venda from "App/Models/Venda"
import VendaValidator from "App/Validators/VendaValidator"

export default class VendasController {
    async index({ request }) {
        let { funcionarioId, clienteId, page } = request.all()

        page = page ? page : 1
        const primeiraPagina = 1
        const quantidadePorPagina = 10

        const venda = Venda
            .query()
            .preload('cliente')
            .preload('funcionario')
            .preload('produtos', (produtosPreload => {
                produtosPreload.preload('tipo').preload('fornecedor')
            }))
            .preload('vendaProduto')

        if (funcionarioId) {
            return await venda.where('funcionarioId', funcionarioId).paginate(page ? page : primeiraPagina, quantidadePorPagina)
        } else if (clienteId) {
            return await venda.where('clienteId', clienteId).paginate(page ? page : primeiraPagina, quantidadePorPagina)
        } else {
            return await venda.paginate(page ? page : primeiraPagina, quantidadePorPagina)
        }
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
            .preload('produtos', (produtosPreload => {
                produtosPreload.preload('tipo').preload('fornecedor')
            }))
            .preload('vendaProduto')
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
