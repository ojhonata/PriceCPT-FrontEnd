/*export default class loginService {
  async Cadastro(data) {
    const response = await http.post('api/v1/usuario', {
      nome: data.NOME,
      email: data.EMAIL,
      senha: data.SENHA
    });
    return response.data;
  } */

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
}