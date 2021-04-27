<template>
  <div class="Form">
    <p class="info-text-1-title">Biz kimik?</p>
    <p class="info-text-1-content">
      Biznes ideyalar hər birinizdə yarana bilər, lakin nədən başlayacağınızı
      tam olaraq bilmirsiniz və ya planları reallaşdırmaq üçün komandaya
      ehtiyacınız var
      <br />
      <br />
      <span>İdeas.Foundation</span> Azərbaycanda bacarıqlı təşəbbüskarların
      ideyalarını həyata keçirmək üçün yaradılan layihə, cəmiyyət, fonddur.
    </p>
    
    <p class="info-text-1-title">Bizim marağımız nədir??</p>
    <p class="info-text-1-content">
      Biz 2000-ci illərin əvvəlindən bir çox şəxsi layihələrin yaradıcıları,
      qeyri adi Start Up-ların təməlini qoymuşuq<br /><br />

      Nəqliyyat, Rabitə və Yüksək Texnologiyalar Nazirliyi, RedBull, Bir/İki
      Dönər və digərləri tərəfindən bəyənilib dəstək almışıq<br /><br />
    </p>

    <ul>
      <li>Məqsədimiz Qərbdə olan cəmiyyət və düşüncəni yaratmaqdır</li>
      <li>Venture fond kimi gələcəkdə fəaliyyət göstərməkdir</li>
      <li>
        Angel investorlara layihəmizi tanıtmaqdır, ki sizdə bizdən
        faydalanasınız
      </li>
      <li>Təbii ki cuzi bir pay sahibi olmaq</li>
    </ul>

    <p class="info-text-1-title">Nədən başlamalısınız?</p>
    <p class="info-text-1-content">
      İlk öncə fikrinizdə tutduğunuz ideyanın məqsədini bilməlisiniz. Bizimlə
      müzakirə edə və yaxud məsləhət ala bilərsiniz <br /><br />

      Daha sonra <span>arzularınızın</span> icrası üçün sizə tələb olunan
      komanda üzvlərinin, Developer, Designer, SMM manager, Business analyst və
      s. yığılmasında yardımçı oluruq<br /><br />

      İdeyanın təqdimat üçün yetərli versiyasını investorlara təqdim etmək
      imkanı yarada bilərik
    </p>


    <p class="info-text-1-title">İdeyamı mənimsəyə bilərsiniz?</p>
    <p class="info-text-1-content">
      Bizim qətiyyən mənimsəmək fikrimiz yoxdur<br /><br />

      Yuxarıda qeyd etdiyimiz kimi məqsədimiz
      <span>İdeas.Foundation</span> sizinlə birlikdə inkişaf etdirməkdir
    </p>

    <div class="quote-container">
      <img src="@/assets/quote-open.svg" alt="avatar" />
      <p class="info-text-1-content">
        İstəyimiz, sağlam mühid içində təşəbbüskarlağı yetişdirməkdir.
        Azərbaycanda istedadlı şəxslərin olduğuna əminik
      </p>
      <img src="@/assets/quote-close.svg" alt="avatar" />
    </div>

    <p
      class="info-text-1-content"
      style="text-align: center; width: 70%; margin: 0 auto; font-size: 16px"
    >
      <span>İdeyalarınız gözləməli deyil.</span><br />
      Bizə qoşulub, iri addımlarla irəliləməyə bugün başlayaq!
    </p>
    <router-link to="form">
      <div class="join-button">Qoşulmaq istərdim</div></router-link
    >
  </div>
</template>


<script>
import { mapState } from "vuex";

export default {
  name: "Footer",
  mounted() {
    var divElement = document.getElementById("container");
    divElement.scroll({
      top: 0,
      behavior: "smooth",
    });
    document.title = "Ideas.Foundation | " + this.loca.about;
  },
  computed: {
    ...mapState(["loca"]),
  },

  watch: {
    loca() {
      document.title = "Ideas.Foundation | " + this.loca.about;
    },
  },
};
</script>


<style lang="scss" scoped>
.info-text-1-title {
  font-weight: bold;
  font-size: 18px;
  line-height: 180%;
  color: #ffffff;
  text-align: left;
}
.info-text-1-content {
  font-weight: 500;
  font-size: 14px;
  line-height: 180%;
  text-align: left;
  color: #ffffff;
  padding: 25px;

  span {
    font-weight: 800;
    font-style: italic;
  }
}

ul {
  font-weight: 500;
  font-size: 14px;
  line-height: 180%;
  text-align: left;
  color: #ffffff;
  list-style-type: decimal;
}

.quote-container {
  position: relative;
  width: 100%;
  .info-text-1-content {
    font-size: 13px;
  }
  img {
    width: 23px;
    height: 18px;
    position: absolute;
  }
  img:first-of-type {
    left: 0;
  }
  img:last-of-type {
    right: 0;
    bottom: 0;
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
}
a {
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
}
</style>
