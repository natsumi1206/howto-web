<template>
  <v-row>
    <v-col
      style="height: 650px; background-color: #2a2a2a; max-width: 300px; border-radius: 2px;"
      class="mx-3"
    >
      <v-row
        style="height: 650px;"
        justify="cemter"
        align-content="center"
      >
        <v-row
          style="width: 100%; height: 33%; margin: 0"
          justify="center"
          align-content="center"
        >
          <v-card />
        </v-row>
        <v-row
          style="width: 100%; height: 33%; margin: 0"
          justify="center"
          align-content="center"
        >
          <v-card
            width="80%"
            height="100%"
            color="grey darken-2"
            style="border-radius: 10px;"
          >
            <v-card-text />
          </v-card>
        </v-row>
        <v-row
          style="width: 100%; height: 33%; margin: 0"
          justify="center"
          align-content="center"
        >
          <v-btn
            color="teal darken-1"
            style="border-radius: 2px;"
          >
            投稿する
          </v-btn>
        </v-row>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Sidebar",
}
</script>