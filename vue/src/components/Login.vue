<template>
  <div class="mask" @click="close">
    <div class="loginBox" @click="stop">
      <div class="inputBox">
        <label for="username">帳號 : </label>
        <input type="text" name="username" id="username" />
      </div>
      <div class="inputBox">
        <label for="username">密碼 : </label>
        <input type="password" name="password" id="password" />
      </div>
      <div class="buttonBox">
        <button @click="login">確認</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close() {
      this.$store.dispatch("actionMask", false);
    },
    stop(e) {
      e.stopPropagation();
    },
    login() {
      this.$store.dispatch("actionLogin", true);
      this.$store.dispatch("actionMask", false);
      localStorage.setItem("userName", this.$store.state.user.userName);
      alert("登入成功");
    },
  },
};
</script>

<style lang="scss" scoped>
.mask {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  .loginBox {
    width: 300px;
    height: 180px;
    background: #fff;
    border-radius: 15px;
    .inputBox {
      padding-top: 15px;
      padding-bottom: 15px;
      &:first-child {
        padding-top: 40px;
      }
      label {
        color: #000;
        padding-right: 10px;
      }
    }
    .buttonBox {
      display: flex;
      justify-content: flex-end;
      padding-top: 5px;
      padding-right: 40px;
    }
  }
}
</style>