<template>
  <div>
    <pre>{{ posts }}</pre>
    <div v-for="post in posts" :key="post.longatitude"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    posts() {
      return this.$store.state.covid;
    },
  },
  mounted() {
    this.$store.dispatch("loadPosts");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
