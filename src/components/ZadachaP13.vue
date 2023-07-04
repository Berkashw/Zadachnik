//Найти остаток от деления  натурального числа a на натуральное число b.
<template>
  <div @submit.prevent>
    <h4>
      Найти остаток от деления натурального числа a на натуральное число b.
    </h4>
    <p>Введите натуральное чилсо а:</p>
    <input v-model="dividend" type="number" />
    <p>Введите натуральное число b:</p>
    <input v-model="divider" type="number" />
    <p>Остаток от деления: {{ getRemiender() }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return { dividend: 103, divider: 10 };
  },
  methods: {
    getRemiender() {
      const dividend = this.dividend;
      const divider = this.divider;
      return dividend - Math.trunc(dividend / divider) * divider;
    },
  },
};
</script>

<style>
</style>
