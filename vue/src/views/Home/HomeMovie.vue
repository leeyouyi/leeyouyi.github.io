<template>
  <div class="movie">
    <div class="title">{{ title }}</div>
    <ul class="list">
      <li v-for="(item, index) in imgs" :key="index">
        <img :src="require('@' + item.img)" alt="電影圖片" />
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    // obj: String,
    obj: Object,
  },
  data() {
    return {
      // title: "好看電影",
      // imgs: [
      //   {
      //     text: "CALL",
      //     img: require("@/assets/images/movie01.jpg"),
      //   },
      //   {
      //     text: "CALL",
      //     img: require("@/assets/images/movie01.jpg"),
      //   },
      //   {
      //     text: "CALL",
      //     img: require("@/assets/images/movie01.jpg"),
      //   },
      //   {
      //     text: "CALL",
      //     img: require("@/assets/images/movie01.jpg"),
      //   },
      //   {
      //     text: "CALL",
      //     img: require("@/assets/images/movie01.jpg"),
      //   },
      //   {
      //     text: "CALL",
      //     img: require("@/assets/images/movie01.jpg"),
      //   },
      // ],
    };
  },
  mounted() {
    console.log(this.obj.movie);
    console.log(this.imgs);
    // console.log(this.obj.movie.imgs);
  },
  computed: {
    title() {
      return this.obj.movie && this.obj.movie.title;
    },
    imgs() {
      return (
        this.obj.movie &&
        this.obj.movie.imgs.map((item) => {
          return {
            text: item.text,
            img: item.img,
          };
        })
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.movie {
  width: 1200px;
  height: 200px;
  display: flex;
  margin: 0 auto;
  .title {
    width: 150px;
    height: 100%;
    writing-mode: vertical-lr;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
  }
  .list {
    display: flex;
    li {
      width: 150px;
    }
  }
}
</style>