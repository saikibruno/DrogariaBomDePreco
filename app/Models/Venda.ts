import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Cliente from './Cliente'
import Funcionario from './Funcionario'
import Produto from './Produto'
import VendaProduto from './VendaProduto'

export default class Venda extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public quantidade:number
  
  @column()
  public funcionarioId:number
  
  @column()
  public clienteId:number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Cliente)
  public cliente: BelongsTo<typeof Cliente>
  
  @belongsTo(() => Funcionario)
  public funcionario: BelongsTo<typeof Funcionario>
  
  @hasMany(() => VendaProduto)
  public vendaProduto: HasMany<typeof VendaProduto>

  @manyToMany(()=>Produto,{
    pivotTable:'venda_produtos'
  })
  public produtos: ManyToMany<typeof Produto>
}
