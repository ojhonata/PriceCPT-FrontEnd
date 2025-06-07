<template>
  <div class="h-full w-full p-6 rounded">
    <div class="flex gap-4 items-center mb-6">
      <img :src="produto.imagem_url" class="w-24 h-24" />
      <div>
        <h2 class="text-2xl font-bold">{{ produto.nome }}</h2>
        <p class="text-lg text-gray-700">Preço atual: R$ {{ produto.preco }}</p>
        <p class="text-lg text-gray-700">Estoque: {{ produto.estoque }}</p>
      </div>
    </div>
    <div class="w-[100%] h-[100%] items-center justify-center bg-white px-4">
      <canvas ref="canvas" height="300"></canvas>
      <div v-if="!temAlteracoes">
        <p class="text-gray-500 text-sm mt-2">Este produto ainda não possui histórico de alterações. Exibindo preço
          atual.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, nextTick, computed } from 'vue';
import Chart from 'chart.js/auto';

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
          backgroundColor: '#7F8C8D'
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
