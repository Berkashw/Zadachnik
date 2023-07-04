<template>
  <div @submit.prevent>
    <h4>Даны катеты треугольника. Найти его гипотенузу и площадь.</h4>
    <p>Ввевидете первый катет:</p>
    <input v-model="firstLeg" type="number" />
    <p>Введите второй катет</p>
    <input v-model="secondLeg" type="number" />
    <p>Гипотенуза треугольника:{{ getHypotenuse() }}</p>
    <p>Площадь треугольника: {{ getArea() }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return { firstLeg: 10, secondLeg: 20 };
  },
  methods: {
    getHypotenuse() {
      return Math.sqrt(
        Math.pow(this.firstLeg, 2) + Math.pow(this.secondLeg, 2)
      );
    },
    getArea() {
      return (this.firstLeg * this.secondLeg) / 2;
    },
  },
};
</script>

<style>
</style>
