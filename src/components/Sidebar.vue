<template>
  <v-col
    class="mx-3 sidebar-container round-s"
  >
    <v-row
      class="sidebar-height"
      justify="center"
      align-content="center"
    >
      <v-row
        class="sidebar-colomn"
        justify="center"
        align-content="center"
      >
        <v-card />
      </v-row>
      <v-row
        class="sidebar-colomn"
        justify="center"
        align-content="center"
      >
        <v-card
          width="80%"
          height="100%"
          color="grey darken-2"
          class="round-l"
        >
          <v-card-text />
        </v-card>
      </v-row>
      <v-row
        class="sidebar-colomn"
        justify="center"
        align-content="center"
      >
        <v-btn
          color="teal darken-1"
          class="round-s"
        >
          投稿する
        </v-btn>
      </v-row>
    </v-row>
  </v-col>
</template>

<script>
export default {
  name: "Sidebar",
}
</script>

<style lang="scss" scoped>

.sidebar-container {
  height: 650px !important;
  background-color: #2a2a2a !important;
  max-width: 300px !important;
}

.sidebar-height {
  height: 650px !important;
}

.sidebar-colomn {
  width: 100% !important;
  height: 33% !important;
  margin: 0 !important;
}

</style>