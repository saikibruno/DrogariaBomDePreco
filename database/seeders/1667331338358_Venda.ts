import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Venda from 'App/Models/Venda'

export default class extends BaseSeeder {
  public async run () {
    await Venda.createMany([
      {
        funcionarioId:1,
        clienteId:1,        
      },
      {
        funcionarioId:2,
        clienteId:2,      
      },
      {
        funcionarioId:3,
        clienteId:3,
      },
      {
        funcionarioId:4,
        clienteId:4,
      },
      {
        funcionarioId:5,
        clienteId:5,        
      },
    ])
  }
}
