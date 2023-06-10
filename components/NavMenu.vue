<template>
  <nav class="nav-menu">
    <ul class="nav-menu__list">
      <li class="nav-menu__list-item" v-for="item in header" :key="item.title">
        <NuxtLink class="nav-menu__list-link" :to="item.href">
          {{ item.title }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
  import { items } from "~/content/Header.json";
  const header = items;
</script>

<style lang="scss" scoped>
  .nav-menu {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    overflow-y: auto;
    background-color: var(--blue);
    border-radius: 0 10px 10px 0;
    padding: var(--default-padding);
  }
  .nav-menu__list {
    @include reset-list;
  }
  .nav-menu__list-link {
    color: var(--white);
  }
</style>
