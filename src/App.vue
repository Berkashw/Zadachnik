<template>
  <div class="main">
    <h1>Задачник</h1>

    <p @click="($event) => (showP1 = !showP1)">Часть 1.</p>
    <ul>
      <transition>
        <div class="divp" v-if="showP1">
          <li>
            <p @click="($event) => (showz1 = !showz1)">Задача 1</p>
            <transition>
              <zadacha-p1 v-if="showz1"></zadacha-p1>
            </transition>
          </li>
          <li>
            <P @click="showz2 = !showz2">Задача 2</P>
            <transition>
              <zadacha-p2 v-if="showz2"></zadacha-p2>
            </transition>
          </li>
          <li>
            <p @click="showz3 = !showz3">Задача 3</p>
            <transition>
              <zadacha-p3 v-if="showz3"></zadacha-p3>
            </transition>
          </li>
          <li>
            <p @click="showz4 = !showz4">Задача 4</p>
            <transition>
              <zadacha-p4 v-if="showz4"></zadacha-p4>
            </transition>
          </li>
          <li>
            <p @click="showz5 = !showz5">Задача 5</p>
            <transition>
              <zadacha-p5 v-if="showz5"></zadacha-p5>
            </transition>
          </li>
          <li>
            <p @click="showz6 = !showz6">Задача 6</p>
            <transition>
              <zadacha-p6 v-if="showz6"></zadacha-p6>
            </transition>
          </li>
          <li>
            <p @click="showz7 = !showz7">Задача 7</p>
            <transition>
              <zadacha-p7 v-if="showz7"></zadacha-p7>
            </transition>
          </li>
          <li>
            <p @click="showz8 = !showz8">Задача 8</p>

            <transition>
              <zadacha-p8 v-if="showz8"></zadacha-p8>
            </transition>
          </li>
          <li>
            <p @click="showz9 = !showz9">Задача 9</p>
            <transition>
              <zadacha-p9 v-if="showz9"></zadacha-p9>
            </transition>
          </li>
          <li>
            <p @click="showz10 = !showz10">Задача 10</p>
            <transition>
              <zadacha-p10 v-if="showz10"></zadacha-p10>
            </transition>
          </li>
          <li>
            <p @click="showz11 = !showz11">Задача 11</p>
            <transition>
              <zadacha-p11 v-if="showz11"></zadacha-p11>
            </transition>
          </li>
          <li>
            <p @click="showz12 = !showz12">Задача 12</p>
            <transition>
              <zadacha-p12 v-if="showz12"></zadacha-p12>
            </transition>
          </li>
          <li>
            <p @click="showz13 = !showz13">Задача 13</p>
            <transition>
              <zadacha-p13 v-if="showz13"></zadacha-p13>
            </transition>
          </li>
          <li>
            <p @click="showz14 = !showz14">Задача 14</p>
            <transition>
              <zadacha-p14 v-if="showz14"></zadacha-p14>
            </transition>
          </li>
          <li>
            <p @click="showz15 = !showz15">Задача 15</p>
            <transition>
              <zadacha-p15 v-if="showz15"></zadacha-p15>
            </transition>
          </li>
          <li>
            <p @click="showz16 = !showz16">Задача 16</p>
            <transition>
              <zadacha-p16 v-if="showz16"></zadacha-p16>
            </transition>
          </li>
          <li>
            <p @click="showz17 = !showz17">Задача 17</p>
            <transition>
              <zadacha-p17 v-if="showz17"></zadacha-p17>
            </transition>
          </li>
          <li>
            <p @click="showz18 = !showz18">Задача 18</p>
            <transition>
              <zadacha-p18 v-if="showz18"></zadacha-p18>
            </transition>
          </li>
          <li>
            <p @click="showz19 = !showz19">Задача 19</p>
            <transition>
              <zadacha-p19 v-if="showz19"></zadacha-p19>
            </transition>
          </li>
          <li>
            <p @click="showz20 = !showz20">Задача 20</p>
            <transition>
              <zadacha-p20 v-if="showz20"></zadacha-p20>
            </transition>
          </li>
          <li>
            <p @click="showz21 = !showz21">Задача 21</p>
            <transition>
              <zadacha-p21 v-if="showz21"></zadacha-p21>
            </transition>
          </li>
        </div>
      </transition>
    </ul>
  </div>
</template>
<script>
import ZadachaP1 from "./components/ZadachaP1.vue";
import ZadachaP2 from "./components/ZadachaP2.vue";
import ZadachaP3 from "./components/ZadachaP3.vue";
import ZadachaP4 from "./components/ZadachaP4.vue";
import ZadachaP5 from "./components/ZadachaP5.vue";
import ZadachaP6 from "./components/ZadachaP6.vue";
import ZadachaP7 from "./components/ZadachaP7.vue";
import ZadachaP8 from "./components/ZadachaP8.vue";
import ZadachaP9 from "./components/ZadachaP9.vue";
import ZadachaP10 from "./components/ZadachaP10.vue";
import ZadachaP11 from "./components/ZadachaP11.vue";
import ZadachaP12 from "./components/ZadachaP12.vue";
import ZadachaP13 from "./components/ZadachaP13.vue";
import ZadachaP14 from "./components/ZadachaP14.vue";
import ZadachaP15 from "./components/ZadachaP15.vue";
import ZadachaP16 from "./components/ZadachaP16.vue";
import ZadachaP17 from "./components/ZadachaP17.vue";
import ZadachaP18 from "./components/ZadachaP18.vue";
import ZadachaP19 from "./components/ZadachaP19.vue";
import ZadachaP20 from "./components/ZadachaP20.vue";
import ZadachaP21 from "./components/ZadachaP21.vue";
export default {
  name: "App",
  data() {
    return {
      showP1: true,
      showz1: false,
      showz2: false,
      showz3: false,
      showz4: false,
      showz5: false,
      showz6: false,
      showz7: false,
      showz8: false,
      showz9: false,
      showz10: false,
      showz11: false,
      showz12: false,
      showz13: false,
      showz14: false,
      showz15: false,
      showz16: false,
      showz17: false,
      showz18: false,
      showz19: false,
      showz20: false,
      showz21: false,
    };
  },
  components: {
    ZadachaP1,
    ZadachaP2,
    ZadachaP3,
    ZadachaP4,
    ZadachaP5,
    ZadachaP6,
    ZadachaP7,
    ZadachaP8,
    ZadachaP9,
    ZadachaP10,
    ZadachaP11,
    ZadachaP12,
    ZadachaP13,
    ZadachaP14,
    ZadachaP15,
    ZadachaP16,
    ZadachaP17,
    ZadachaP18,
    ZadachaP19,
    ZadachaP20,
    ZadachaP21,
  },
};
</script>

<style scoped>
h1 {
  text-align: 10px;
  margin-top: auto;
}
#app {
  text-align: left;
  color: #2c3e50;
  margin-top: 10px;
}
.main {
  width: 40em;
}
.divp {
  border: transparent;
}
div {
  border: solid;
  width: 20em;
  padding: 1px 12px;
}
</style>
