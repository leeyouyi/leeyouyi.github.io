<template>
  <div class="movie">
    <Header />
    <h1>This is an movie page</h1>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "Movie",
  components: {
    Header,
  },
};
</script>
