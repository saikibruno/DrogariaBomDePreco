import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class VendaValidator {
  constructor(protected ctx: HttpContextContract) { }

  public schema = schema.create({   
    funcionarioId: schema.number([
      rules.exists({ table: 'funcionarios', column: 'id' })
    ]),
    clienteId: schema.number([
      rules.exists({ table: 'clientes', column: 'id' })
    ]),

  })

  public messages: CustomMessages = {
    required: 'O campo {{field}} é obrigatório.',
    exists: 'Não existe esse ID na tabela.',
    number: 'O campo {{field}} é composto apenas por números'
  }
}
