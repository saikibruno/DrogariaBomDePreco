import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class FornecedorValidator {
  constructor(protected ctx: HttpContextContract) { }

  public schema = schema.create({
    nome: schema.string([
      rules.maxLength(100)
    ]),
    cnpj: schema.string([
      rules.maxLength(14),
      rules.minLength(14),
      rules.regex(/([0-9]{11})/),
      rules.unique({ table: 'fornecedors', column: 'cnpj' })
    ]),
    telefone: schema.string([
      rules.maxLength(11),
      rules.minLength(11),
      rules.regex(/([0-9]{11})/)
    ]),
    email: schema.string([
      rules.maxLength(100),
      rules.unique({ table: 'fornecedors', column: 'email' })
    ]),
    cep: schema.string([
      rules.maxLength(8),
      rules.minLength(8),
      rules.regex(/([0-9]{8})/),
    ]),
    endereco: schema.string.optional([
      rules.maxLength(150),
    ]),
    complemento: schema.string.optional([
      rules.maxLength(100),
    ]),
    numero: schema.string.optional([
      rules.maxLength(100),
      rules.regex(new RegExp('^[0-9]*$'))
    ]),
  })

  public messages: CustomMessages = {
    required: 'O campo {{field}} é obrigatório.',
    maxLength: 'Número máximo de caracteres atingido. O {{field}} deve conter {{ options.maxLength }}',
    minLength: 'Número mínimo de caracteres não atingido. O {{field}} deve conter {{ options.minLength }}',
    regex: 'O campo {{field}} deve conter apenas números.',
    unique: 'O {{field}} já cadastrado.'
  }
}
