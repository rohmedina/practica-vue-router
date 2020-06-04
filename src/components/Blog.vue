<template>
  <div>
    <h1 v-text="tituloEntrada"></h1>
    <router-link :to="paginar(false)">Anterior</router-link> |
    <router-link :to="paginar(true)">Siguiente</router-link>
    <p></p>
    <router-link :to="{ name: 'comentarios' }">Ver comentarios</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    paginar(siguiente) {
      let entrada = parseInt(this.$route.params.entrada);
      if (siguiente) return entrada < 10 ? `/blog/${entrada + 1}` : `/blog/${entrada} `;
      else return entrada > 1 ? `/blog/${entrada - 1}` : `/blog/${entrada}`;
    },
  },
  computed: {
    tituloEntrada() {
      return `Entrada ${this.$route.params.entrada} del blog`;
    },
  },
};
</script>
