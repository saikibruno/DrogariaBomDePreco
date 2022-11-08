import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class VendaProduto extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public valor:number

  @column()
  public quantidade:number
  
  @column()
  public vendaId:number
  
  @column()
  public produtoId:number


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
