//Сторона квадрата равна а. Найти площадь заштрихованной части.
<template>
  <div @submit.prevent>
    <h4>Сторона квадрата равна а. Найти площадь заштрихованной части.</h4>
    <img src="@/img/zadacha16.png" />
    <p>Введите сторону квадрата:</p>
    <input v-model="squareSide" type="number" />
    <p>Площадь заштрихованной части: {{ getPaintedArea() }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return { squareSide: 10 };
  },
  methods: {
    getPaintedArea() {
      const squareSide = this.squareSide;
      return Math.pow(squareSide, 2) - Math.PI * Math.pow(squareSide / 2, 2);
    },
  },
};
</script>

<style>
</style>
