<template>
  <div class="_layout">
    <NavigationMenu />
    <div class="wrapper">
      <slot />
    </div>
  </div>
</template>

<style scoped>
._layout {
  display: grid;
  grid-template-columns: 15rem 1fr;
  gap: 1rem;
  min-height: 100vh;
}
</style>
