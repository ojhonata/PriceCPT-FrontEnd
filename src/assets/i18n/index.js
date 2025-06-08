import { createI18n } from 'vue-i18n'
import pt from './pt-br.js'
import en from './en.js'
import fr from './fr.js'

const i18n = createI18n({
  legacy: false,
  locale: 'pt', // idioma inicial: pt, en ou fr
  fallbackLocale: 'en',
  messages: {
    pt,
    en,
    fr  // <- adicionado aqui
  }
})

export default i18n
