<template>
  <v-app
    v-if="!$store.getters.loggedIn"
    id="login-color"
  >
    <v-row
      align-content="center"
      justify="center"
      class="ma-0"
    >
      <v-card
        color="#2a2a2a"
        width="70%"
        height="50%"
        class="pa-5 login-form"
      >
        <v-card-title>ログイン</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="email"
            label="email"
            :rules=" [required] "
          />
          <v-text-field
            v-model="password"
            label="password"
            :rules=" [required] "
            type="password"
          />
          <v-btn
            @click="login()"
          >
            ログイン
          </v-btn>
          <v-btn
            @click="getUser()"
          >
            ユーザー取得
          </v-btn>
        </v-card-text>
      </v-card>
    </v-row>
    <v-alert
      v-if="error"
      class="error"
      dismissible
      type="error"
      transition="slide-y-transition"
    >
      ログインに失敗しました
    </v-alert>
  </v-app>
</template>

<script>
import Api from "../api/Api";

export default {
  data () {
    return {
      email: "",
      password: "",
      error: false,
      required: value => !!value || "必ず入力してください",
    }
  },
  methods: {
    login() {
      Api.get("csrf-cookie").then(() => {
        Api.post("login", {
            email: this.email,
            password: this.password,
          })
          .then(response => {
            console.log(response);
            this.$store.commit("setEmail", this.email)
            this.$store.commit("setPassword", this.password)
            this.$router.push(this.$route.query.redirect)
          })
          .catch((error) => {
            console.log(error);
          })
      })
    },
    getUser() {
      Api.get("user").then(response => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
    }
  }
}

</script>

<style lang="scss" scoped>

#login-color{
  background-image: linear-gradient(to top, #212121 20%, #1C4440 50%,  #00897b 80%, #B2DFDB 100%);
}

.error {
  position: absolute;
  top: 0;
  width: 100%;
}

</style>