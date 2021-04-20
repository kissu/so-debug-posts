import { createStore } from "vuex";
import covid from "./modules/covid";

export default createStore({
  modules: {
    covid
  }
});
