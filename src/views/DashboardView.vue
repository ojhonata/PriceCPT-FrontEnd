<template>
  <div class="flex h-screen bg-gray-50 text-gray-800">
    <div class="w-64 bg-white border-r">
      <div class="flex items-center justify-center h-20 border-b px-4">
        <img src="../assets/img/logo-PriceCPT.png" alt="PRICECPT Logo" class="h-[100px] w-[100px]" />
      </div>
      <nav class="mt-4 space-y-2 px-4 ">
        <router-link class="flex items-center px-3 py-2 rounded-md bg-orange-100 text-orange-600 font-medium" to="">
          <img class="w-5 h-5 mr-2" src="../assets/img/grafico-de-barras.png" alt="">
          <p class="text-xl">Dashboard</p>
        </router-link>
        <router-link class="flex items-center px-3 py-2 rounded-md hover:bg-orange-100 text-orange-600 font-medium" to="/product">
          <img class="w-5 h-5 mr-2" src="../assets/img/botao-voltar.png" alt="">
          <p class="text-xl">Voltar</p>
        </router-link>
        <router-link to="" class="absolute bottom-8 flex items-center px-3 py-2 rounded-md hover:bg-gray-100">
          <img class="w-5 h-5 mr-2" src="../assets/img/settings.png" alt="">
          <p class="text-xl">Settings</p>
        </router-link>
        <div class="overflow-y-auto max-h-[calc(90vh-200px)] space-y-4">
          <div v-for="produto in produtos" 
          :key="produto.nome"
          @click="selecionarProduto(produto)"
          class="bg-gray-300 p-3 rounded-xl cursor-pointer">
            <img class="m-auto rounded" :src="produto.imagem_url" alt="Imagem do Produto"/>
            <h2 class="font-semibold">{{ produto.nome }}</h2>
            <p>Preço: R$ {{ produto.preco }}</p>
          </div>
        </div>
      </nav>
    </div>

    <main class="flex-1 flex flex-col items-center justify-center relative">
      <usuarioComponent/>
      <graficoProduto v-if="produto" :produto="produto" /> <!--Se a variável produto existir, mostre o componente graficoProduto-->

    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import usuarioComponent from "../components/usuarioComponent.vue"
import graficoProduto from "../components/produtoGraficoComponent.vue"
import ProdutoService from "../../services/produtoService";
const produtos = ref([]);
const produto = ref(null);

onMounted(async () => {
  const service = new ProdutoService();
  produtos.value = await service.getTodosProdutos();
  console.log(produto.value);
});

const selecionarProduto = (p) => {
  produto.value = p;
};
</script>