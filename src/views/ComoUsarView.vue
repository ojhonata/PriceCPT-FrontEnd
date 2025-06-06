<template>
  <div class="flex flex-col md:flex-row h-screen bg-gray-50 text-gray-800 overflow-hidden">
    <sideBarComponent/>
    


    
    <main class="flex-1 flex flex-col items-center justify-start relative overflow-y-auto p-4">
      <usuarioComponent />

      <div class="w-full max-w-6xl mt-8">
        <div class="flex flex-col items-center bg-white rounded-xl shadow-md border px-4 py-6 space-y-8">
          
          <p class="text-gray-700 text-xl md:text-2xl font-bold italic font-sans text-left w-full">
            Pesquise o Produto<br>
            <span class="font-normal">Você pode buscar pelo nome do produto ou colar o link do anúncio do Mercado Livre. O PriceCPT vai localizar o item para você.</span><br><br>
            <img class="w-full max-w-5xl h-auto rounded" src="../assets/img/capturaFinder.png" alt="">
          </p>

          <p class="text-gray-700 text-xl md:text-2xl font-bold italic font-sans text-left w-full">
            Veja o Gráfico de Preços<br>
            <span class="font-normal">Depois que o produto for encontrado, o app mostra um gráfico com a variação de preços ao longo do tempo. Assim, você sabe se o preço está subindo, caindo ou se manteve estável.</span>
          </p>

          <p class="text-gray-700 text-xl md:text-2xl font-bold italic font-sans text-left w-full">
            Receba Atualizações<br>
            <span class="font-normal">O aplicativo se conecta com a API do Mercado Livre e faz atualizações frequentes para te mostrar os preços mais recentes.</span><br><br>
            <img class="w-full max-w-5xl h-auto rounded" src="../assets/img/logo-PriceCPT.png" alt="">
          </p>

          <p class="text-gray-700 text-xl md:text-2xl font-bold italic font-sans text-left w-full">
            Se tiver dúvidas ou quiser sugerir melhorias, o suporte está à disposição!<br>
            Boas compras e bons negócios com o PriceCPT!
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
