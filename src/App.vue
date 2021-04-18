<template>
  <div>
    <div id="app" class="app">
      <div class="container" id="container">
        <img
          src="@/assets/ideasfoundation.svg"
          alt="logo"
          class="ideas-foundation-logo"
          @click="goToMainPage"
        />
        <img src="@/assets/left-vawe.svg" alt="logo" class="left-vawe" />
        <img src="@/assets/left-vawe.svg" alt="logo" class="right-vawe" />
        <router-view />
        <Footer />
      </div>
      <img src="@/assets/iphone-12.svg" alt="logo" class="iphone" />
    </div>
  </div>
</template>

<script>
import Footer from "./components/Footer";
export default {
  components: {
    Footer,
  },
  mounted() {
    document.getElementById("container").addEventListener("scroll", (e) => {
      if (e.target.scrollTop > 250) {
        document.getElementById("container").className = "container sticky";
      } else {
        document.getElementById("container").className = "container";
      }
    });

    window.addEventListener("scroll", () => {
      // console.log('sss');
      var top = window.pageYOffset || document.documentElement.scrollTop;
      console.log(top);
      if (top > 250) {
        document.getElementById("container").className = "container sticky";
      } else {
        document.getElementById("container").className = "container";
      }
    });

    const appHeight = () => {
      console.log("ss");
      const doc = document.documentElement;
      doc.style.setProperty("--app-height", `${window.innerHeight}px`);
    };
    window.addEventListener("resize", appHeight);
    appHeight();
  },
  methods: {
    goToMainPage() {
      this.$router.push("./");
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
body {
  margin: 0;
  padding: 0;
}

body::-webkit-scrollbar {
  display: none;
}
::-webkit-scrollbar {
  display: none;
}
.app {
  font-family: "Montserrat", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .ideas-foundation-logo {
    width: 315px;
    margin-top: 35px;
    margin-bottom: 20px;
  }
  .container {
    width: 376px;
    height: 761px;
    margin: 0 auto;
    position: relative;
    box-sizing: border-box;
    overflow: scroll;
    text-align: center;
    padding: 0 15px;
    background-image: url("./assets/background.svg");
    background-position-y: -65px;
    background-size: 100%;
    background-repeat: no-repeat;
    padding-bottom: 10px;
    background-attachment: local;
  }

  .left-vawe {
    position: fixed;
    top: 2px;
    left: -2px;
    width: 100%;
    transform: rotate(90deg);
    transform-origin: 8%;
  }
  .right-vawe {
    position: fixed;
    bottom: 2px;
    right: -2px;
    width: 100%;
    transform: rotate(270deg) scaleX(-1);
    transform-origin: 92%;
  }
  .background-vawe {
    width: 100%;
    position: absolute;
    top: -70px;
    left: 0;
    z-index: -1;
  }
  .iphone {
    width: 423px;
    position: absolute;
    z-index: -2;
  }
}

:root {
  --app-height: 100%;
}

html,
body {
  padding: 0;
  margin: 0;
  overflow: hidden;
  width: 100vw;
  height: 100vh;

  // @media not all and (hover: hover) {
  //   height: var(--app-height);
  // }
}
@media only screen and (max-width: 1440px) {
  .app {
    .ideas-foundation-logo {
      width: 210px;
    }
    .container {
      width: 266px;
      height: 539px;
      background-position-y: -32px;
      .background-vawe {
        width: 266px;
        top: -25px;
      }
    }
    .iphone {
      width: 300px;
    }
  }
}
@media only screen and (max-width: 750px) {
  .app {
    .left-vawe,
    .right-vawe {
      display: none;
    }
  }
}
@media only screen and (min-height: 1024px) {
  .app {
    .left-vawe,
    .right-vawe {
      display: none;
    }
  }
}
@media only screen and (max-width: 750px) {
  .container {
    background-position-y: -65px;
  }
}
@media only screen and (max-width: 750px) {
  .app {
    height: auto;
  }
  .app {
    height: auto;
    .ideas-foundation-logo {
      width: 280px;
      margin-top: 35px;
      margin-bottom: 20px;
    }
    .container {
      width: 100vw;
      height: auto;
      min-height: -webkit-fill-available;
      padding-bottom: 20px;
      .background-vawe {
        width: 100%;
        top: -70px;
      }
    }
    .iphone {
      display: none;
    }
  }

  :root {
    --app-height: auto;
  }

  html,
  body {
    overflow: auto;
    width: 100vw;
    height: auto;

    // @media not all and (hover: hover) {
    //   height: var(--app-height);
    // }
  }
}
@media only screen and (max-width: 750px) {
  .container {
    background-position-y: -200px !important;
  }
}
@media only screen and (max-width: 650px) {
  .container {
    background-position-y: -170px !important;
  }
}
@media only screen and (max-width: 600px) {
  .container {
    background-position-y: -150px !important;
  }
}
@media only screen and (max-width: 500px) {
  .container {
    background-position-y: -100px !important;
  }
}
@media only screen and (max-width: 450px) {
  .container {
    background-position-y: -90px !important;
  }
}
@media only screen and (max-width: 375px) {
  .container {
    background-position-y: -65px !important;
  }
}
@media only screen and (max-width: 320px) {
  .container {
    background-position-y: -35px !important;
  }
}
.sticky {
  background: linear-gradient(
    270deg,
    rgba(252, 143, 52, 1) 0%,
    rgba(245, 203, 107, 1) 100%
  ) !important;
}
</style>
