<template>
  <div>
    <h1 class="projects-title">Проекты {{ list.length }} шт</h1>
    <ul class="projects-list" v-if="list">
      <li class="projects-item" v-for="item in reactiveList" :key="item.link">
        <div class="projects-box">
          <NuxtLink class="projects-card" :to="item.link" :target="isExternalLink(item.link)">
            <div class="projects-picture" v-if="item.img">
              <img class="projects-img" :src="item.img" v-if="item.title" :alt="item.title" loading="lazy" />
            </div>
            <img class="projects-feedback" v-if="item.feedbackShow" :src="item.feedback" :alt="item.title" loading="lazy" />
            <div class="projects-descr" v-if="item.title">
              {{ item.title }} <br />
              <span v-if="item.time">Затраченное время {{ item.time }}ч</span>
            </div>
          </NuxtLink>

          <p class="projects-subtitle" v-if="item.tags">Теги</p>
          <button class="projects-tag" v-for="tag in item.tags">{{ tag }}</button>
          <p class="projects-subtitle" v-if="item.technologies">Технологии</p>
          <button class="projects-tag" v-for="technolgy in item.technologies">{{ technolgy }}</button>

          <button class="projects-button" v-if="item.feedback" @click="item.feedbackShow = !item.feedbackShow">
            Отзыв
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { list } from "~/content/Projects.json";
  const reactiveList = reactive(list);
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
  }
  .projects-feedback {
    display: block;
    max-width: 100%;
    width: 100%;
    margin: 1rem 0;
    border-radius: 0.5rem;
  }
  .projects-subtitle {
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    margin-top: 0;
  }
  .projects-tag {
    margin-bottom: 0.5rem;
    margin-right: 0.5rem;
    background-color: rgb(0, 67, 100);
    border: none;
    padding: 0.2rem 0.5rem;
    border-radius: 0.5rem;
    font-size: 0.7rem;
    color: var(--white);
    transition: background-color 0.15s ease;
  }
  .projects-box {
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
    &:hover {
      .projects-img {
        transform: scale(1.05);
      }
    }
  }
  .projects-button {
    cursor: pointer;
    border: none;
    padding: 1rem;
    width: 100%;
    color: var(--white);
    margin-top: 1rem;
    border-radius: 0.5rem;
    background-color: rgba(62, 83, 92, 0.4);
    transition: background-color 0.15s ease;
    &:hover {
      background-color: rgba(62, 83, 92, 0.6);
    }
    &:active {
      background-color: rgba(62, 83, 92, 0.8);
    }
  }
  .projects-img {
    position: absolute;
    left: 0;
    top: 0;
    max-width: 100%;
    aspect-ratio: 16/8;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  .projects-title {
    font-size: 2rem;
    font-weight: 700;
  }
  .projects-descr {
    font-size: 1.25rem;
    font-weight: 700;
    margin: 0.5rem 0;
    span {
      font-size: 0.75rem;
      font-weight: 400;
    }
  }
</style>
