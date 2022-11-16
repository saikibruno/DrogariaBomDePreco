// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Tipo from "App/Models/Tipo"
import TipoValidator from "App/Validators/TipoValidator"

export default class TiposController {
    async index({ request }) {
        let { nome, page } = request.all()

        page = page ? page : 1
        const primeiraPagina = 1
        const quantidadePorPagina = 10

        const tipo = Tipo
            .query()
            .preload('produto', (produtoPreload => {
                produtoPreload
                    .preload('fornecedor')
                    .preload('vendas', (vendasPreload => {
                        vendasPreload.preload('cliente').preload('funcionario').preload('vendaProduto')
                    }))
            }))

        if (nome) {
            return await tipo.where('nome', nome).paginate(page ? page : primeiraPagina, quantidadePorPagina)
        } else {
            return await tipo.paginate(page ? page : primeiraPagina, quantidadePorPagina)
        }
    }

    async store({ request }) {
        const dados = await request.validate(TipoValidator)

        return Tipo.create(dados)
    }

    async show({ request }) {
        const id = await request.param('id')

        return await Tipo
            .query()
            .where('id', id)
            .preload('produto', (produtoPreload => {
                produtoPreload
                    .preload('fornecedor')
                    .preload('vendas', (vendasPreload => {
                        vendasPreload.preload('cliente').preload('funcionario').preload('vendaProduto')
                    }))
            })).firstOrFail()
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
