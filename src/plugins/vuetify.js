import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        background: colors.grey.darken4,
        primary: colors.cyan.darken2,
        error: colors.red.darken2,
      }
    }
  }
});
