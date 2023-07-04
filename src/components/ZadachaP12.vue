//Дано натуральное число N  (N>99) . Определить число сотен в нем.
<template>
  <div @submit.prevent>
    <h4>Дано натуральное число N (N>99) . Определить число сотен в нем.</h4>
    <p>Введите натуральное число:</p>
    <input v-model="naturalNumber" type="number" />
    <p>Число сотен : {{ getHundredsQuantity() }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return { naturalNumber: 100220 };
  },
  methods: {
    getHundredsQuantity() {
      return Math.trunc(this.naturalNumber / 100);
    },
  },
};
</script>

<style>
</style>
