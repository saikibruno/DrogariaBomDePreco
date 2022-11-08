import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Fornecedor from 'App/Models/Fornecedor'

export default class extends BaseSeeder {
  public async run() {
    await Fornecedor.createMany([
      {
        nome: "CENTRAL MED Distribuidora de Medicamentos LTDA",
        cnpj: "12345673000116",
        email: "cmddm@email.com",
        telefone: "61999999999",
        cep: "12345678",
        endereco: "Avenida",
        complemento: "lado direito",
        numero: "40"
      },
      {
        nome: "LINK MED Distribuidora de Medicamentos LTDA",
        cnpj: "22345673000116",
        email: "lmddm@email.com",
        telefone: "61999999999",
        cep: "12345678",
        endereco: "Avenida",
        complemento: "lado direito",
        numero: "40"
      },
      {
        nome: "DF Genérica Comércio de Produtos Farmacêuticos LTDA",
        cnpj: "32345673000116",
        email: "dgcdpf@email.com",
        telefone: "61999999999",
        cep: "12345679",
        endereco: "Avenida",
        complemento: "lado direito",
        numero: "40"
      },
      {
        nome: "Farma Service Comércio de Produtos Farmacêuticos LTDA",
        cnpj: "42345673000116",
        email: "fscdpf@email.com",
        telefone: "61999999999",
        cep: "12345677",
        endereco: "Avenida",
        complemento: "lado direito",
        numero: "40"
      },
      {
        nome: "MULTFAR Distribuidora de Medicamentos LTDA",
        cnpj: "52345673000116",
        email: "mddm@email.com",
        telefone: "61999999999",
        cep: "12345676",
        endereco: "Avenida",
        complemento: "lado direito",
        numero: "40"
      },
      {
        nome: "NR Distribuidora de Medicamentos LTDA",
        cnpj: "62345673000116",
        email: "nddm@email.com",
        telefone: "61999999999",
        cep: "12345675",
        endereco: "Avenida",
        complemento: "lado direito",
        numero: "40"
      },
      {
        nome: "Planalto Distribuidora de Produtos Farmacêuticos LTDA",
        cnpj: "72345673000116",
        email: "pddpf@email.com",
        telefone: "61999999999",
        cep: "12345674",
        endereco: "Avenida",
        complemento: "lado direito",
        numero: "40"
      },
    ])
  }
}
