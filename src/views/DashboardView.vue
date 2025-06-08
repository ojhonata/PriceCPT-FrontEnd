<template>
  <div class="flex h-screen bg-var text-var">
    <!-- Sidebar -->
    <div class="w-64 bg-var border-r border-[var(--surface-border)]">
      <div class="flex items-center justify-center h-20 border-b border-[var(--surface-border)] px-4">
        <img src="../assets/img/logo-PriceCPT.png" alt="PRICECPT Logo" class="h-[100px] w-[100px]" />
      </div>

      <!-- Navegação -->
      <nav class="mt-4 space-y-2 px-4 relative">
        <router-link to="/dashboard"
          class="flex items-center px-3 py-2 rounded-md hover:bg-[var(--hover-surface)] text-[var(--primary)] font-medium">
          <img class="w-5 h-5 mr-2" src="../assets/img/grafico-de-barras.png" alt="">
          <p class="text-base md:text-xl text-var">{{ $t('sidebar.dashboard') }}</p>
        </router-link>

        <router-link to="/product"
          class="flex items-center px-3 py-2 rounded-md hover:bg-[var(--hover-surface)] text-[var(--primary)] font-medium">
          <img class="w-5 h-5 mr-2" src="../assets/img/botao-voltar.png" alt="">
          <p class="text-base md:text-xl text-var">{{ $t('sidebar.voltar') }}</p>
        </router-link>

        <!-- Lista de produtos -->
        <div class="overflow-y-auto max-h-[calc(90vh-200px)] space-y-4">
          <div v-for="produto in produtosOrdenados" :key="produto.nome" @click="selecionarProduto(produto)"
            class="bg-[var(--surface)] p-3 rounded-xl cursor-pointer">
            <img class="m-auto rounded" :src="produto.imagem_url" alt="Imagem do Produto" />
            <h2 class="font-semibold text-var">{{ produto.nome }}</h2>
            <p class="text-var">{{ $t('sidebar.preco') }}: R$ {{ produto.preco }}</p>
          </div>
        </div>
        <settings />
      </nav>
    </div>

    <!-- Conteúdo principal -->
    <main class="flex-1 flex flex-col items-center justify-center relative bg-var text-var">
      <usuarioComponent />
      <graficoProduto v-if="produto" :produto="produto" />
    </main>
  </div>
</template>

<script setup>

import { ref, onMounted, computed } from 'vue'
import usuarioComponent from "../components/usuarioComponent.vue"
import graficoProduto from "../components/produtoGraficoComponent.vue"
import ProdutoService from "../../services/produtoService"
import settings from "../components/settingsComponent.vue"


const produtos = ref([])
const produto = ref(null)

onMounted(async () => {
  const service = new ProdutoService()
  produtos.value = await service.getTodosProdutos()
  console.log('Produtos recebidos:', produtos.value)
})

const selecionarProduto = (p) => {
  produto.value = p
}

// Ordenar produtos por preço decrescente
const produtosOrdenados = computed(() => {
  return [...produtos.value].sort((a, b) => b.id_produto - a.id_produto)
})


</script>
