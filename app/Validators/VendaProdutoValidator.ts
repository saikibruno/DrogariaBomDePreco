import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class VendaProdutoValidator {
  constructor(protected ctx: HttpContextContract) { }

  public schema = schema.create({
    vendaId: schema.number([
      rules.exists({ table: 'vendas', column: 'id' })
    ]),
    produtoId: schema.number([
      rules.exists({ table: 'produtos', column: 'id' })
    ]),
    quantidade: schema.number(),
    valor: schema.number()
  })

  public messages: CustomMessages = {
    required: 'O campo {{field}} é obrigatório.',
    exists: 'Não existe esse ID na tabela.',
    number: 'O campo {{field}} é composto apenas por números'
  }
}
