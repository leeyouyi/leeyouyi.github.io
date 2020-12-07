<template>
  <div class="header">
    <div class="menu">
      <div class="iconbox">
        <p v-for="(item, index) in 3" :key="index"></p>
        <ul>
          <li v-for="(item, index) in nav" :key="index">
            <router-link :to="item.link">{{ $t(item.text) }}</router-link>
          </li>
        </ul>
      </div>
    </div>
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
      </ul>
    </nav>
    <div class="other">
      <div class="login" v-if="!this.$store.state.login" @click="showMask">
        {{ $t("header.sign_in") }}
      </div>
      <div v-else class="loginAfter">
        <span class="username">hi ~ {{ userName }}</span>
        <span class="sign_out" @click="singOut">{{
          $t("header.sign_out")
        }}</span>
      </div>
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
    </div>
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
  .menu {
    display: none;
  }
  .logo {
    width: 150px;
    height: 84px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  nav {
    width: 400px;
    padding-left: 100px;
    ul {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      li {
        width: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 10px;
        a {
          color: #fff;
          &:hover {
            color: chocolate;
          }
        }
      }
      .loginAfter {
        width: 30%;
      }
    }
  }
  .other {
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding-bottom: 10px;
  }

  .login {
    cursor: pointer;
    &:hover {
      color: chocolate;
    }
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
  .langBox {
    position: absolute;
    top: 5px;
    right: 15px;
    font-size: 14px;
    &:hover {
      color: chocolate;
    }
    &:hover .lang {
      display: block;
    }
    .lang {
      width: 100px;
      height: 100px;
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
}
@media (max-width: 767px) {
  .header {
    height: 80px;
    justify-content: flex-start;
    align-items: center;
    .menu {
      width: 33.333%;
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .iconbox {
        padding-left: 20px;
        position: relative;
        p {
          width: 40px;
          height: 3px;
          background: #fff;
          border-radius: 5px;
          margin-bottom: 5px;
        }
        &:hover ul {
          display: flex;
        }
        ul {
          display: none;
          position: fixed;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100vw;
          padding-bottom: 10px;
          background: #000;
          top: 0;
          left: 0;
          z-index: 999;
          li {
            padding: 10px 0;
          }
        }
      }
    }
    .logo {
      width: 33.333%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    nav {
      display: none;
    }
    .other {
      width: 33.33%;
      height: 100%;
      align-items: flex-end;
      .login {
        position: absolute;
        top: 5px;
        right: 10px;
      }
    }
    .langBox {
      left: -5px;
      right: unset;
      .lang {
        width: 80px;
        height: 50px;
        background: #000;
        border: white solid 1px;
        left: unset;
        right: 60px;
      }
    }
    .loginAfter {
      width: 100%;
      height: 50%;
      span {
        &:first-child {
          padding-right: 0px;
        }
      }
      .sign_out {
        position: absolute;
        top: 5px;
        right: 10px;
        font-size: 14px;
      }
    }
  }
}
</style>
