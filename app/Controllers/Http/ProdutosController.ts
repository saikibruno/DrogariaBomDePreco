// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Produto from "App/Models/Produto"
import ProdutoValidator from "App/Validators/ProdutoValidator"

export default class ProdutosController {
    async index({request}) {
        let { nome, descricao, valorAtual, codigoBarra, fornecedorId, tipoId, page } = request.all()

        page = page ? page : 1
        const primeiraPagina = 1
        const quantidadePorPagina = 10

        const produto = Produto
            .query()
            .preload('vendas', (vendasPreload => {
                vendasPreload.preload('cliente').preload('funcionario').preload('vendaProduto')
            }))
            .preload('fornecedor')
            .preload('tipo')

        if (nome) {
            return await produto.where('nome', nome).paginate(page ? page : primeiraPagina, quantidadePorPagina)
        } else if (descricao) {
            return await produto.where('descricao', descricao).paginate(page ? page : primeiraPagina, quantidadePorPagina)
        } else if (valorAtual) {
            return await produto.where('valorAtual', valorAtual).paginate(page ? page : primeiraPagina, quantidadePorPagina)
        } else if (codigoBarra) {
            return await produto.where('codigoBarra', codigoBarra).paginate(page ? page : primeiraPagina, quantidadePorPagina)
        } else if (fornecedorId) {
            return await produto.where('fornecedorId', fornecedorId).paginate(page ? page : primeiraPagina, quantidadePorPagina)
        } else if (tipoId) {
            return await produto.where('tipoId', tipoId).paginate(page ? page : primeiraPagina, quantidadePorPagina)
        } else {
            return await produto.paginate(page ? page : primeiraPagina, quantidadePorPagina)
        }        
    }

    async store({ request }) {
        const dados = await request.validate(ProdutoValidator)

        return Produto.create(dados)
    }

    async show({ request }) {
        const id = await request.param('id')

        return await Produto.query().where('id', id).preload('vendas', (vendasPreload => {
            vendasPreload.preload('cliente').preload('funcionario').preload('vendaProduto')
        }))
        .preload('fornecedor')
        .preload('tipo').firstOrFail()
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
