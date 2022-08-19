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
  grid-template-columns: 6.5rem 1fr;
  gap: 1rem;
}
</style>
