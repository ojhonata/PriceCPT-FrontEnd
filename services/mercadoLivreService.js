import http from '../src/http-common'

export default class mercadoLivreService {
    async cadastrarProduto(link){
        const response = await http.put('api/MercadoLivre/atualizar-preco', JSON.stringify(link), {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data
    }

  async atualizarPrecoPorMlb(mlb) {
    const response = await http.get(`api/MercadoLivre/atualizar-preco/${mlb}`);
    return response.data;
  }
}