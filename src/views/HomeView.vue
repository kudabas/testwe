<template>
  <div id="HomeView" class="body--wrapper">
    <body>
      <!-- BANNER-TOP -->
      <section class="banner-top">
        <div class="container-fluid" id="banner-container">
          <div class="row" id="banner-row">
            <div class="col-md-6" id="banner-col">
              <h3>JURNAL</h3>
            </div>
          </div>
        </div>
      </section>
    </body>
    <body>
      <!-- LAYANAN KAMI -->
      <section>
        <div id="LayananKami" class="container">
          <div class="title text-center">
            <h3>LAYANAN KAMI</h3>
          </div>
          <div class="mt-3">
            <b-card-group deck class="mb-3">
              <b-card
                border-variant="light"
                icon="camera"
                font-scale="0.5"
                header="Asistensi Indexing DOAJ"
                class="text-center"
              >
                <b-card-text
                  >Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.</b-card-text
                >
              </b-card>
              <b-card
                border-variant="light"
                header="Develop Open Journal System"
                class="text-center"
              >
                <b-card-text
                  >Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.</b-card-text
                >
              </b-card>
              <b-card
                border-variant="light"
                header="Pengolahan Data"
                class="text-center"
              >
                <b-card-text
                  >Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.</b-card-text
                >
              </b-card>
            </b-card-group>
            <b-card-group deck class="mb-3">
              <b-card
                border-variant="light"
                header="Proofreading"
                class="text-center"
              >
                <b-card-text
                  >Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.</b-card-text
                >
              </b-card>
              <b-card
                border-variant="light"
                header="Asistensi Publikasi"
                class="text-center"
              >
                <b-card-text
                  >Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.</b-card-text
                >
              </b-card>
            </b-card-group>
          </div>
        </div>
      </section>
    </body>
    <!-- JOURNAL KAMI -->
    <section id="journal" class="intermezo-banner-top">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="pull-left"></div>
            <div class="pull-right">
              <div class="title text-center">
                <h3>JOURNAL KAMI</h3>
              </div>

              <!-- Corousel -->
              <div>
                <b-carousel
                  id="carousel-1"
                  v-model="slide"
                  :interval="4000"
                  controls
                  indicators
                  background="#ababab"
                  style="text-shadow: 1px 1px 2px #333"
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd"
                >
                  <!-- Text slides with image -->
                  <a href="https://journalkeberlanjutan.com/index.php/ijesss">
                    <b-carousel-slide
                      caption="First slide"
                      text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                      img-src="@/assets/catraLogo.png"
                    ></b-carousel-slide>
                  </a>

                  <!-- Text slides with image -->
                  <a href="https://journalkeberlanjutan.com/index.php/jtep">
                    <b-carousel-slide
                      caption="First slide"
                      text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                      img-src="@/assets/catraLogo.png"
                    ></b-carousel-slide>
                  </a>

                  <!-- Text slides with image -->
                  <a href="https://journalkeberlanjutan.com/index.php/ahjpm">
                    <b-carousel-slide
                      caption="First slide"
                      text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                      img-src="@/assets/catraLogo.png"
                    ></b-carousel-slide>
                  </a>

                  <!-- Text slides with image -->
                  <a href="https://journalkeberlanjutan.com/index.php/JoGTA">
                    <b-carousel-slide
                      caption="First slide"
                      text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                      img-src="@/assets/catraLogo.png"
                    ></b-carousel-slide>
                  </a>

                  <!-- Text slides with image -->
                  <a href="https://journalkeberlanjutan.com/index.php/ijaird">
                    <b-carousel-slide
                      caption="First slide"
                      text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                      img-src="@/assets/catraLogo.png"
                    ></b-carousel-slide>
                  </a>

                  <!-- Text slides with image -->
                  <a href="https://journalkeberlanjutan.com/index.php/ijsemacs">
                    <b-carousel-slide
                      caption="First slide"
                      text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                      img-src="@/assets/catraLogo.png"
                    ></b-carousel-slide>
                  </a>

                  <!-- Text slides with image -->
                  <a href="https://journalkeberlanjutan.com/index.php/jisdb">
                    <b-carousel-slide
                      caption="First slide"
                      text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                      img-src="@/assets/catraLogo.png"
                    ></b-carousel-slide>
                  </a>

                  <!-- Text slides with image -->
                  <a href="https://journalkeberlanjutan.com/">
                    <b-carousel-slide
                      caption="First slide"
                      text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                      img-src="@/assets/catraLogo.png"
                    ></b-carousel-slide>
                  </a>
                </b-carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- INDEXING -->
    <section class="page-section" id="Indexing">
      <div class="container">
        <div class="title text-center">
          <h3>INDEXING</h3>
        </div>
        <div class="containers">
          <img class="item1" src="@/assets/Indexing/abdc.png" />
          <img
            class="item1"
            href="https://bootstrap-vue.org/docs/components/card"
            src="@/assets/Indexing/base.png"
          />
          <img class="item1" src="@/assets/Indexing/cabi.png" />
          <img class="item1" src="@/assets/Indexing/conpernecus.png" />
          <img class="item1" src="@/assets/Indexing/dimension.png" />
          <img class="item1" src="@/assets/Indexing/doaj.png" />
          <img class="item1" src="@/assets/Indexing/doi.png" />
          <img class="item1" src="@/assets/Indexing/DRJI.png" />
          <img class="item1" src="@/assets/Indexing/ebsco.png" />
          <img class="item1" src="@/assets/Indexing/garuda.png" />
          <img class="item1" src="@/assets/Indexing/google.png" />
          <img class="item1" src="@/assets/Indexing/ISJD.png" />
          <img class="item1" src="@/assets/Indexing/ONESEARCH.png" />
          <img class="item1" src="@/assets/Indexing/publon.png" />
          <img class="item1" src="@/assets/Indexing/road.png" />
          <img class="item1" src="@/assets/Indexing/sinta.png" />
          <img class="item1" src="@/assets/Indexing/wos.png" />
        </div>
      </div>
    </section>

    <!-- CONTACT US -->
    <section id="ContactUs">
      <div class="container">
        <div class="section-title text-center">
          <h2>Contact</h2>
        </div>

        <div class="row">
          <div class="col-lg-6">
            <div class="row">
              <div class="col-md-12">
                <div class="info-box">
                  <i class="bx bx-map"></i>
                  <div class="title text-center">
                    <h3>ALAMAT</h3>
                  </div>
                  <p>
                    Jl. Manteron No. 1A. RT 06, RW. 11 Kel. Sukaluyu, Kec.
                    Cibeunying Kaler. 40123 <br />
                    Kec. Cibeunying Kaler. 40123
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="info-box mt-4">
                  <i class="bx bx-envelope"></i>
                  <div class="title text-center">
                    <h3>E-MAIL</h3>
                  </div>
                  <p>catra@journalkeberlainjuta.co.id</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="info-box mt-4">
                  <i class="bx bx-phone-call"></i>
                  <div class="title text-center">
                    <h3>TELEPON</h3>
                  </div>
                  <p>081212088823</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9514157841386!2d107.6285493139716!3d-6.89641479501675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7d38db44661%3A0xfe273c3613d0d0d4!2sPT%20Keberlanjutan%20Strategis%20Indonesia!5e0!3m2!1sen!2sid!4v1655797119645!5m2!1sen!2sid"
              width="100%"
              height="300"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>
