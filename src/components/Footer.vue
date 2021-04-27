<template>
  <footer>
    <div style="display-flex; ">
      <div class="social-media-container">
        <a href="https://instagram.com/ideas.foundation/ " target="_blank"
          ><img src="@/assets/instagram.svg" alt="avatar"
        /></a>
        <a href="https://facebook.com/www.ideas.foundation" target="_blank"
          ><img src="@/assets/facebook.svg" alt="avatar"
        /></a>
        <a href="mailto: info@ideas.foundation">info@ideas.foundation</a>
      </div>
      <p>{{ loca.copyright }}</p>
    </div>
    <div class="flag-and-about-container">
      <span
        ><router-link to="about">{{ loca.about }}</router-link></span
      >
      <div class="flag-container" @click="changeLang(1)">
        <img
          class="flag"
          :src="getImgUrl(options[selected].icon)"
          alt="az_flag"
        />
      </div>
    </div>
  </footer>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Footer",
  data() {
    return {
      active: false,
      selected: 0,
      options: [
        {
          name: "AZ",
          icon: "az.svg",
          lang: "az",
        },
        {
          name: "EN",
          icon: "en.svg",
          lang: "en",
        },
        {
          name: "RU",
          icon: "ru.svg",
          lang: "ru",
        },
      ],
    };
  },
  computed: {
    ...mapState(["loca"]),
  },
  methods: {
    ...mapActions(["updateLoca"]),
    getImgUrl(icon) {
      return require("@/assets/" + icon);
    },
    changeLang(index) {
      index = (this.selected + 1) % 3;
      this.selected = index;
      localStorage.setItem("language", this.options[index].lang);
      this.updateLoca(this.options[index].lang);
      this.$router.replace({ params: { id: this.options[index].lang } });
    },
  },
  mounted() {
    let language = localStorage.getItem("language");
    var userLang = navigator.language || navigator.userLanguage;
    if (!language) {
      if (userLang == "en-US") language = "en";
      if (userLang == "tr-TR") language = "az";
      if (userLang == "ru-RU") language = "ru";
    }
    language = language ? language : "az";
    if (
      this.$route.params.id == "az" ||
      this.$route.params.id == "en" ||
      this.$route.params.id == "ru"
    ) {
      language = this.$route.params.id;
    }
    localStorage.setItem("language", language);
    const index = this.options.findIndex((item) => item.lang === language);
    this.selected = index;
    this.updateLoca(language);
  },
};
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 25px;
  margin-bottom: 10px;
  a {
    color: #ffffff;
    text-decoration: none;
  }
  .flag-and-about-container {
    display: flex;
    justify-content: space-between;
    a {
      color: white;
    }
  }
  .social-media-container {
    margin-bottom: 5px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
  }
  p,
  a {
    font-weight: 500;
    font-size: 10px;
    color: #ffffff;
    text-align: left;
  }

  .flag-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 47px;
    height: 28px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    margin-left: 15px;
    cursor: pointer;
    .flag {
      width: 17px;
      height: 12px;
    }
  }
}
@media only screen and (max-width: 1440px) {
  footer {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
@media only screen and (max-width: 750px) {
  footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
}
</style>