// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Funcionario from "App/Models/Funcionario"
import FuncionarioUpdateValidator from "App/Validators/FuncionarioUpdateValidator"
import FuncionarioValidator from "App/Validators/FuncionarioValidator"

export default class FuncionariosController {
    async index({ request }) {
        let { nome, cpf, telefone, email, cep, endereco, complemento, numero, page } = request.all()

        page = page ? page : 1
        const primeiraPagina = 1
        const quantidadePorPagina = 10

        const funcionario = Funcionario
            .query()
            .preload('venda', (vendaPreload => {
                vendaPreload                    
                    .preload('produtos', (produtoPreload => {
                        produtoPreload.preload('tipo').preload('fornecedor')
                    }))
                    .preload('cliente')
                    .preload('vendaProduto')
            }))

        if (nome) {
            return await funcionario.where('nome', nome).paginate(page ? page : primeiraPagina, quantidadePorPagina)
        } else if (cpf) {
            return await funcionario.where('cpf', cpf).paginate(page ? page : primeiraPagina, quantidadePorPagina)
        } else if (telefone) {
            return await funcionario.where('telefone', telefone).paginate(page ? page : primeiraPagina, quantidadePorPagina)
        } else if (email) {
            return await funcionario.where('email', email).paginate(page ? page : primeiraPagina, quantidadePorPagina)
        } else if (cep) {
            return await funcionario.where('cep', cep).paginate(page ? page : primeiraPagina, quantidadePorPagina)
        } else if (endereco) {
            return await funcionario.where('endereco', endereco).paginate(page ? page : primeiraPagina, quantidadePorPagina)
        } else if (complemento) {
            return await funcionario.where('complemento', complemento).paginate(page ? page : primeiraPagina, quantidadePorPagina)
        } else if (numero) {
            return await funcionario.where('numero', numero).paginate(page ? page : primeiraPagina, quantidadePorPagina)
        } else {
            return await funcionario.paginate(page ? page : primeiraPagina, quantidadePorPagina)
        }

    }

    async store({ request }) {
        const dados = await request.validate(FuncionarioValidator)

        return Funcionario.create(dados)
    }

    async show({ request }) {
        const id = await request.param('id')

        return await Funcionario.query().where('id', id).preload('venda', (vendaPreload => {
            vendaPreload                    
                .preload('produtos', (produtoPreload => {
                    produtoPreload.preload('tipo').preload('fornecedor')
                }))
                .preload('cliente')
                .preload('vendaProduto')
        })).firstOrFail()
    }

    async destroy({ request }) {
        const id = request.param('id')
        const dados = await Funcionario.findOrFail(id)

        return dados.delete()
    }

    async update({ request }) {
        const id = request.param('id')
        const dados = await Funcionario.findOrFail(id)
        const dado = await request.validate(FuncionarioUpdateValidator)

        return dados.merge(dado).save()
    }
}
