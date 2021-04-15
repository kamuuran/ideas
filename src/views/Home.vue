<template>
  <div class="home desktop" id="home">
    <p class="info-text-1">Make your ideas <span>alive</span></p>

    <p class="info-text-2">{{ loca.communityForTalentedEntrepreneurs }}</p>

    <p class="info-text-3" id="weOfferOurSkillsAndExperiences"></p>

    <p class="info-text-4">{{ loca.joinedUs }}</p>

    <div>
      <a href="https://follow.az" target="_blank">
        <img src="@/assets/followaz.svg" alt="logo" class="follow-az"
      /></a>
    </div>

    <div>
      <a href="https://gamers.az" target="_blank">
        <img src="@/assets/logo_small.png" alt="logo" class="logo-small" />
      </a>
    </div>
    <router-link to="form">
      <div class="join-button">{{ loca.IWantToJoin }}</div></router-link
    >
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Home",
  mounted() {
    document.getElementById(
      "weOfferOurSkillsAndExperiences"
    ).innerHTML = this.loca.weOfferOurSkillsAndExperiences;
  },
  computed: {
    ...mapState(["loca"]),
  },
  watch: {
    loca() {
      document.getElementById(
        "weOfferOurSkillsAndExperiences"
      ).innerHTML = this.loca.weOfferOurSkillsAndExperiences;
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  .info-text-1 {
    font-size: 25px;
    text-align: center;
    color: #ffffff;
    font-weight: 400;
    span {
      font-weight: 800;
      font-style: italic;
    }
  }

  .info-text-2 {
    font-weight: bold;
    font-size: 16px;
    text-align: center;
    color: #ffffff;
    margin-top: 40px;
  }

  .info-text-3 {
    font-size: 16px;
    color: #ffffff;
    text-align: center;
    margin-top: 35px;
    font-weight: 400;
    text-align: left;
    text-indent: 20px;
    line-height: 155%;
    span {
      font-weight: 800;
      font-style: italic;
    }
  }

  .info-text-4 {
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    color: #ffffff;
    margin-top: 35px;
  }

  .follow-az {
    margin-top: 25px;
  }

  .logo-small {
    margin-top: 28px;
    width: 110px;
  }

  .join-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 345px;
    height: 45px;
    background: #04549c;
    border-radius: 10px;

    margin: 0 auto;
    margin-top: 32px;
    cursor: pointer;
    outline: none;
  }
  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 14px;
    color: #ffffff;
  }
}

@media only screen and (max-width: 1440px) {
  .app .desktop,
  .app .mobile {
    .join-button {
      width: 100%;
    }
  }
}

// @media only screen and (max-width: 375px) {
//   .home {
//     .iphone {
//       display: none;
//       width: 300px;
//     }
//   }
// }
</style>
