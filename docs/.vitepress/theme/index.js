import DefaultTheme from "vitepress/theme";
import Star from "../../../components/Star.vue";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("star", Star);
  },
};
