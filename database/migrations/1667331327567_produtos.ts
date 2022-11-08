import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'produtos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('nome',100).notNullable()
      table.string('descricao',200).notNullable()
      table.decimal('valor_atual').notNullable()
      table.string('codigo_barra',100).notNullable()

      table.integer('fornecedor_id').unsigned().references('id').inTable('fornecedors').notNullable()
      table.integer('tipo_id').unsigned().references('id').inTable('tipos').notNullable()

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
