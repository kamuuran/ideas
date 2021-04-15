<template>
  <div class="Form">
    <p class="info-text-1" id="myIdeaAsGoodAsSliconValleyIdeas"></p>
    <div class="form-group">
      <input
        type="text"
        class="input-fields"
        :placeholder="loca.fullName"
        v-model="name"
      />
      <img src="@/assets/avatar.svg" alt="avatar" />
    </div>
    <div class="form-group">
      <input type="text" class="input-fields" v-model="mail" placeholder="name@example.com" />
      <img src="@/assets/mail.svg" alt="icon" />
    </div>
    <div class="form-group social">
      <input type="text" class="input-fields" v-model="linkedin" />
      <img src="@/assets/linkedin.svg" alt="icon" />
      <span>@</span>
    </div>
    <div class="form-group social">
      <input type="text" class="input-fields" v-model="instagram" />
      <img src="@/assets/instagram.svg" alt="icon" />
      <span>@</span>
    </div>
    <div class="form-group social">
      <input type="text" class="input-fields" v-model="facebook" />
      <img src="@/assets/facebook.svg" alt="icon" />
      <span>@</span>
    </div>
    <div class="form-group social">
      <textarea
        name="note"
        id="note"
        class="note"
        :placeholder="loca.youCanWriteUsAboutYourProjectsOrYouself"
        v-model="note"
      ></textarea>
    </div>

    <div
      class="join-button"
      :class="{ passive: !formIsValid }"
      @click="sendRequest"
    >
      {{ loca.amTalent }}
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      name: "",
      mail: "",
      linkedin: "",
      instagram: "",
      facebook: "",
      note: "",
    };
  },
  methods: {
    sendRequest() {
      if (this.formIsValid) {
        this.$router.push("finish");
      }
    },
  },
  mounted() {
    var divElement = document.getElementById("container");
    divElement.scroll({
      top: 0, //scroll to the bottom of the element
      behavior: "smooth", //auto, smooth, initial, inherit
    });
    document.getElementById(
      "myIdeaAsGoodAsSliconValleyIdeas"
    ).innerHTML = this.loca.myIdeaAsGoodAsSliconValleyIdeas;
  },
  computed: {
    ...mapState(["loca"]),
    formIsValid() {
      return !!(
        this.mail &&
        (this.note || this.facebook || this.instagram || this.linkedin)
      );
    },
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
}

.form-group {
  position: relative;
  margin-bottom: 15px;
  img {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
  }
  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */

    color: rgba(255, 255, 255, 0.6);
    font-weight: 500;
    font-size: 14px;
    line-height: 155%;
  }
  ::-moz-placeholder {
    /* Firefox 19+ */

    color: rgba(255, 255, 255, 0.6);
    font-weight: 500;
    font-size: 14px;
    line-height: 155%;
  }
  :-ms-input-placeholder {
    /* IE 10+ */

    color: rgba(255, 255, 255, 0.6);
    font-weight: 500;
    font-size: 14px;
    line-height: 155%;
  }
  :-moz-placeholder {
    /* Firefox 18- */

    color: rgba(255, 255, 255, 0.6);
    font-weight: 500;
    font-size: 14px;
    line-height: 155%;
  }
}
.form-group.social {
  span {
    position: absolute;
    top: 12px;
    left: 45px;
    font-weight: 500;
    font-size: 15px;
    color: rgba(255, 255, 255, 0.6);
  }
}
.input-fields {
  width: 100%;
  height: 45px;
  background: rgba(255, 255, 255, 0.1);
  box-sizing: border-box;
  border-radius: 10px;
  outline: none;
  padding-left: 45px;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  border: none;
}
.input-fields:focus {
  border: 1px solid #ffffff;
}
.form-group.social {
  .input-fields {
    padding-left: 65px;
  }
}

.note {
  width: 100%;
  height: 135px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  outline: none;
  border: none;
  padding: 9px 15px;
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
  box-sizing: border-box;
  resize: none;
}

.join-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 45px;
  background: #04549c;
  border-radius: 10px;
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
  margin: 0 auto;
  margin-top: 32px;
  cursor: pointer;
  outline: none;

  &.passive {
    opacity: 0.5;
    cursor: default;
  }
}
</style>
