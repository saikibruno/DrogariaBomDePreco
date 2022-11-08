// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Fornecedor from "App/Models/Fornecedor"
import FornecedorUpdateValidator from "App/Validators/FornecedorUpdateValidator"
import FornecedorValidator from "App/Validators/FornecedorValidator"

export default class FornecedorsController {
    index() {
        return Fornecedor.query().preload('produto').paginate(1,50)
    }

    async store({ request }) {
        const dados = await request.validate(FornecedorValidator)

        return Fornecedor.create(dados)
    }

    show({ request }) {
        const id = request.param('id')
        return Fornecedor.findOrFail(id)
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
