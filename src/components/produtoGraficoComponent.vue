<template>
  <div class="h-full w-full p-6 rounded">
    <div class="flex gap-4 items-center mb-6">
      <img :src="produto.imagem_url" class="w-24 h-24" />
      <div>
        <h2 class="text-2xl font-bold">{{ produto.nome }}</h2>
        <p class="text-lg text-gray-500">Preço atual: R$ {{ produto.preco }}</p>
        <p class="text-lg text-gray-500">Estoque: {{ produto.estoque }}</p>
      </div>
      <div class="font-bold bg-amber-600 text-gray-700 hover:text-white hover:bg-amber-500 items-center ml-[50px] px-4 py-5 rounded-md cursor-pointer max-w-md">
        <button @click="selecionarProduto(produto)">Atualizar Produto</button>
      </div>
    </div>

    <div class="w-[100%] h-[85%] items-center justify-center bg-gray-200 px-10">
      <canvas ref="canvas" height="500" width="1000"></canvas>
      <div v-if="!temAlteracoes">
        <p class="text-gray-400 text-sm mt-2">Este produto ainda não possui histórico de alterações.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, nextTick, computed } from 'vue';
import Chart from 'chart.js/auto';
import MercadoLivreService from "../../services/mercadoLivreService"

const selecionarProduto = async (p) => {
  const service = new MercadoLivreService()

  try {
    const resultado = await service.atualizarPrecoPorMlb(p.mlb)

    if (resultado.produto) {
      produto.value = { ...resultado.produto }

      const index = produtos.value.findIndex(
        prod => prod.id_produto === resultado.produto.id_produto
      )
      if (index !== -1) {
        produtos.value[index] = { ...resultado.produto }
      }
    } else {
      produto.value = { ...p }
    }
  } catch (error) {
    console.error('Erro ao atualizar produto:', error)
    produto.value = { ...p }
  }
}


const props = defineProps({
  produto: Object
});

const canvas = ref(null);
let meuGrafico = null;

const temAlteracoes = computed(() => {
  return props.produto.alteracaoProdutos && props.produto.alteracaoProdutos.length > 0;
});

function desenharGrafico() {
  if (meuGrafico) {
    meuGrafico.destroy();
  }

  const contexto = canvas.value.getContext('2d');

  let labels = [];
  let precosAntigos = [];
  let precoBase = [];
  let precoAtual = [];

  if (temAlteracoes.value) {
    labels = props.produto.alteracaoProdutos.map(item =>
      new Date(item.data_alteracao).toLocaleDateString()
    );
    precosAntigos = props.produto.alteracaoProdutos.map(item => item.preco_antigo);
    precoBase = props.produto.alteracaoProdutos.map(() => props.produto.preco_base);
    precoAtual = props.produto.alteracaoProdutos.map(() => props.produto.preco);
  } else {
    labels = ['Hoje'];
    precosAntigos = [];
    precoBase = [props.produto.preco_base];
    precoAtual = [props.produto.preco];
  }

  meuGrafico = new Chart(contexto, {
    type: 'bar',
    data: {
      labels,
      datasets: [
        {
          label: 'Preço Antigo',
          data: precosAntigos,
          backgroundColor: '#00000'
        },
        {
          label: 'Preço Base',
          data: precoBase,
          backgroundColor: '#7F8C8D'
        },
        {
          label: 'Preço Atual',
          data: precoAtual,
          backgroundColor: '#F39C12'
        }

      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true
        }
      }
    }
  });
}

watch(
  () => props.produto,
  async (novoProduto) => {
    if (novoProduto?.preco) {
      await nextTick();
      desenharGrafico();
    }
  },
  { immediate: true }
);
</script>