<template>
  <div class="header">
    <div class="logo">
      <router-link to="/">
        <img alt="logo" src="@/assets/images/netflix.png" />
      </router-link>
    </div>
    <nav>
      <ul>
        <li v-for="(item, index) in nav" :key="index">
          <router-link :to="item.link">{{ $t(item.text) }}</router-link>
        </li>
        <li class="login" v-if="!this.$store.state.login" @click="showMask">
          {{ $t("header.sign_in") }}
        </li>
        <li v-else class="loginAfter">
          <span>hi ~ {{ userName }}</span>
          <span @click="singOut">{{ $t("header.sign_out") }}</span>
        </li>
        <div class="langBox">
          {{ $t("header.language") }}
          <div class="lang">
            <p
              v-for="(item, index) in language"
              :key="index"
              @click="doLanguage(item.key)"
            >
              {{ item.text }}
            </p>
          </div>
        </div>
      </ul>
    </nav>
  </div>
</template>

<script>
import i18n from "@/lang";
export default {
  name: "Header",
  data() {
    return {
      nav: [
        {
          text: "header.home",
          link: "/",
        },
        {
          text: "header.movie",
          link: "/movie",
        },
        {
          text: "header.drama",
          link: "/drama",
        },
        {
          text: "header.animation",
          link: "/animation",
        },
      ],
      lang: "tw",
      language: [
        {
          text: "中文",
          key: "tw",
        },
        {
          text: "english",
          key: "en",
        },
      ],
    };
  },
  mounted() {
    const userName = localStorage.getItem("userName");
    if (userName) {
      this.$store.dispatch("actionLogin", true);
    }
    const lang = localStorage.getItem("locale") || this.lang;
    this.lang = lang;
    this.switchLang(lang);
    this.$store.dispatch("actionLanguage", lang);
  },
  methods: {
    showMask() {
      this.$store.dispatch("actionMask", true);
    },
    singOut() {
      this.$store.dispatch("actionLogin", false);
      localStorage.removeItem("userName");
      alert("登出成功");
    },
    switchLang(newLang) {
      i18n.locale = newLang;
      localStorage.setItem("locale", newLang);
    },
    doLanguage(lang) {
      this.switchLang(lang);
      this.$store.dispatch("actionLanguage", lang);
      // console.log(this.$store.state);
    },
  },
  computed: {
    userName() {
      return this.$store.state.user.userName;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  background: #000;
  height: 100px;
  justify-content: center;
  .logo {
    width: 150px;
    height: 84px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  nav {
    width: 700px;
    padding-left: 100px;
    ul {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      li {
        width: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 10px;
        a {
          color: #fff;
        }
      }
      .loginAfter {
        width: 30%;
      }
    }
  }
  .langBox {
    position: absolute;
    top: 5px;
    right: 15px;
    font-size: 14px;
    &:hover .lang {
      display: block;
    }
    .lang {
      width: 100px;
      height: 100px;
      // background: #fff;
      position: absolute;
      left: 50px;
      top: 0;
      display: none;
      p {
        padding: 5px;
        padding-top: 0;
        padding-bottom: 10px;
        cursor: pointer;
      }
    }
  }
  .login {
    cursor: pointer;
  }
  .loginAfter {
    span {
      &:first-child {
        color: salmon;
        font-size: 20px;
        padding-right: 30px;
      }
      &:last-child {
        cursor: pointer;
      }
    }
  }
}
</style>
