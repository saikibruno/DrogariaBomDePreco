import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Produto from 'App/Models/Produto'

export default class extends BaseSeeder {
  public async run() {
    await Produto.createMany([
      {
        nome: "Alprazolam",
        descricao: "Descrição breve",
        valorAtual: 10.80,
        codigoBarra: "123456789",
        fornecedorId:2,
        tipoId:2
      },
      {
        nome: "Bisacodil",
        descricao: "Descrição breve",
        valorAtual: 50.20,
        codigoBarra: "223456789",
        fornecedorId:1,
        tipoId:1
      },
      {
        nome: "Cloreto de cálcio",
        descricao: "Descrição breve",
        valorAtual: 2.00,
        codigoBarra: "323456789",
        fornecedorId:3,
        tipoId:3
      },
      {
        nome: "Metadona",
        descricao: "Descrição breve",
        valorAtual: 100.00,
        codigoBarra: "423456789",
        fornecedorId:4,
        tipoId:4
      },
      {
        nome: "Nesiritida",
        descricao: "Descrição breve",
        valorAtual: 20.80,
        codigoBarra: "523456789",
        fornecedorId:5,
        tipoId:5
      },
      {
        nome: "Opicapona",
        descricao: "Descrição breve",
        valorAtual: 30.00,
        codigoBarra: "623456789",
        fornecedorId:6,
        tipoId:6
      },
      {
        nome: "Pazopanibe",
        descricao: "Descrição breve",
        valorAtual: 40,
        codigoBarra: "723456789",
        fornecedorId:7,
        tipoId:7
      },
      {
        nome: "Salsalato",
        descricao: "Descrição breve",
        valorAtual: 80.00,
        codigoBarra: "823456789",
        fornecedorId:6,
        tipoId:7
      },
    ])
  }
}
