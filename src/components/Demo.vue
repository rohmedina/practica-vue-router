<template>
  <div>
    <h1>Demostración de transiciones</h1>
    <button @click="mostrarDemo">Transición usando opacity y padding</button>
    <transition name="mi-transicion">
      <router-view v-if="mostrar"></router-view>
    </transition>
    <button @click="mostrarAnimacion">Transición usando animaciones</button>
    <transition name="mi-animacion">
      <router-view v-if="animar"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mostrar: false,
      animar: false,
    };
  },
  methods: {
    mostrarDemo() {
      this.mostrar = !this.mostrar;
    },
    mostrarAnimacion() {
      this.animar = !this.animar;
    },
  },
};
</script>
<style scoped>
.mi-transicion-enter-active,
.mi-transicion-leave-active {
  transition: opacity 0.5s, padding 1s;
}
.mi-transicion-enter,
.mi-transicion-leave-to {
  opacity: 0;
  padding: 10px;
}
.mi-transicion-enter-to,
.mi-transicion-leave {
  opacity: 0.9;
  padding: 0px;
}
.mi-animacion-enter-active {
  animation: entrada 0.1s;
}
.mi-animacion-leave-active {
  animation: salida 0.1s;
}
@keyframes entrada {
  0% {
    transform: scale(2);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes salida {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(2);
  }
}
</style>
