<template>
  <main>

    <DiceRoller />
    <footer>Created by <a href="https://github.com/myapos" target="_blank">Myron Apostolakis</a></footer>
  </main>
</template>

<script setup lang="ts">
import DiceRoller from './components/DiceRoller.vue';
// This question is adapted from FrontendEval's Rolling Dice question.
// link: https://frontendeval.com/questions/rolling-dice
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 95vh;
}

footer {
  text-align: center;
  font-size: 0.8rem;
  color: grey;
}
</style>