<template>
  <nav class="nav-menu" :class="{open: stateMenu}">
    <span class="nav-menu__holder" @click="toggleMenu"></span>
    <ul class="nav-menu__list">
      <li class="nav-menu__item">
        <button class="nav-menu__burger" :class="{close: stateMenu}" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </li>
      <li class="nav-menu__item" v-for="(item, index) in navigation" :key="index" @click="toggleMenu">
        <NuxtLink class="nav-menu__link" :to="item.link">
          <span class="nav-menu__text">
            {{ item.text }}
          </span>
          <span class="nav-menu__icon nav-menu__icon_invert">
            <nuxt-img :src="`/images/icons/${item.icon}`" :alt="`${item.text} страница`" />
          </span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import {ref} from "vue";
const navigation = [
  {
    link: "/",
    icon: "home.svg",
    text: "home",
  },
  {
    link: "/about",
    icon: "home.svg",
    text: "about",
  },
];

const stateMenu = ref(false);

function toggleMenu() {
  stateMenu.value = !stateMenu.value;
  document.body.classList.toggle("scroll-off");
}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/scss/components/left-nav-menu";
</style>
