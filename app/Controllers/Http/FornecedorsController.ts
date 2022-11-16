// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Fornecedor from "App/Models/Fornecedor"
import FornecedorUpdateValidator from "App/Validators/FornecedorUpdateValidator"
import FornecedorValidator from "App/Validators/FornecedorValidator"

export default class FornecedorsController {
    async index({ request }) {
        let { nome, cnpj, telefone, email, cep, endereco, complemento, numero, page } = request.all()

        page = page ? page : 1
        const primeiraPagina = 1
        const quantidadePorPagina = 10

        const fornecedor = Fornecedor
            .query()
            .preload('produto', (produtoPreload => {
                produtoPreload.preload('tipo')
            }))

        if (nome) {
            return await fornecedor.where('nome', nome).paginate(page ? page : primeiraPagina, quantidadePorPagina)
        } else if (cnpj) {
            return await fornecedor.where('cnpj', cnpj).paginate(page ? page : primeiraPagina, quantidadePorPagina)
        } else if (telefone) {
            return await fornecedor.where('telefone', telefone).paginate(page ? page : primeiraPagina, quantidadePorPagina)
        } else if (email) {
            return await fornecedor.where('email', email).paginate(page ? page : primeiraPagina, quantidadePorPagina)
        } else if (cep) {
            return await fornecedor.where('cep', cep).paginate(page ? page : primeiraPagina, quantidadePorPagina)
        } else if (endereco) {
            return await fornecedor.where('endereco', endereco).paginate(page ? page : primeiraPagina, quantidadePorPagina)
        } else if (complemento) {
            return await fornecedor.where('complemento', complemento).paginate(page ? page : primeiraPagina, quantidadePorPagina)
        } else if (numero) {
            return await fornecedor.where('numero', numero).paginate(page ? page : primeiraPagina, quantidadePorPagina)
        } else {
            return await fornecedor.paginate(page ? page : primeiraPagina, quantidadePorPagina)
        }

    }

    async store({ request }) {
        const dados = await request.validate(FornecedorValidator)

        return Fornecedor.create(dados)
    }

    async show({ request }) {
        const id = await request.param('id')

        return await Fornecedor
            .query()
            .where('id', id)
            .preload('produto', (produtoPreload => {
                produtoPreload.preload('tipo')
            })).firstOrFail()
    }

    async destroy({ request }) {
        const id = request.param('id')
        const dados = await Fornecedor.findOrFail(id)

        return dados.delete()
    }

    async update({ request }) {
        const id = request.param('id')
        const dados = await Fornecedor.findOrFail(id)
        const dado = await request.validate(FornecedorUpdateValidator)

        return dados.merge(dado).save()
    }
}
