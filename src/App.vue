<template>
  <div id="app">
    <div>
      <router-link to="/">Home</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Noto Sans JP", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 32px 16px;
  width: 800px;
  max-width: 100%;
}
</style>
