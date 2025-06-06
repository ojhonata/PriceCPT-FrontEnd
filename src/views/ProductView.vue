<template>
  <div class="flex h-screen bg-gray-50 text-gray-800">
    <sideBarComponent/>


    <main class="flex-1 flex flex-col items-center justify-start md:justify-center relative p-4">
      <usuarioComponent/>

      <div class="w-full max-w-2xl mt-8 px-2 sm:px-4">
        <div class="flex flex-col sm:flex-row items-center bg-white rounded-xl shadow-md border px-4 py-3 gap-3 sm:gap-0">
          <img class="w-5 h-5 text-orange-500 mr-0 sm:mr-3" src="../assets/img/find.png" alt="">
          <input v-model="link"
            type="text"
            placeholder="Cole o link do produto do Mercado Livre..."
            class="flex-1 outline-none text-sm placeholder-gray-500 w-full sm:w-auto"
          />

          

          <button @click="cadastrar" class="w-full sm:w-auto px-4 py-1 bg-orange-500 text-white rounded-[10px] mt-2 sm:mt-0">
            Buscar
          </button>

          <router-link to="/dashboard" class="flex items-center px-3 py-2 rounded-md hover:bg-gray-100 mt-2 sm:mt-0">
            <img class="w-5 h-5 mr-2" src="../assets/img/settings.png" alt="">
            <p class="text-sm sm:text-xl">Teste</p>
          </router-link>
        </div>
      </div>
    </main>
  </div>
  
</template>

<script setup>
import { ref } from 'vue';
import usuarioComponent from "../components/usuarioComponent.vue"
import mercadoLivreService from "../../services/mercadoLivreService";
import sideBarComponent from "../components/sideBarComponent.vue"

const link = ref('');
const mensagem = ref('');
const produto = ref(null);

async function cadastrar() {
  try {
    const service = new mercadoLivreService();
    const resultado = await service.cadastrarProduto(link.value);
    mensagem.value = resultado.mensagem;
    produto.value = resultado.produto;
    alert('Produto cadastrado')
    router.push('/dashboard');
  } catch (error) {
    alert('Erro ao cadastrar')
  }
}


</script>
