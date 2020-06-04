<template>
  <div>
    <h1 v-text="titulo"></h1>
  </div>
</template>
<script>
export default {
  props: ["cliente"],
  computed: {
    titulo() {
      return `nuestro cliente ${this.cliente} nos recomienda...`;
    },
  },
};
</script>
