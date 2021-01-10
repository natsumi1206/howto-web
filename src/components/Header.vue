<template>
  <div>
    <div class="border-bottom">
      <v-app-bar
        color="#2a2a2a"
        elevation="0"
      >
        <v-toolbar-title>
          Title
        </v-toolbar-title>
        <v-spacer />
        <v-btn
          text
          style="text-transform: none;"
        >
          Logout
        </v-btn>
      </v-app-bar>
    </div>
    <div class="border-bottom">
      <v-tabs
        grow
        color="teal darken-1"
        background-color="#2a2a2a"
        show-arrows
      >
        <v-tabs-slider />
        <v-tab>人材</v-tab>
        <v-tab>建築</v-tab>
        <v-tab>会計</v-tab>
        <v-tab>音楽</v-tab>
        <v-tab>IT基礎</v-tab>
        <v-tab>IT応用</v-tab>
        <v-tab>マナー</v-tab>
        <v-spacer />
        <v-tab>all</v-tab>
      </v-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
}
</script>