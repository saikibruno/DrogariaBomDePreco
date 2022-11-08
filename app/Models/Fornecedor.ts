import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Produto from './Produto'

export default class Fornecedor extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column()
  public nome:string
  @column()
  public cnpj:string
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

  @hasMany(()=>Produto)
  public produto:HasMany<typeof Produto>
}
