<template>
  <div id="app">
    <!-- <router-view/> -->
    <vue-terminal-emulator defaultTask="selfIntroduct"></vue-terminal-emulator>
  </div>
</template>

<script>

import VueTerminalEmulator from './components/VueTerminalEmulator'

export default {
  name: 'app',
  components: { VueTerminalEmulator }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
