import { createApp, createSSRApp } from "vue";
import App from "./App.vue";
import router, { migratedLegacyRoute } from "./router";
import "./style.css";

// A legacy hash URL can resolve to a different page than the prerendered root.
// Use a clean mount for that migration to avoid a hydration mismatch.
const app =
  !migratedLegacyRoute && document.getElementById("app")?.hasChildNodes()
    ? createSSRApp(App)
    : createApp(App);
app.use(router);
router.isReady().then(() => app.mount("#app"));
