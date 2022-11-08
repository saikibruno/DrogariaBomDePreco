import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProdutoValidator {
  constructor(protected ctx: HttpContextContract) { }

  public schema = schema.create({
    nome: schema.string([
      rules.maxLength(100)
    ]),

    descricao: schema.string([
      rules.maxLength(200)
    ]),

    valorAtual: schema.number(),

    codigoBarra: schema.string([
      rules.maxLength(100)
    ]),

    fornecedorId: schema.number([
      rules.exists({ table: 'fornecedors', column: 'id' })
    ]),

    tipoId: schema.number([
      rules.exists({ table: 'tipos', column: 'id' })
    ]),
  })

  public messages: CustomMessages = {
    required: 'O campo {{field}} é obrigatório.',
    maxLength: 'Número máximo de caracteres atingido.',
    minLength: 'Número mínimo de caracteres não atingido.',
    exists: 'Não existe esse ID na tabela.'
  }
}
