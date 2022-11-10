import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Venda from './Venda'

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

  @belongsTo(() => Venda)
  public venda: BelongsTo<typeof Venda>
}
