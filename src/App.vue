<template>
  <v-app :style=" {background: $vuetify.theme.themes.dark.background} ">
    <Header />
    <v-container
      fill-height
      style="position: relative"
    >
      <Sidebar id="sidebar" />
      <v-btn
        id="post-btn-sp"
        fab
        x-large
        color="teal lighten-1"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
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

#sidebar {
  @include display_sp {
    display: none !important;
  }
  @include display_tab {
    display: none !important;
  }
}

#post-btn-sp {
  @include display_sp {
    bottom: 0;
    right: 0;
    position: absolute;
    margin: 0 20px 50px 0;
  }
  @include display_tab {
    bottom: 0;
    right: 0;
    position: absolute;
    margin: 0 20px 50px 0;
  }
  @include display_pc {
    display: none;
  }
}

</style>