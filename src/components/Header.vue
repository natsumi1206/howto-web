<template>
  <div>
    <div>
      <v-app-bar
        color="#2a2a2a"
        app
        hide-on-scroll
        scroll-threshold="3"
      >
        <v-app-bar-title> Title</v-app-bar-title>
        <v-spacer />
        <v-btn
          id="logout"
          text
          class="lowercase"
        >
          Logout
        </v-btn>
        <v-app-bar-nav-icon @click="drawer = true" />
        <template
          v-slot:extension
        >
          <v-tabs
            grow
            color="teal darken-1"
            background-color="#2a2a2a"
            show-arrows
            center-active
          >
            <v-tabs-slider />
            <v-tab
              v-for="(tabItem, index) in tabItems"
              :key="index"
            >
              {{ tabItem.name }}
            </v-tab>
            <v-spacer />
            <v-tab>all</v-tab>
          </v-tabs>
        </template>
      </v-app-bar>
      <v-navigation-drawer
        v-model="drawer"
        temporary
        right
        app
        color="teal darken-1"
      >
        <v-list
          nav
          dense
          style="position: relative;"
          class="mt-3"
        >
          <v-list-item-group>
            <v-list-item-title class="title">
              Title
            </v-list-item-title>
            <v-divider />
            <v-list-item
              v-for="(menuItem, index) in menuItems"
              :key="index"
              class="my-3"
            >
              <v-list-item-title> {{ menuItem.name }} </v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <v-btn
          absolute
          bottom
          depressed
          block
          color="teal lighten-1"
          class="lowercase"
        >
          Logout
        </v-btn>
      </v-navigation-drawer>
    </div>
  </div>
</template>

<script>
import contents from "../contents"
export default {
  name: "Header",
  data () {
    return {
      drawer: false,
      menuItems: contents.menuItems,
      tabItems: contents.tabItems,
    }
  }
}
</script>

<style lang="scss" scoped>

#logout {
  @include display_sp {
    display: none !important;
  }
  @include display_tab {
    display: none !important;
  }
}

.v-app-bar__nav-icon {
  @include display_pc {
    display: none !important;
  }
}

</style>