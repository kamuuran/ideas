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
      <input
        type="text"
        class="input-fields"
        v-model="mail"
        placeholder="name@example.com"
      />
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
        :placeholder="loca.youCanWriteUsAboutYourProjectsOrYourself"
        v-model="note"
      ></textarea>
    </div>

    <div
      class="join-button"
      :class="{ passive: !formIsValid || loading }"
      @click="sendRequest"
    >
      <p v-show="!loading">{{ loca.amTalent }}</p>
      <img src="@/assets/loading-spinner.svg" alt="loading" v-show="loading" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Email from "@/smtp.js";
export default {
  data() {
    return {
      name: "",
      mail: "",
      linkedin: "",
      instagram: "",
      facebook: "",
      note: "",
      loading: false,
    };
  },
  methods: {
    sendRequest() {
      if (this.formIsValid) {
        this.loading = true;
        const body = `
                  <html>
                    <head>
                        <title>HTML-E-Mail mit PHP erstellen</title>
                    </head>
                    <body>
                      <div style="width: 100%;">
                        <b>${this.name}</b><br></br>
                        Email: ${this.mail}<br></br><br></br>

                        Linkedin : @${this.linkedin}<br></br>
                        Instagram : @${this.instagram}<br></br>
                        Facebook : @${this.facebook}<br></br><br></br>

                        Message: <br></br>${this.note}<br></br>

                        --<br></br>
                        Make your ideas alive!
                      </div>
                    </body>
                  </html>
`;

        Email.send({
          SecureToken : "b84c7550-559a-4360-b33c-14e12086c3f2",
          To: "necefzade.elish@gmail.com",
          From: "founder@ideas.foundation",
          Subject: "Ideas.Foundation | Request",
          Body: body,
        })
          .then((response) => {
            this.loading = false;
            if (response == "OK") {
              this.$router.push("finish");
            }
          })
          .catch((e) => {
            console.log(e);
            this.loading = false;
          });
      }
    },
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
    document.title = "Ideas.Foundation | " + this.loca.request;
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
      document.title = "Ideas.Foundation | " + this.loca.request;
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
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

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
  padding-left: 44px;
}
.form-group.social {
  .input-fields {
    padding-left: 65px;

    &:focus {
      padding-left: 64px;
    }
  }
}

.note {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  width: 100%;
  height: 135px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  outline: none;
  border: none;
  padding: 9px 15px;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  box-sizing: border-box;
  resize: none;

  &:focus {
    border: 1px solid #ffffff;
    padding: 8px 14px;
  }
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

  img {
    width: 32px;
    height: 32px;
  }
}
</style>
