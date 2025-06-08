<template>
  <div class="flex h-screen bg-var text-var">
    <sideBarComponent />

    <main class="flex-1 flex flex-col items-center justify-start md:justify-center relative p-4">
      <usuarioComponent />

      <div class="w-full max-w-2xl mt-6 sm:mt-8 px-2 sm:px-4">
        <div class="flex flex-wrap sm:flex-nowrap items-center surface rounded-xl px-4 py-4 gap-y-3 gap-x-4">

          <img class="w-5 h-5 text-orange-500" src="../assets/img/find.png" alt="Buscar" />

          <input
            v-model="link"
            type="text"
            :placeholder="$t('productSearch.placeholder')"
            class="flex-1 outline-none text-sm sm:text-base input-placeholder w-full bg-transparent"
          />

          <button
            @click="cadastrar"
            class="w-full sm:w-auto px-4 py-2 rounded-[10px] primary-btn transition">
            
            {{ $t('productSearch.buscar') }}
          </button>


        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n'
import usuarioComponent from "../components/usuarioComponent.vue"
import sideBarComponent from "../components/sideBarComponent.vue"
import mercadoLivreService from "../../services/mercadoLivreService";
import { useRouter } from 'vue-router';

const { t } = useI18n()

const router = useRouter();
const link = ref('');
const mensagem = ref('');
const produto = ref(null);

async function cadastrar() {
  try {
    const service = new mercadoLivreService();
    const resultado = await service.cadastrarProduto(link.value);
    mensagem.value = resultado.mensagem;
    produto.value = resultado.produto;

    alert(t('productSearch.alertaSucesso'));

    // Só redireciona se houve cadastro ou atualização real
    if (mensagem.value !== "Nenhuma mudança detectada.") {
      router.push('/dashboard');
    }
  } catch (error) {
    alert(t('productSearch.alertaErro'));
  }
}

</script>
