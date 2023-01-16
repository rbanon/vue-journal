<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
  <h1>Hola mundo</h1>
  <button @click="goToDaybook" class="btn btn-primary">Primary</button>
  <button @click="goToDaybook" class="btn btn-secondary">Secondary</button>
  <button @click="goToDaybook" class="btn btn-success">Success</button>
</template>

<script>
  export default {
    methods: {
      goToDaybook(){
        console.log("goToDaybook method")
        this.$router.push({name: 'no-entry'})
      }
    }
  }
</script>

