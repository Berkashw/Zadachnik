//Дана сторона равностороннего треугольника. Найти его  площадь и радиусы вписанной и описанной окружностей.
<template>
  <div @submit.prevent>
    <h4>
      Дана сторона равностороннего треугольника. Найти его площадь и радиусы
      вписанной и описанной окружностей.
    </h4>
    <p>Введите сторну треугольника</p>
    <input v-model="triangleSide" type="number" />
    <p>Площадь треугольника: {{ getArea() }}</p>
    <p>Радиус вписанной окружности: {{ getInscribedCircleRadius() }}</p>
    <p>Радиус описанной окружности: {{ getCircumscribedCircleRadius() }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return { triangleSide: 10 };
  },
  methods: {
    getArea() {
      return (Math.sqrt(3) / 4) * Math.pow(this.triangleSide, 2);
    },
    getInscribedCircleRadius() {
      return this.triangleSide / (2 * Math.sqrt(3));
    },
    getCircumscribedCircleRadius() {
      return this.triangleSide / Math.sqrt(3);
    },
  },
};
</script>

<style>
</style>
