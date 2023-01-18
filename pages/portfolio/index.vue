<template>
  <div class="projects">
    <ul class="projects__items">
      <li class="projects__item" v-for="(item, index) in projects" :key="index">
        <nuxt-link class="projects__link" :to="`/portfolio/${item.link}`">
          <div class="projects__img">
            <nuxt-img
              v-if="item.image"
              :src="`/images/icons/${item.icon}`"
              :alt="`${item.title}`"
            />
          </div>
          <div class="projects__title">
            {{ item.title }}
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { fields } from "~/content/projects";

const projects = ref(fields.projects);
</script>

<style lang="scss" scoped>
@import "~/assets/styles/scss/components/portfolio";
</style>
