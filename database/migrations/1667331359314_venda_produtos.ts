import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'venda_produtos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('quantidade').notNullable()
      table.decimal('valor').notNullable()
      table.integer('venda_id').unsigned().references('id').inTable('vendas').notNullable()
      table.integer('produto_id').unsigned().references('id').inTable('produtos').notNullable()


      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
