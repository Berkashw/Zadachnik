//Найти расстояние AB между точками с координатами A(x1, y1) и B(x2, y2).

<template>
  <div>
    <h4>
      Найти расстояние AB между точками с координатами A(x1, y1) и B(x2, y2).
    </h4>
    <p>Введите координаты точки A:</p>
    x:<input v-model="firstPointX" type="number" /> y:<input
      v-model="firstPointY"
      type="number"
    />
    <p>Введите координаты точки B:</p>
    x:<input v-model="secondPointX" type="number" /> y:<input
      v-model="secondPointY"
      type="number"
    />
    <p>
      Растояние между точками:
      {{ getLength(firstPointX, firstPointY, secondPointX, secondPointY) }}
    </p>
  </div>
</template>

<script>
import FunctionsMixin from "@/Js/FunctionsMixin";
export default {
  mixins: [FunctionsMixin],
  data() {
    return {
      firstPointX: 10,
      firstPointY: 10,
      secondPointX: 20,
      secondPointY: 20,
    };
  },
};
</script>

<style scoped>
input {
  width: 5em;
}
</style>
