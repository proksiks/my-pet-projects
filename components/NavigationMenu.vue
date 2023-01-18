<template>
  <div class="nav-wrapper">
    <nav class="nav-menu" :class="{ open: stateMenu }">
      <ul class="nav-menu__list">
        <li class="nav-menu__item">
          <button
            class="nav-menu__burger"
            :class="{ close: stateMenu }"
            @click="toggleMenu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </li>
        <li
          class="nav-menu__item"
          v-for="(item, index) in navigation"
          :key="index"
          @click="closeMenu"
        >
          <NuxtLink class="nav-menu__link" :to="item.link">
            <span class="nav-menu__text">
              {{ item.text }}
            </span>
            <span class="nav-menu__icon nav-menu__icon_invert">
              <nuxt-img
                :src="`/images/icons/${item.icon}`"
                :alt="`${item.text} страница`"
              />
            </span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <span class="nav-menu__holder" @click="toggleMenu"></span>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { fields } from "~/content/header.json";

const stateMenu = ref(false);
const navigation = fields.navigation;

function toggleMenu() {
  stateMenu.value = !stateMenu.value;
  document.body.classList.toggle("scroll-off");
}

function closeMenu() {
  stateMenu.value = false;
  document.body.classList.remove("scroll-off");
}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/scss/components/left-nav-menu";
</style>
