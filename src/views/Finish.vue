<template>
  <div class="finish">
    <p class="info-text-1" id="myIdeaAsGoodAsSliconValleyIdeas"></p>

    <div class="animation">
      <lottie-animation
        ref="anim"
        :animationData="require('@/assets/animation.json')"
        :loop="true"
        :autoPlay="true"
        :speed="1"
      />
    </div>
    <p class="info-text-2">{{ loca.yourMessageIsTravellingThroughTheSpace }}</p>
    <div class="thanks-message">
      <span> {{ loca.thankYou }}</span>
      <img src="@/assets/heart.svg" alt="heart" />
    </div>
  </div>
</template>


<script>
import LottieAnimation from "lottie-web-vue";
import { mapState } from "vuex";

export default {
  name: "Finish",
  components: {
    LottieAnimation,
  },
  mounted() {
    var divElement = document.getElementById("container");
    divElement.scroll({
      top: 0,
      behavior: "smooth",
    });
    document.getElementById(
      "myIdeaAsGoodAsSliconValleyIdeas"
    ).innerHTML = this.loca.myIdeaAsGoodAsSliconValleyIdeas;
  },
  computed: {
    ...mapState(["loca"]),
  },
  watch: {
    loca() {
      document.getElementById(
        "myIdeaAsGoodAsSliconValleyIdeas"
      ).innerHTML = this.loca.myIdeaAsGoodAsSliconValleyIdeas;
    },
  },
};
</script>


<style lang="scss" scoped>
.info-text-1 {
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  line-height: 28.8px;
  text-align: left;
  margin-top: 88px;
}
.info-text-2 {
  font-weight: bold;
  font-size: 16px;
  color: #ffffff;
}
.animation {
  position: relative;
  widows: 100%;
}

.thanks-message {
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-weight: 500;
    font-size: 14px;
    color: #ffffff;
    margin-right: 9px;
  }
}
</style>
