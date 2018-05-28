<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

.page-container {
  background-color: #ffffff;
}

/* 用于页面渐现，请勿删除 beigin */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
/* 用于页面渐现，请勿删除 end */

.text-container {
  width: 300px;
  height: 50px;
  padding: 10px;
  font-size: 36px;
}
</style>

<template>
<div class="page-wraper">
  <!-- 用于页面渐现，请勿删除 transition -->
  <transition name="fade">
    <div class="page-container" v-if="text">
      <div class="text-container"><span>{{this.text}}</span></div>
    </div>
  </transition>
</div>
</template>

<script>
import Component1 from "./components/component1.vue";

export default {
  name: "app",
  components: { Component1 },
  data() {
    return {
      text: null
    };
  },
  methods: {
    loadData() {
      setTimeout(() => {
        this.text = "it is main page";
      }, 1000);
    }
  },

  created() {
    this.loadData();
  },

  mounted() {}
};
</script>


