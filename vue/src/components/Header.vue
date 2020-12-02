<template>
  <div class="header">
    <div class="logo">
      <img alt="logo" src="@/assets/images/netflix.png" />
    </div>
    <nav>
      <ul>
        <li v-for="(item, index) in nav" :key="index">
          <router-link :to="item.link">{{ item.text }}</router-link>
        </li>
        <li class="login" v-if="!this.$store.state.login" @click="showMask">
          登入
        </li>
        <li v-else class="loginAfter">
          <span>hi ~ {{ userName }}</span>
          <span @click="singOut">登出</span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      nav: [
        {
          text: "首頁",
          link: "/",
        },
        {
          text: "好看電影",
          link: "/movie",
        },
        {
          text: "精彩影集",
          link: "/drama",
        },
        {
          text: "熱血動畫",
          link: "/animation",
        },
      ],
    };
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
    width: 600px;
    padding-left: 100px;
    ul {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        width: 33.333%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 10px;
        a {
          color: #fff;
        }
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
        padding-right: 10px;
      }
      &:last-child {
        cursor: pointer;
      }
    }
  }
}
</style>
