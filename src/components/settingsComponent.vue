<template>

  <div class="fixed bottom-8 flex items-center px-3 py-2 rounded-md hover:bg-gray-100 w-[200px] border-t">
    <img class="w-5 h-5 mr-2" src="../assets/img/settings.png" alt="">
    <button @click="abrirSettings" class="absolute text-base md:text-xl pl-8">Settings
    </button>
  </div>
  <div ref="menu" class="fixed hidden bottom-16 bg-gray-300 text-white p-4 rounded-lg h-[600px] w-[500px]">
    <h2 class="text-lg font-semibold mb-4 ">Settings</h2>

    
  </div>


</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { toggleMenu } from '../assets/js/menu.js';

const menu = ref(null);
const router = useRouter();

function abrirSettings() {
  toggleMenu(menu);
}

function logout() {

  console.log("Usuário saiu");
  router.push('/');
}
</script>