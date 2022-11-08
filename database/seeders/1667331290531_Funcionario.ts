import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Funcionario from 'App/Models/Funcionario'

export default class extends BaseSeeder {
  public async run () {
    await Funcionario.createMany([
      {
        nome: "Fulano de Souza",
        cpf: "22345678912",
        email: "fusouza@email.com",
        telefone: "61999999999",
        cep: "12345678",
        endereco: "Avenida",
        complemento: "lado direito",
        numero: "40"
      },
      {
        nome: "Fulano da Silva",
        cpf: "12345678912",
        email: "fusilva@email.com",
        telefone: "61999999999",
        cep: "12345678",
        endereco: "Avenida",
        complemento: "lado direito",
        numero: "40"
      },
      {
        nome: "Beutrano de Souza",
        cpf: "32345678912",
        email: "beusouza@email.com",
        telefone: "61999999999",
        cep: "12345678",
        endereco: "Avenida",
        complemento: "lado direito",
        numero: "40"
      },
      {
        nome: "Beutrano da Silva",
        cpf: "42345678912",
        email: "beusilva@email.com",
        telefone: "61999999999",
        cep: "12345678",
        endereco: "Avenida",
        complemento: "lado direito",
        numero: "40"
      },
      {
        nome: "Joãozinho da Silva",
        cpf: "52345678912",
        email: "joaosilva@email.com",
        telefone: "61999999999",
        cep: "12345678",
        endereco: "Avenida",
        complemento: "lado direito",
        numero: "40"
      },
    ])
  }
}
