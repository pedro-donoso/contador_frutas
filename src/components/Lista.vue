<template>
  <div>
    <ul class="list-group">
      <li
        @click="aumentar(index)"
        v-for="(fruta,index) of arrayOrdenado"
        :key="fruta.id"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        {{fruta.id}} - {{fruta.nombre}}
        <span
          class="badge badge-primary badge-pill"
        >{{fruta.cantidad}}</span>
      </li>
    </ul>
    <button @click="reiniciar" class="btn btn-danger btn-block">Reiniciar</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";

export default {
  name: "Lista",
  computed: {
    ...mapState(["frutas"]),
    arrayOrdenado() {
      return this.frutas.sort((a, b) => b.cantidad - a.cantidad);
    }
  },
  methods: {
    ...mapMutations(["aumentar", "reiniciar"])
  }
};
</script>

<style scoped>
</style>