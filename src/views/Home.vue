<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  created(){
    console.log(this);
    this.$http.post("/user_login/Login", {
    "login_account": "15110283003",
    "login_password": "283003"
    }).then(res => {
        console.log(res.data);
    })
  }
}
</script>
