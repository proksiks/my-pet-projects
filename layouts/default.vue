<template>
  <div class="wrapper" :style="{ padding: paddingLeft }">
    <NavMenu />
    <main class="main">
      <slot />
    </main>
  </div>
</template>

<script setup>
  import { onMounted, ref } from "vue";
  const paddingLeft = ref(0);

  onMounted(() => {
    const leftMenuEl = document.querySelector(".nav-menu");
    paddingLeft.value = leftMenuEl.offsetWidth;
  });
</script>

<style lang="scss">
  .wrapper {
    display: flex;
    padding-left: 88px;
  }
  .main {
    width: 100%;
    min-height: 100vh;
    padding: var(--default-padding);
    background-color: var(--main-layout-bg);
  }
</style>
