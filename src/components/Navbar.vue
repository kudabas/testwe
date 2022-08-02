<template>
  <div>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="https://journalkeberlanjutan.com/"
        ><img src="@/assets/catraLogo.png" width="250" height="80" alt=""
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ml-auto">
          <a class="nav-item nav-link" href="#HomeView"
            >Home <span class="sr-only">(current)</span></a
          >
          <a class="nav-item nav-link" href="#LayananKami">Layanan Kami</a>
          <a class="nav-item nav-link" href="#journal">Journal Kami</a>
          <a class="nav-item nav-link" href="#Indexing">Indexing</a>
          <a class="nav-item nav-link" href="#ContactUs">Contact Us</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
