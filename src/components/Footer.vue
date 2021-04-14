<template>
  <footer>
    <span>Hüquqlar qorunur © 2020 - {{ loca.title }}</span>
    <div class="flag-and-about-container">
      <span><router-link to="/about">Haqqımızda</router-link></span>
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
      index = (this.selected + 1) % 3
      this.selected = index;
      localStorage.setItem("language", this.options[index].lang);
      this.updateLoca(this.options[index].lang);
    },
  },
  mounted() {
    let language = localStorage.getItem("language");
    language = language ? language : "az";
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
  align-items: center;
  margin-top: 25px;
  .flag-and-about-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      color: white;
    }
  }
  span {
    font-weight: 500;
    font-size: 10px;
    color: #ffffff;
  }

  .flag-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 26px;
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
</style>