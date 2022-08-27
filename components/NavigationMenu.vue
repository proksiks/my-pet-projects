<template>
  <nav class="nav-menu">
    <ul class="nav-menu__list">
      <li class="nav-menu__item">
        <NuxtLink class="nav-menu__link" to="/">
          <span class="nav-menu__icon"></span>
          <span class="nav-menu__text">Home</span>
        </NuxtLink>
      </li>
      <li class="nav-menu__item">
        <NuxtLink class="nav-menu__link" to="/about">About</NuxtLink>
      </li>
      <li class="nav-menu__item">
        <NuxtLink class="nav-menu__link" to="/tailwind">tailwind</NuxtLink>
      </li>
      <li class="nav-menu__item">
        <NuxtLink class="nav-menu__link" to="/currency-converter">currency converter</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/scss/components/_left-nav-menu.scss";
</style>
