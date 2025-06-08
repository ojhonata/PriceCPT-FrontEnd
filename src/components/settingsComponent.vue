<template>
  <!-- Botão para abrir Settings -->
  <div
    class="fixed bottom-8 left-4 flex items-center px-3 py-3 rounded-md w-[200px] z-50"
    :style="{ backgroundColor: 'var(--btn-bg)', color: 'var(--btn-text)', borderColor: 'var(--btn-border)' }"
  >
    <img class="w-5 h-5 mr-2" src="../assets/img/settings.png" alt="">
    <button @click="abrirSettings" class="text-base md:text-xl pl-2">{{ $t('button.settings') }}</button>
  </div>

  <!-- Janela de Settings -->
  <div
    ref="menu"
    class="fixed hidden top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-var text-var p-6 rounded-xl w-[90% max-w-[600px] h-[30vh] shadow-2xl z-40"
  >
    <h2 class="text-xl md:text-3xl font-bold mb-4">{{ $t('settings.title') }}</h2>

    <!-- Botão para alternar o tema -->
    <button
      @click="toggleTheme"
      class="px-4 py-2 rounded-md mb-6 transition text-sm md:text-base"
      :style="{ backgroundColor: 'var(--btn-bg)', color: 'var(--btn-text)' }"
    >
      {{ $t('settings.toggleTheme') }}
    </button>

    <!-- Select para trocar idioma -->
    <div>
      <select
        v-model="currentLang"
        @change="changeLanguage(currentLang)"
        class="px-4 py-2 rounded-md transition text-sm md:text-base cursor-pointer w-full max-w-xs border"
        :style="{ backgroundColor: 'var(--btn-bg)', color: 'var(--btn-text)', borderColor: 'var(--btn-border)' }"
        >
        <option value="pt">🇧🇷 {{ $t('settings.portuguese') }}</option>
        <option value="en">🇺🇸 {{ $t('settings.english') }}</option>
        <option value="fr">🇫🇷 {{ $t('settings.french') }}</option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { toggleMenu } from '../assets/js/menu.js'

const menu = ref(null)
const { locale } = useI18n()

// Defina currentLang após pegar locale
const currentLang = ref(locale.value)

function abrirSettings() {
  toggleMenu(menu)
}

function toggleTheme() {
  const html = document.documentElement
  html.classList.toggle('dark')
  const isDark = html.classList.contains('dark')
  localStorage.setItem('tema', isDark ? 'dark' : 'light')
}

function changeLanguage(lang) {
  locale.value = lang
  localStorage.setItem('idioma', lang)
  currentLang.value = lang
}

onMounted(() => {
  const temaSalvo = localStorage.getItem('tema')
  if (temaSalvo === 'dark') {
    document.documentElement.classList.add('dark')
  }
  const idiomaSalvo = localStorage.getItem('idioma')
  if (idiomaSalvo) {
    locale.value = idiomaSalvo
    currentLang.value = idiomaSalvo
  }
})
</script>