import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class FuncionarioValidator {
  constructor(protected ctx: HttpContextContract) { }

  public schema = schema.create({
    nome: schema.string([
      rules.maxLength(100)
    ]),
    cpf: schema.string([
      rules.maxLength(11),
      rules.minLength(11),
    ]),
    telefone: schema.string([
      rules.maxLength(11),
      rules.minLength(11),
    ]),
    email: schema.string([
      rules.maxLength(100),
    ]),
    cep: schema.string.optional([
      rules.maxLength(8),
      rules.minLength(8),
    ]),
    endereco: schema.string.optional([
      rules.maxLength(100),
    ]),
    complemento: schema.string.optional([
      rules.maxLength(100),
    ]),
    numero: schema.string.optional([
      rules.maxLength(100),
    ]),
  })

  public messages: CustomMessages = {
    required: 'O campo {{field}} é obrigatório.',
    maxLength: 'Número máximo de caracteres atingido.',
    minLength: 'Número mínimo de caracteres não atingido.',
  }
}
