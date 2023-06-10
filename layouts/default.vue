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

<style>
  .wrapper {
    padding-left: 88px;
  }
  .main {
    padding: var(--default-padding);
  }
</style>
