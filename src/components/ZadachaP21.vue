//21 Найти периметр и площадь прямоугольной трапеции с основаниями a и b (a > b) и острым углом ∝ (угол дан в радианах).
<template>
  <div>
    <h4>
      21 Найти периметр и площадь прямоугольной трапеции с основаниями a и b (a
      > b) и острым углом ∝ (угол дан в радианах).
    </h4>
    <p>
      Основание A:
      <input v-model="baseA" type="number" />
    </p>
    <p>
      Основание B:
      <input v-model="baseB" type="number" />
    </p>
    <p>Острый угол: <input v-model="cornerRad" type="number" /></p>
    <p>Периметр: {{ getPerimetr(baseA, baseB, cornerRad) }}</p>
    <p>Площадь: {{ getArea(baseA, baseB, cornerRad) }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return { baseA: 30, baseB: 10, cornerRad: 50 };
  },
  methods: {
    getPerimetr(baseA, baseB, cornerRad) {
      const x = baseA - baseB;
      const h = x * Math.tan(cornerRad);
      const side = Math.sqrt(x * x + h * h);
      return baseA + baseB + side + h;
    },
    getArea(baseA, baseB, cornerRad) {
      const x = baseA - baseB;
      const h = x * Math.tan(cornerRad);
      const S1 = h * baseB;
      const S2 = (x * h) / 2;
      return S1 + S2;
    },
  },
};
</script>

<style>
</style>
