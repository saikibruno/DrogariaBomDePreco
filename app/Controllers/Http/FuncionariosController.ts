// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Funcionario from "App/Models/Funcionario"
import FuncionarioUpdateValidator from "App/Validators/FuncionarioUpdateValidator"
import FuncionarioValidator from "App/Validators/FuncionarioValidator"

export default class FuncionariosController {
    index() {
        return Funcionario.query().preload('venda').paginate(1, 50)
    }

    async store({ request }) {
        const dados = await request.validate(FuncionarioValidator)

        return Funcionario.create(dados)
    }

    async show({ request }) {
        const id = await request.param('id')

        return await Funcionario.query().where('id', id).preload('venda').firstOrFail()
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
