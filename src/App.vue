<template>
  <div id="app" class="container">
    <Cabecera class="text-center"></Cabecera>
    <Lista></Lista>
  </div>
</template>

<script>
import Cabecera from "./components/Cabecera";
import Lista from "./components/Lista";

export default {
  name: "app",
  components: {
    Cabecera,
    Lista
  }
};
</script>

