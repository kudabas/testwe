<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand href="#HomeView"
        ><img
          src="@/assets/catraLogo.png"
          width="230"
          height="80"
          alt="logo"
          style="margin-bottom: 10px"
      /></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="topnav ml-auto">
          <b-navbar-nav>
            <b-nav-item href="#HomeView">Home</b-nav-item>
            <b-nav-item
              href="https://drive.google.com/drive/folders/1o4xncwPio_dOFtl4uJGlGI4dPndfXTV4?usp=sharing"
              target="_blank"
              >Discontinued Scopus</b-nav-item
            >
            <b-nav-item href="#layananKami">Services</b-nav-item>
            <b-nav-item href="#journal">Our Journal</b-nav-item>
            <b-nav-item href="#Keunggulan">Expertise</b-nav-item>
            <b-nav-item href="#ProsedurEditing">Procedures</b-nav-item>
            <b-nav-item href="#EditorialT">Editorial Team</b-nav-item>
            <!-- <div class="dropdown">
              <button class="dropbtn">Dropdown</button>
              <div class="dropdown-content">
                <a href="#ProsedurEditing">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div> -->
            <router-link to="/ind">
              <img
                src="@/assets/indonesia.png"
                width="30"
                height="20"
                alt="ind"
            /></router-link>
            <p style="color: white">.</p>
            <router-link to="/">
              <img src="@/assets/UK.png" width="30" height="20" alt="eng"
            /></router-link>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
  <!-- Editorial Team -->
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


