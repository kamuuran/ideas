<template>
  <div class="Form">
    <p class="info-text-1">
      Mənim ideam<br />
      <span style="font-style: italic; font-size: 16px; font-weight: 800"
        >Silicon Valley</span
      >-də yaranan idealardan geri qalmır!
    </p>
    <div class="form-group">
      <input
        type="text"
        class="name-surname"
        placeholder="Ad Soyad"
        v-model="name"
      />
      <img src="@/assets/avatar.svg" alt="avatar" />
    </div>
    <div class="form-group social">
      <input type="text" class="name-surname" v-model="linkedin" />
      <img src="@/assets/linkedin.svg" alt="avatar" />
      <span>@</span>
    </div>
    <div class="form-group social">
      <input type="text" class="name-surname" v-model="instagram" />
      <img src="@/assets/instagram.svg" alt="avatar" />
      <span>@</span>
    </div>
    <div class="form-group social">
      <input type="text" class="name-surname" v-model="facebook" />
      <img src="@/assets/facebook.svg" alt="avatar" />
      <span>@</span>
    </div>
    <div class="form-group social">
      <textarea
        name="note"
        id="note"
        class="note"
        placeholder="Layihələriniz və bacarıqlarınız varsa qeyd edə bilərsiniz"
        v-model="note"
      ></textarea>
    </div>

    <div
      class="join-button"
      :class="{ passive: !formIsValid }"
      @click="sendRequest"
    >
      Mən istedadam!
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      linkedin: "",
      instagram: "",
      facebook: "",
      note: "",
    };
  },
  methods: {
    sendRequest() {
      if (this.formIsValid) {
        this.$router.push("./finish");
      }
    },
  },
  mounted() {
    var divElement = document.getElementById("container");
    divElement.scroll({
      top: 0, //scroll to the bottom of the element
      behavior: "smooth", //auto, smooth, initial, inherit
    });
  },
  computed: {
    formIsValid() {
      return !!(
        this.note &&
        (this.name || this.facebook || this.instagram || this.linkedin)
      );
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
    top: 50%;
    transform: translateY(-50%);
    left: 45px;
    font-weight: 500;
    font-size: 15px;
    color: rgba(255, 255, 255, 0.6);
  }
}
.name-surname {
  width: 100%;
  height: 45px;
  background: rgba(255, 255, 255, 0.1);
  box-sizing: border-box;
  border-radius: 10px;
  outline: none;
  padding-left: 45px;
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
  border: none;
}
.name-surname:focus {
  border: 1px solid #ffffff;
}
.form-group.social {
  .name-surname {
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
  color: rgba(255, 255, 255, 0.6);
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
