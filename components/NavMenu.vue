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
    height: 100vh;
    overflow-y: auto;
    background-color: var(--left-menu);
    padding: var(--default-padding);
  }
  .nav-menu__list {
    @include reset-list;
  }
  .nav-menu__list-item {
    & + & {
      margin-top: 1rem;
    }
  }
  .nav-menu__list-link {
    width: 100%;
    text-align: center;
    padding: 1rem 0.5rem;
    display: block;
    text-decoration: none;
    color: var(--left-menu);
    border-radius: 0.3rem;
    background-color: var(--white);
    font-weight: 700;
  }
</style>
