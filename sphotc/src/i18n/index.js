//lang.js
  import Vue from 'vue'
  import VueI18n from 'vue-i18n'
  // import VueI18n,{ createI18n } from 'vue-i18n'

  import en from './en'
  import tw from './tw'
  import cn from './cn'
  import th from './th'

  Vue.use(VueI18n)

  const locale = 'cn'

  const messages = {
    tw,
    en,
    cn,
    th
  }

  // const i18n = createI18n({
  //   /** 默认值 */
  //   locale,
  //   messages
  // })

  const i18n = new VueI18n({
    /** 默认值 */
    locale,
    messages
  })
  export default i18n
