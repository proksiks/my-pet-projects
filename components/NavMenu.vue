<template>
  <nav class="nav-menu">
    <div class="nav-menu__inner">
      <ul class="nav-menu__list">
        <li class="nav-menu__list-item" v-for="item in header" :key="item.title">
          <NuxtLink class="nav-menu__list-link" :to="item.href">
            {{ item.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
  import { items } from "~/content/Header.json";
  const header = items;
</script>

<style lang="scss" scoped>
  .nav-menu {
    background-color: var(--main);
  }
  .nav-menu__inner {
    padding: var(--default-padding);
    position: sticky;
    top: 0;
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }

    @media (min-width: 420px) {
      height: 100vh;
    }
  }
  .nav-menu__list {
    list-style-type: none;
    padding: 0;
    margin: 0;
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
    color: var(--main);
    border-radius: 0.3rem;
    background-color: var(--global);
    font-weight: 700;
  }
</style>
