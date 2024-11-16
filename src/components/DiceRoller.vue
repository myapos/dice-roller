<template>
  <section class="dice_roller">
    <form @submit.prevent="saveSelection">
      <label for="num_of_rolls">Number of Dice</label>
      <section class="action">
        <input type="number" id="num_of_rolls" name="num_of_rolls" :value="selection" @input="handleSelection" max="12"
          min="1">
        <button type="submit">Roll</button>
      </section>
    </form>
    <section class="preview" v-if="rolls.length > 0">
      <div class="dice_wrapper" v-for="(roll, index) in rolls" :key="index">
        <Dice :roll="roll" />
      </div>
    </section>
    <section v-else-if="showWarning" class="warning">Select a number of rolles first</section>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import createRange from '../utils/createRange';
import getRandomIntInRange from '../utils/getRandomIntInRange';
import Dice from './Dice.vue';

const selection = ref<number | undefined>();
const showWarning = ref<boolean>(false)
const rolls = ref<Array<number>>([]);

const resetRolls = () => {
  rolls.value = [];
  showWarning.value = false;
}

const resetSelection = () => {
  selection.value = undefined;
}

const saveSelection = () => {
  if (!selection.value) {
    showWarning.value = true;
    return;
  }
  resetRolls();
  const numOfRolls = createRange(1, selection.value);

  numOfRolls.forEach(() => {
    const randomRoll = getRandomIntInRange(1, 6);
    rolls.value.push(randomRoll)
  })
}

const handleSelection = (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (!target.value) {
    resetSelection();
    resetRolls();
    return;
  }
  selection.value = parseInt(target.value);
}

</script>

<style scoped>
.dice_roller {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
  font-size: 16px;
  gap: var(--gap);
  --borderRadius: 5px;
  --largeborderRadius: 15px;
  --padding: 10px;
  --fontSize: 1rem;
  --gap: 5px;
}

form label {
  font-weight: bold;
}

button {
  background-color: grey;
  border: 0;
  border-radius: var(--borderRadius);
  padding: var(--padding);
  font-size: var(--fontSize);
  color: white;
}

button:hover {
  cursor: pointer;
  background-color: lightgrey;
  color: black;
}

button::disabled {
  background-color: white;
  color: black;
}

input {
  border: 1px solid black;
  border-radius: var(--borderRadius);
  font-size: var(--fontSize);
}

form {
  display: flex;
  flex-direction: column;
  gap: var(--gap);
  margin: 0 auto;
}

.action {
  display: flex;
  gap: var(--gap);
}

.preview {
  background-color: lightgrey;
  border-radius: var(--largeborderRadius);
  padding: var(--padding);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  gap: var(--gap);
}

.dice_wrapper {
  border-radius: var(--borderRadius);
  background-color: white;
  width: 5rem;
  height: 5rem;
  border: .2px solid black;
  border-radius: 0.5rem;
  padding: 2px;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: .5rem;
  grid-template-areas: "first-start first-middle first-end"
    "second-start second-middle second-end"
    "third-start third-middle third-end"
}

.warning {
  font-size: 0.8rem;
  color: red;
  text-align: center;
}
</style>