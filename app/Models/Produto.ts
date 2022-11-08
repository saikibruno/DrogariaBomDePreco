import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Tipo from './Tipo'
import Fornecedor from './Fornecedor'
import Venda from './Venda'

export default class Produto extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public descricao: string

  @column()
  public valorAtual: number

  @column()
  public codigoBarra: string

  @column()
  public fornecedorId: number

  @column()
  public tipoId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Tipo)
  public tipo: BelongsTo<typeof Tipo>

  @belongsTo(() => Fornecedor)
  public fornecedor: BelongsTo<typeof Fornecedor>

  @manyToMany(()=>Venda,{
    pivotTable:'venda_produtos'
  })
  public vendas: ManyToMany<typeof Venda>

}
