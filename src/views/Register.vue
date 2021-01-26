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
        <v-card-title>新規登録</v-card-title>
        <v-text-field
          v-model="name"
          label="name"
          :rules="[required]"
        />
        <v-text-field
          v-model="email"
          label="email"
        />
        <v-text-field
          v-model="password"
          label="password"
        />
        <v-btn @click="register()">
          登録
        </v-btn>
        <v-btn>
          <router-link to="/login">
            ログイン画面へ
          </router-link>
        </v-btn>
      </v-card>
    </v-row>
  </v-app>
</template>

<script>
import Api from "../api/Api"
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      required: value => !!value || "必ず入力してください",
    }
  },
  methods:{
    register() {
      Api.post("register", {
        name: this.name,
        email: this.email,
        password: this.password
      }).then(response => {
        console.log(response)
      }).catch(error => {
        console.log(error)
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