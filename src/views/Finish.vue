<template>
  <div class="finish">
    <p class="info-text-1">
      Mənim ideam<br />
      <span style="font-style: italic; font-size: 16px; font-weight: 800"
        >Silicon Valley</span
      >-də yaranan idealardan geri qalmır!
    </p>

    <div class="animation">
      <lottie-animation
        ref="anim"
        :animationData="require('@/assets/animation.json')"
        :loop="true"
        :autoPlay="true"
        :speed="1"
      />
    </div>
    <p class="info-text-2">Müraciətiniz ulduzlararası səyahət edir</p>
    <div class="thanks-message">
      <span>Sizə təşəkkür edirik </span>
      <img src="@/assets/heart.svg" alt="heart" />
    </div>
  </div>
</template>


<script>
import LottieAnimation from "lottie-web-vue"; // import lottie-web-vue

export default {
  name: "Finish",
  components: {
    LottieAnimation,
  },
  mounted() {
    var divElement = document.getElementById("container");
    divElement.scroll({
      top: 0, //scroll to the bottom of the element
      behavior: "smooth", //auto, smooth, initial, inherit
    });
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
  // width: 150%;
  // transform: scale(1.5);
  position: relative;
  widows: 100%;

  // left: 50%;
  // transform: translateX(-50%);
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
