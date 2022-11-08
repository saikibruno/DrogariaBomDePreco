import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import VendaProduto from 'App/Models/VendaProduto'

export default class extends BaseSeeder {
  public async run () {
    await VendaProduto.createMany([
      {
        vendaId:1,
        produtoId:1,
        quantidade:3,
        valor:10.80
      },
      {
        vendaId:1,
        produtoId:1,
        quantidade:2,
        valor:10.80
      },
      {
        vendaId:1,
        produtoId:1,
        quantidade:1,
        valor:10.80
      },
      {
        vendaId:2,
        produtoId:2,
        quantidade:1,
        valor:50.20
      },
      {
        vendaId:3,
        produtoId:2,
        quantidade:1,
        valor:50.20
      },
    ])
  }
}
