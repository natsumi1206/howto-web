<template>
  <div>
    <v-app
      v-if="$store.getters.loggedIn"
      :style=" {background: $vuetify.theme.themes.dark.background} "
    >
      <Header />
      <v-container
        fill-height
        style="position: relative;"
      >
        <v-row>
          <Sidebar id="sidebar" />
          <router-view />
          <v-btn
            id="post-btn-sp"
            fab
            x-large
            color="teal lighten-1"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-row>
      </v-container>
    </v-app>
    <v-app
      v-if="!$store.getters.loggedIn"
    >
      <router-view />
    </v-app>
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import Sidebar from "./components/Sidebar.vue"

export default {
  components: {
    Header,
    Sidebar
  },
  methods: {}
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
    position: fixed;
    margin: 0 20px 50px 0;
  }
  @include display_tab {
    bottom: 0 !important;
    right: 0 !important;
    position: fixed !important;
    margin: 0 20px 50px 0 !important;
  }
  @include display_pc {
    display: none;
  }
}

</style>