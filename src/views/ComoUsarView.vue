<template>
  <div class="flex flex-col md:flex-row h-screen bg-var text-var overflow-hidden">
    <sideBarComponent />

    <main class="flex-1 flex flex-col items-center justify-start relative overflow-y-auto px-4 py-6 sm:px-6 md:px-8">
      <usuarioComponent />

      <div class="w-full max-w-6xl mt-4 sm:mt-6 md:mt-8">
        <div class="flex flex-col items-center bg-var rounded-xl shadow-md border border-[var(--surface-border)] px-4 py-6 sm:px-6 md:px-8 space-y-8">
          
          <p class="text-var text-base sm:text-lg md:text-2xl font-bold italic font-sans text-left w-full">
            {{ $t('home.pesquiseProduto') }}<br>
            <span class="font-normal text-sm sm:text-base md:text-lg text-var">
              {{ $t('home.pesquiseProdutoDesc') }}
            </span><br><br>
            <img class="w-full max-w-5xl h-auto rounded object-contain mx-auto" src="../assets/img/capturaFinder.png" alt="">
          </p>

          <p class="text-var text-base sm:text-lg md:text-2xl font-bold italic font-sans text-left w-full">
            {{ $t('home.vejaGraficoPrecos') }}<br>
            <span class="font-normal text-sm sm:text-base md:text-lg text-var">
              {{ $t('home.vejaGraficoPrecosDesc') }}
            </span>
          </p>

          <p class="text-var text-base sm:text-lg md:text-2xl font-bold italic font-sans text-left w-full">
            {{ $t('home.recebaAtualizacoes') }}<br>
            <span class="font-normal text-sm sm:text-base md:text-lg text-var">
              {{ $t('home.recebaAtualizacoesDesc') }}
            </span><br><br>
            <img class="w-full max-w-5xl h-auto rounded object-contain mx-auto" src="../assets/img/logo-PriceCPT.png" alt="">
          </p>

          <p class="text-var text-base sm:text-lg md:text-2xl font-bold italic font-sans text-left w-full">
            {{ $t('home.suporteMensagem') }}<br>
            <span class="font-normal text-sm sm:text-base md:text-lg text-var">
              {{ $t('home.boasCompras') }}
            </span>
          </p>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import usuarioComponent from "../components/usuarioComponent.vue"
import sideBarComponent from "../components/sideBarComponent.vue"
</script>
