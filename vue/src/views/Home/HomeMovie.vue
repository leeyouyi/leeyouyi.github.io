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
      return this.$store.state.language === "tw"
        ? this.obj.movie.title
        : this.obj.movie.title_en;
    },
    movies() {
      return this.map(this.obj.movie.imgs);
    },
    dramaTitle() {
      return this.$store.state.language === "tw"
        ? this.obj.drama.title
        : this.obj.drama.title_en;
    },
    dramas() {
      return this.map(this.obj.drama.imgs);
    },
    animationTitle() {
      return this.$store.state.language === "tw"
        ? this.obj.animation.title
        : this.obj.animation.title_en;
    },
    animations() {
      return this.map(this.obj.animation.imgs);
    },
  },
  methods: {
    map(obj) {
      return obj.map((item) => {
        return {
          text: this.$store.state.language === "tw" ? item.text : item.text_en,
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
@media (max-width: 768px) {
  .movie {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .item {
    width: 100%;
    height: auto;
    display: block;
    .title {
      width: 100%;
      height: 30px;
      writing-mode: unset;
      padding-bottom: 20px;
    }
    .list {
      display: flex;
      flex-wrap: wrap;
      padding: 0px 10px;
      justify-content: center;
      li {
        display: flex;
        flex-direction: column;
        width: 150px;
        padding-left: 10px;
        padding-right: 10px;
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
}
</style>