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
    @media (min-width: 420px) {
      display: flex;
    }
  }
  .main {
    width: 100%;
    min-height: 100vh;
    padding: var(--default-padding);
    background-color: var(--main-2);
  }
</style>
