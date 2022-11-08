import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Venda from './Venda'

export default class Funcionario extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome:string
  @column()
  public cpf:string
  @column()
  public email:string
  @column()
  public telefone:string
  @column()
  public cep:string
  @column()
  public endereco:string
  @column()
  public complemento:string
  @column()
  public numero:string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(()=>Venda)
  public venda:HasMany<typeof Venda>
}
