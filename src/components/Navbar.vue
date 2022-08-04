<template>
<div>
  <b-navbar toggleable="sm" type="light" variant="light">
    <b-navbar-brand href="#HomeView"><img src="@/assets/catraLogo.png" width="230" height="80" alt=""
      /></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-navbar-nav right>
          <b-nav-item href="#HomeView">Home</b-nav-item>
          <b-nav-item href="#layananKami">Layanan Kami</b-nav-item>
          <b-nav-item href="#journal">Journal</b-nav-item>
          <b-nav-item href="#Keunggulan">Keunggulan</b-nav-item>
          <b-nav-item href="#ContactUs">Contact</b-nav-item>
        </b-navbar-nav>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
  <!-- <div>
    <b-navbar class="ml-auto" type="light" variant="faded">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

      <b-navbar-brand href="https://journalkeberlanjutan.com/"
        ><img src="@/assets/catralg.png" width="230" height="80" alt=""
      /></b-navbar-brand>

      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#HomeView">Home</b-nav-item>
          <b-nav-item href="#layananKami">Layanan</b-nav-item>
          <b-nav-item href="#journal">Journal</b-nav-item>
          <b-nav-item href="#Keunggulan">Keunggulan kami</b-nav-item>
          <b-nav-item href="#ContactUs">Contact</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div> -->
</template>

<script>
export default {
  name: "NavBar",
};
</script>


