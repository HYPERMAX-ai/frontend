// store/index.js
import { createStore } from "vuex";
import uiStore from "@/store/modules/ui-store";

export default createStore({
  modules: {
    ui: uiStore,
  }
});