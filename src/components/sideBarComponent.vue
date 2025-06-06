<template>

    <div class="hidden md:block w-64 bg-white border-r">
        <div class="flex items-center justify-center h-20 border-b px-4">
            <router-link to="/">
                <img src="../assets/img/logo-PriceCPT.png" alt="PRICECPT Logo"
                    class="h-[80px] w-[80px] md:h-[100px] md:w-[100px]" />
            </router-link>
        </div>
        <nav class="mt-4 space-y-2 px-4 relative">
            <router-link to="/product"
                class="flex items-center px-3 py-2 rounded-md hover:bg-orange-100 text-orange-600 font-medium">
                <img class="w-5 h-5 mr-2" src="../assets/img/find.png" alt="">
                <p class="text-base md:text-xl">Procurar</p>
            </router-link>
            <router-link to="/comoUsar"
                class="flex items-center px-3 py-2 rounded-md hover:bg-orange-100 text-orange-600 font-medium">
                <img class="w-5 h-5 mr-2" src="../assets/img/ideia.png" alt="">
                <p class="text-base md:text-xl">Como usar</p>
            </router-link>
            <settings />
        </nav>
    </div>



</template>
<script setup>
import settings from "../components/settingsComponent.vue"

</script>