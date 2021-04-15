<template>
  <div id="app" class="app">
    <div class="container" id="container">
      <router-link to="./">
        <img
          src="@/assets/ideasfoundation.svg"
          alt="logo"
          class="ideas-foundation-logo"
        />
      </router-link>
      <img src="@/assets/left-vawe.svg" alt="logo" class="left-vawe" />
      <img src="@/assets/left-vawe.svg" alt="logo" class="right-vawe" />
      <router-view />
      <Footer />
    </div>
    <img src="@/assets/iphone-12.svg" alt="logo" class="iphone" />
  </div>
</template>

<script>
import Footer from "./components/Footer";
export default {
  components: {
    Footer,
  },
  mounted() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      // true for mobile device
      document.getElementById("app").className = "app mobile";
    } else {
      // false for not mobile device
      document.getElementById("app").className = "app desktop";
    }
    document.getElementById("container").addEventListener("scroll", (e) => {
      document.getElementById("container").style.backgroundPositionY =
        0 - 65 - e.target.scrollTop + "px";
      if (e.target.scrollTop > 250) {
        document.getElementById("container").className = "container sticky";
      } else {
        document.getElementById("container").className = "container";
      }
    });
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
#app {
  font-family: "Montserrat", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
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
  background: url("./assets/background.svg");
  background-position-y: -65px;
  background-size: cover;
  padding-bottom: 10px;
}

.left-vawe {
  position: fixed;
  top: 2px;
  left: -2px;
  width: 100vh;
  transform: rotate(90deg);
  transform-origin: 8%;
}
.right-vawe {
  position: fixed;
  bottom: 2px;
  right: -2px;
  width: 100vh;
  transform: rotate(270deg) scaleX(-1);
  transform-origin: 92%;
}

.app.mobile {
  .right-vawe,
  .left-vawe {
    display: none;
  }
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

@media only screen and (max-width: 1440px) {
  .app.desktop,
  .app.mobile {
    .ideas-foundation-logo {
      width: 210px;
    }
    .container {
      width: 266px;
      height: 539px;
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

@media only screen and (max-width: 500px) {
  #app {
    height: 100%;
  }
  .app.mobile {
    height: auto;
    .ideas-foundation-logo {
      width: 280px;
      margin-top: 35px;
    }
    .container {
      width: 100%;
      height: 100%;

      .background-vawe {
        width: 100%;
        top: -70px;
      }
    }
    .iphone {
      display: none;
    }
  }
}
@media only screen and (max-width: 750px) {
  .container {
    // padding-bottom: 20px;
  }
  .app {
    .left-vawe,
    .right-vawe {
      display: none;
    }
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
