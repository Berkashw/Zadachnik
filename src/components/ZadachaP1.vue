//Даны два числа. Получить их сумму, разность, произведение и частное.
<template>
  <div @submit.prevent>
    <h4>
      Даны два числа. Получить их сумму, разность, произведение и частное.
    </h4>
    Первое число <input v-model="firstNumber" type="number" /> Второе число
    <input v-model="secondNumber" type="number" />
    <p>Сумма: {{ firstNumber + secondNumber }}</p>
    <p>Разность: {{ firstNumber - secondNumber }}</p>
    <p>Произведение: {{ firstNumber * secondNumber }}</p>
    <p>Частное:{{ firstNumber / secondNumber }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return { firstNumber: 10, secondNumber: 5 };
  },
  methods: {},
};
</script>

<style scoped>
</style>
