import Vue from 'vue'
// import VeeValidate,{Validator} from 'vee-validate';
// import zh_CN from 'vee-validate/dist/locale/zh_CN'
// import VueI18n from 'vue-i18n';
// Vue.use(VueI18n)
// const i18n = new VueI18n({
//   locale: 'zh_CN',
// })
// Vue.use(VeeValidate, {
//   i18n,
//   i18nRootKey: 'validation',
//   dictionary: {
//     zh_CN
//   }
// });
import VeeValidate, {Validator} from 'vee-validate';
import cn from 'vee-validate/dist/locale/zh_CN';

Vue.use(VeeValidate);
Validator.localize('cn', cn);

// 修改默认错误提示
const dict = {
  cn: {messages: {required: (name) => `${name}不能为空!`}}  // name接受alias的值.
}
Validator.localize(dict);

Validator.extend('phone', {
  messages: {
    zh_CN:field => field + '必须是11位手机号码',
  },
  validate: value => {
    return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
  }
});