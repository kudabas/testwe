<template>
  <div id="app">
    <div>

      <div><NavBar /></div>
      <router-view />
      <div><FooterApp /></div>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/Navbar.vue";
import FooterApp from "./components/Footer.vue";

export default {
  name: "App",
  components: { NavBar, FooterApp },
};
</script>