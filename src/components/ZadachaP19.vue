//Даны координаты трех вершин треугольника A(x1, y1), B(x2, y2), C(x3, y3). Найти его периметр и площадь.

<template>
  <div @submit.prevent>
    <h4>
      Даны координаты трех вершин треугольника A(x1, y1), B(x2, y2), C(x3, y3).
      Найти его периметр и площадь.
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
    <p>Введите координаты точки C:</p>
    x:<input v-model="thirdPointX" type="number" /> y:<input
      v-model="thirdPointY"
      type="number"
    />

    <p>
      Периметр треугольника:
      {{
        getTrianglePerimetr(
          getLength(firstPointX, firstPointY, secondPointX, secondPointY),
          getLength(secondPointX, secondPointY, thirdPointX, thirdPointY),
          getLength(firstPointX, firstPointY, thirdPointX, thirdPointY)
        )
      }}
    </p>
    <p>
      Площадь треугольника:
      {{
        getTriangleArea(
          getLength(firstPointX, firstPointY, secondPointX, secondPointY),
          getLength(secondPointX, secondPointY, thirdPointX, thirdPointY),
          getLength(firstPointX, firstPointY, thirdPointX, thirdPointY)
        )
      }}
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
      thirdPointX: 30,
      thirdPointY: 10,
    };
  },
  methods: {},
};
</script>

<style>
input {
  width: 5em;
}
</style>
