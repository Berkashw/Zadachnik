//Даны два радиуса R1 и R2 (R1 меньше R2). Найти площадь кольца, ограниченного данными радиусами.
<template>
  <div @submit.prevent>
    <h4>
      Даны два радиуса R1 и R2 (R1 меньше R2). Найти площадь кольца,
      ограниченного данными радиусами.
    </h4>
    <p>Введите первый радиус:</p>
    <input v-model="firstRadius" type="number" />
    <p>Введите второй радиус:</p>
    <input v-model="secondRadius" type="number" />
    <p>Площадь кольца: {{ getRingArea(firstRadius, secondRadius) }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return { firstRadius: 10, secondRadius: 30 };
  },
  methods: {
    getRingArea(firstRadius, secondRadius) {
      return Math.PI * Math.pow(firstRadius, 2) - Math.PI * (secondRadius, 2);
    },
  },
};
</script>

<style>
</style>
