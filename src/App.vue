<template>
  <v-app :style=" {background: $vuetify.theme.themes.dark.background} ">
    <Header />
    <v-container
      fill-height
    >
      <Sidebar />
    </v-container>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue"
import Sidebar from "./components/Sidebar.vue"

export default {
  components: {
    Header,
    Sidebar
  },
}
</script>


<style lang="scss">
.border-bottom {
  border-bottom: 1px solid #424242;
}

</style>
