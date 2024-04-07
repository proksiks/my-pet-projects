<template>
  <div>
    <h1 class="projects-title">Проекты {{list.length}} шт</h1>
    <ul class="projects-list" v-if="list">
      <li class="projects-item" v-for="item in list" :key="item.link">
        <NuxtLink class="projects-card" :to="item.link" :target="isExternalLink(item.link)">
          <div class="projects-picture" v-if="item.img">
            <img class="projects-img" :src="item.img" :alt="item.title" />
          </div>
          <div class="projects-descr" v-if="item.title">{{ item.title }}</div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { list } from "~/content/Projects.json";
  const isExternalLink = (Link: string) => {
    return Link.includes("http") ? "_blank" : "";
  };
</script>

<style lang="scss" scoped>
  .projects-title {
    color: white;
  }
  .projects-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    list-style-type: none;
    padding: 0;
    margin: 0;
    @media (max-width: 1440px) {
      gap: 1rem;
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 1023px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }
  .projects-card {
    text-decoration: none;
    height: 100%;
    display: block;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: rgba(33, 43, 48, 0.4);
    box-shadow: 0 1rem 1.25rem -0.75rem rgba(62, 83, 92, 0.4);
    transition: box-shadow 0.3s ease, transform 0.3s ease, background-color 0.3s ease;
    &:hover {
      background-color: rgba(33, 43, 48, 1);
      transform: translateY(-0.5rem);
      box-shadow: 0 0.5rem 0.2rem 0.3rem rgba(54, 115, 139, 0.6);
    }
  }
  .projects-picture {
    position: relative;
    padding-bottom: 49%;
    border-radius: 0.25rem;
    overflow: hidden;
  }
  .projects-img {
    position: absolute;
    left: 0;
    top: 0;
    max-width: 100%;
    aspect-ratio: 16/8;
    object-fit: cover;
  }
  .projects-title {
    font-size: 2rem;
    font-weight: 700;
  }
  .projects-descr {
    font-size: 1.25rem;
    font-weight: 700;
    margin: 0.5rem 0;
    line-height: 1.45;
  }
</style>
