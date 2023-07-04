//Дана длина ребра куба. Найти площадь грани, площадь полной поверхности и объем этого куба
<template>
  <div @submit.prevent>
    <h4>
      Дана длина ребра куба. Найти площадь грани, площадь полной поверхности и
      объем этого куба
    </h4>
    <p>Введите длину ребра куба:</p>
    <input v-model="cubeEdge" type="number" />
    <p>Площадь грани: {{ cubeFacetArea() }}</p>
    <p>Площадь полной поверхности: {{ cubeFacetArea() * 6 }}</p>
    <p>Объём куба: {{ cubeVolume() }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return { cubeEdge: 10 };
  },
  methods: {
    cubeFacetArea() {
      return Math.pow(this.cubeEdge, 2);
    },
    cubeVolume() {
      return Math.pow(this.cubeEdge, 3);
    },
  },
};
</script>

<style>
</style>
