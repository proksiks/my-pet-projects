<template>
  <div class="wrapper">
    <NavMenu />
    <main class="main">
      <slot />
    </main>
  </div>
</template>

<script></script>

<style lang="scss">
  .wrapper {
    display: flex;
  }
  .main {
    width: 100%;
    min-height: 100vh;
    padding: var(--default-padding);
    background-color: var(--main-layout-bg);
  }
</style>
