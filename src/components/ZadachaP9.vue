//Даны два положительных числа. Найти их среднее геометрическое.
<template>
  <div @submit.prevent>
    <h4>Даны два положительных числа. Найти их среднее геометрическое.</h4>
    <input v-model="firstNumber" type="number" />
    <input v-model="secondNumber" type="number" />
    <p>Среднее геометрическое {{ getGeometricMean() }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return { firstNumber: 10, secondNumber: 100 };
  },
  methods: {
    getGeometricMean() {
      return Math.sqrt(this.firstNumber * this.secondNumber);
    },
  },
};
</script>

<style>
</style>
