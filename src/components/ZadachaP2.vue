// Даны три числа. Найти среднее арифметическое  этих чисел.
<template>
  <div @submit.prevent>
    <h4>Даны три числа. Найти среднее арифметическое этих чисел.</h4>
    Первое число <input v-model.number="firstNumber" type="number" />
    Второе число
    <input v-model.number="secondNumber" type="number" /> Третье число
    <input v-model.number="thirdNumber" type="number" />
    <p>
      Среднее арифметическое =
      {{ getAverage() }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstNumber: 10,
      secondNumber: 10,
      thirdNumber: 10,
    };
  },
  methods: {
    getAverage() {
      let sum = this.firstNumber + this.secondNumber + this.thirdNumber;
      sum = sum / 3;
      return sum;
    },
  },
};
</script>

<style scoped>
</style>
