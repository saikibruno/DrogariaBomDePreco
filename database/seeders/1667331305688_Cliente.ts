import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Cliente from 'App/Models/Cliente'

export default class extends BaseSeeder {
  public async run () {
    await Cliente.createMany([
      {
        nome: "Souza Fulano",
        cpf: "62345678912",
        email: "soufulano@email.com",
        telefone: "61999999999",
        cep: "12345678",
        endereco: "Avenida",
        complemento: "lado direito",
        numero: "40"
      },
      {
        nome: "Silva Fulano",
        cpf: "72345678912",
        email: "silfulano@email.com",
        telefone: "61999999999",
        cep: "12345678",
        endereco: "Avenida",
        complemento: "lado direito",
        numero: "40"
      },
      {
        nome: "Souza Beutrano",
        cpf: "82345678912",
        email: "souBeutrano@email.com",
        telefone: "61999999999",
        cep: "12345678",
        endereco: "Avenida",
        complemento: "lado direito",
        numero: "40"
      },
      {
        nome: "Silva Beutrano",
        cpf: "92345678912",
        email: "silbeutrano@email.com",
        telefone: "61999999999",
        cep: "12345678",
        endereco: "Avenida",
        complemento: "lado direito",
        numero: "40"
      },
      {
        nome: "Souza Joãozinho",
        cpf: "10345678912",
        email: "soujoaozinho@email.com",
        telefone: "61999999999",
        cep: "12345678",
        endereco: "Avenida",
        complemento: "lado direito",
        numero: "40"
      },
    ])
  }
}
