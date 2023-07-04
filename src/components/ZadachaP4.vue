//Дан радиус окружности, найти ее длину и площадь круга, ограниченную этой окружностью.
<template>
  <div @submit.prevent>
    <h4>
      Дан радиус окружности, найти ее длину и площадь круга, ограниченную этой
      окружностью.
    </h4>
    <p>Введите радиус окружности</p>
    <input v-model="radius" type="number" />
    <p>Длина окружности: {{ circleLength(radius) }}</p>
    <p>Площадь круга: {{ circleArea(radius) }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return { radius: 10 };
  },
  methods: {
    circleLength(radius) {
      return 2 * Math.PI * radius;
    },
    circleArea(radius) {
      return Math.PI * Math.pow(radius, 2);
    },
  },
};
</script>


<style scoped>
</style>
