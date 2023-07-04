//Дана сторона квадрата, найти его периметр и площадь
<template>
  <div @submit.prevent>
    <h4>Дана сторона квадрата, найти его периметр и площадь</h4>
    <p>Введите сторону квадрата:</p>
    <input v-model="sideLength" type="number" />
    <p>Периметр квадрата: {{ sideLength * 4 }}</p>
    <p>Площадь квадрата: {{ Math.pow(sideLength, 2) }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return { sideLength: 10 };
  },
};
</script>

<style scoped >
</style>
