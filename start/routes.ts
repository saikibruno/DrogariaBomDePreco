/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return {
    clientes_get: "http://localhost:3333/clientes",
    fornecedor_get: "http://localhost:3333/fornecedor",
    funcionarios_get: "http://localhost:3333/funcionarios",
    produtos_get: "http://localhost:3333/produtos",
    tipos_get: "http://localhost:3333/tipos",
    vendas_get: "http://localhost:3333/vendas",
    venda_produtos_get: "http://localhost:3333/venda_produtos",
  }
})

Route.post('/users', 'UsersController.store')
Route.post('/login', 'UsersController.login')

Route.group(() => {
  Route.resource('/clientes', 'ClientesController').apiOnly()
  Route.resource('/fornecedor', 'FornecedorsController').apiOnly()
  Route.resource('/funcionarios', 'FuncionariosController').apiOnly()
  Route.resource('/produtos', 'ProdutosController').apiOnly()
  Route.resource('/tipos', 'TiposController').apiOnly()
  Route.resource('/vendas', 'VendasController').apiOnly()
  Route.resource('/venda_produtos', 'VendaProdutosController').apiOnly()
}).middleware('auth')