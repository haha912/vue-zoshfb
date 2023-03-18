import * as Vue from 'vue';
import App from './App.vue';
import { createVuetify } from 'vuetify';
import * as directives from 'vuetify/directives';
// import * as components from 'vuetify/components';

const vuetify = createVuetify({
  directives,
  // components,
  // Global configuration
  defaults: {
    global: {
      ripple: false, // default no ripple for all components that support it
    },
    VBtn: {
      flat: true,
      color: 'customBgColor',
    },
  },
});

Vue.createApp(App).use(vuetify).mount('#app');
