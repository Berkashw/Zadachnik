// На поле, площадь которого X га, работали хлопкоуборочные машины.
// За сутки они убрали 15% всего поля. Сколько гектаров хлопка осталось убрать?

<template>
  <div @submit.prevent>
    <p>Введите площадь поля</p>
    <input v-model="fieldArea" type="number" />
    <p>Введите процент убранного поля за сутки</p>
    <input v-model="clearedPercent" type="number" />
    <p>
      Осталось убрать:{{ getRemainingField() }}
      гектар
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return { fieldArea: 100, clearedPercent: 15 };
  },
  methods: {
    getRemainingField() {
      return this.fieldArea - (this.fieldArea * this.clearedPercent) / 100;
    },
  },
};
</script>

<style>
</style>
