//Найти периметр и площадь равнобедренной трапеции с основаниями a и b   (a > b) и углом ∝ при большем основании (угол дан в радианах).
//Сначала надо найти формулу трапеции.
//Формула: S=(a+b)*h, здесь h -высота трапеции.
//h неизвестна, 2x=a-b, отсюда x=(a-b)/2
//(h/x)=tg(alfa)
//h=x*tg(alfa), тогда S=(a+b)*(a-b)/4*tg(alfa)
//p = a + b + 2* side
<template>
  <div>
    <h4>
      Найти периметр и площадь равнобедренной трапеции с основаниями a и b (a >
      b) и углом ∝ при большем основании (угол дан в радианах).
    </h4>
    <p>
      Основание А:
      <input v-model="baseA" type="number" />
    </p>
    <p>
      Основание B:
      <input v-model="baseB" type="number" />
    </p>
    <p>Угол в радианах<input v-model="cornerRad" type="number" /></p>
    <p>
      Площадь равнобедренной трапеции: {{ getArea(baseA, baseB, cornerRad) }}
    </p>
    <p>
      Периметр равнобедренной трапеции:
      {{ getPerimeter(baseA, baseB, cornerRad) }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return { baseA: 30, baseB: 10, cornerRad: 30 };
  },
  methods: {
    getPerimeter(baseA, baseB, cornerRad) {
      return (
        Math.sqrt(
          (Math.pow((baseA - baseB) / 2), 2) +
            Math.pow((baseA - baseB) / 2) * Math.tan(cornerRad),
          2
        ) *
          2 +
        baseA +
        baseB
      );
    },
    getArea(baseA, baseB, cornerRad) {
      return ((Math.pow(baseA + baseB), 2) / 4) * Math.tan(cornerRad);
    },
  },
};
</script>

<style>
</style>
