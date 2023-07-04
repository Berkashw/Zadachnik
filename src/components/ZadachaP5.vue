<template>
  <div @submit.prevent>
    <h4>
      Известна длина окружности. Найти площадь круга, ограниченного этой
      окружностью.
    </h4>
    <p>Введите длину окружности</p>
    <input v-model="circleLength" type="number" />
    <p>Площадь круга: {{ circleArea(circleLength) }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      circleLength: 10,
    };
  },
  methods: {
    circleArea(circleLength) {
      return Math.pow(circleLength, 2) / (4 * Math.PI);
    },
  },
};
</script>

<style scoped>
</style>
