// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import VendaProduto from "App/Models/VendaProduto"
import VendaProdutoValidator from "App/Validators/VendaProdutoValidator"

export default class VendaProdutosController {
    async index({ request }) {
        let { vendaId, produtoId,valor,quantidade, page } = request.all()

        page = page ? page : 1
        const primeiraPagina = 1
        const quantidadePorPagina = 10

        const vendaProduto = VendaProduto
            .query()
            .preload('venda', (vendasPreload => {
                vendasPreload.preload('cliente').preload('funcionario')
            }))

        if (vendaId) {
            return await vendaProduto.where('vendaId', vendaId).paginate(page ? page : primeiraPagina, quantidadePorPagina)
        } else if (produtoId) {
            return await vendaProduto.where('produtoId', produtoId).paginate(page ? page : primeiraPagina, quantidadePorPagina)
        } else if (valor) {
            return await vendaProduto.where('valor', valor).paginate(page ? page : primeiraPagina, quantidadePorPagina)
        } else if (quantidade) {
            return await vendaProduto.where('quantidade', quantidade).paginate(page ? page : primeiraPagina, quantidadePorPagina)
        } else {
            return await vendaProduto.paginate(page ? page : primeiraPagina, quantidadePorPagina)
        }
    }

    async store({ request }) {
        const dados = await request.validate(VendaProdutoValidator)

        return VendaProduto.create(dados)
    }

    async show({ request }) {
        const id = await request.param('id')

        
        return await VendaProduto
            .query()
            .where('id', id)     
            .preload('venda', (vendasPreload => {
                vendasPreload.preload('cliente').preload('funcionario')
            }))
            .firstOrFail()
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
