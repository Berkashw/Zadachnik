//Дано четырехзначное число. Определить его первую и последнюю цифры.
<template>
  <div @submit.prevent>
    <h4>Дано четырехзначное число. Определить его первую и последнюю цифры.</h4>
    <p>Введите большое число</p>
    <input
      v-model="longNumber"
      type="number"
      :maxlength="4"
      @change="getFirstLastChar()"
    />
    <button @click="getFirstLastChar">Найти первый и последний символ</button>
    <p>Первый символ:{{ firstChar }} Последний символ:{{ lastChar }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return { longNumber: 1033, firstChar: 1, lastChar: 3 };
  },
  methods: {
    getFirstLastChar() {
      const longNumberString = this.longNumber.toString();
      this.firstChar = longNumberString[0];
      this.lastChar = longNumberString.slice(longNumberString.length - 1);
    },
  },
};
</script>

<style>
</style>
