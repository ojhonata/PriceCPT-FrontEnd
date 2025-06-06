import http from '../src/http-common'

export default class ProdutoService{
    async getTodosProdutos() {
        const response = await http.get('api/v1/produto');
        return response.data
    }

    async buscrProduto(termo){
        const response = await http.get(`api/v1/produto/buscar/${termo}`)
        return response.data
    }
}