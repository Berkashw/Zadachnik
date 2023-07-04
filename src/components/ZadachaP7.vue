//Ученик прочитал X страниц, что составляет 23% числа всех страниц в книге. Сколько страниц в книге?
<template>
  <div @submit.prevent>
    <h4>
      Ученик прочитал X страниц, что составляет 23% числа всех страниц в книге.
      Сколько страниц в книге?
    </h4>
    <p>Страниц прочитано:</p>
    <input v-model="pagesReaded" type="numbers" />
    <p>Прочитанный процент</p>
    <input v-model="percentReaded" type="numbers" />
    <p>Страниц в книге: {{ pagesCount() }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return { pagesReaded: 23, percentReaded: 23 };
  },
  methods: {
    pagesCount() {
      return (this.pagesReaded * 100) / this.percentReaded;
    },
  },
};
</script>

<style>
</style>
