<template>
  <div class="movie">
    <div class="item">
      <div class="title">{{ movieTitle }}</div>
      <ul class="list">
        <li
          v-for="(item, index) in movies"
          :key="index"
          @click="goPage('/movie')"
        >
          <img :src="item.img" alt="電影圖片" />
          <p>{{ item.text }}</p>
        </li>
      </ul>
    </div>
    <div class="item">
      <div class="title">{{ dramaTitle }}</div>
      <ul class="list">
        <li
          v-for="(item, index) in dramas"
          :key="index"
          @click="goPage('/drama')"
        >
          <img :src="item.img" alt="影集圖片" />
          <p>{{ item.text }}</p>
        </li>
      </ul>
    </div>
    <div class="item">
      <div class="title">{{ animationTitle }}</div>
      <ul class="list">
        <li
          v-for="(item, index) in animations"
          :key="index"
          @click="goPage('/animation')"
        >
          <img :src="item.img" alt="動畫圖片" />
          <p>{{ item.text }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // obj: String,
    obj: Object,
  },
  data() {
    return {};
  },
  mounted() {
    // console.log(this.obj.movie);
  },
  computed: {
    movieTitle() {
      return this.obj.movie.title;
    },
    movies() {
      return this.map(this.obj.movie.imgs);
    },
    dramaTitle() {
      return this.obj.drama.title;
    },
    dramas() {
      return this.map(this.obj.drama.imgs);
    },
    animationTitle() {
      return this.obj.animation.title;
    },
    animations() {
      return this.map(this.obj.animation.imgs);
    },
  },
  methods: {
    map(obj) {
      return obj.map((item) => {
        return {
          text: item.text,
          img: require("@/assets/images/" + item.img),
        };
      });
    },
    goPage(path) {
      this.$router.push({ path: path });
    },
  },
};
</script>

<style lang="scss" scoped>
.movie {
  padding-top: 30px;
  padding-bottom: 30px;
  min-height: 700px;
}
.item {
  width: 1200px;
  height: 220px;
  display: flex;
  margin: 0 auto;
  padding-top: 10px;
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
      display: flex;
      flex-direction: column;
      width: 150px;
      padding-left: 5px;
      padding-right: 5px;
      cursor: pointer;
      img {
        width: 100%;
        height: 200px;
      }
      p {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>