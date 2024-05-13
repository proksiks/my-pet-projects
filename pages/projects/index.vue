<template>
  <div>
    <h1 class="projects-title">Проекты {{ list.length }} шт</h1>
    <ul class="projects-list" v-if="list">
      <li class="projects-item" v-for="item in reactiveList" :key="item.link">
        <div class="projects-box">
          <NuxtLink class="projects-card" :to="item.link" :target="isExternalLink(item.link)">
            <NuxtPicture class="projects-img" :src="item.img" v-if="item.title" :alt="item.title" format="avif" loading="lazy" width="383" height="192" />
            <NuxtPicture class="projects-feedback" :src="item.feedback" v-if="item.feedbackShow" :alt="item.title" format="avif" loading="lazy" />
          </NuxtLink>
          <NuxtLink class="projects-descr" :to="item.link" v-if="item.title" :target="isExternalLink(item.link)">
            {{ item.title }}
            <span v-if="item.time">Затраченное время {{ item.time }}ч</span>
          </NuxtLink>
          <ul class="projects-list-items">
            <li class="projects-list-item"><p class="projects-subtitle" v-if="item.tags">Теги</p></li>
            <li class="projects-list-item"><span class="projects-tag" v-for="tag in item.tags">{{ tag }}</span></li>
            <li class="projects-list-item"><p class="projects-subtitle" v-if="item.technologies">Технологии</p></li>
            <li class="projects-list-item"><span class="projects-tag" v-for="technolgy in item.technologies">{{ technolgy }}</span></li>
          </ul>
          <button class="projects-button" v-if="item.feedback" @click="item.feedbackShow = !item.feedbackShow">Отзыв</button>
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

<style lang="scss">
  .projects-title {
    color: white;
  }
  .projects-list-items {
    list-style-type: none;
    padding: 0;
    margin-top: auto;
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
    display: block;
    width: 100%;
    text-decoration: none;
  }
  .projects-feedback {
    display: block;
    max-width: 100%;
    width: 100%;
    height: 100%;
    margin: 1rem 0;
    * {
      border-radius: 0.5rem;
      max-width: 100%;
    }
  }
  .projects-subtitle {
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    margin-top: 0;
    font-size: 1.5rem;
  }
  .projects-tag {
    display: inline-block;
    margin-bottom: 0.5rem;
    margin-right: 0.5rem;
    background-color: rgb(0, 67, 100);
    border: none;
    padding: 0.2rem 0.5rem;
    border-radius: 0.5rem;
    font-size: 1.2rem;
    color: var(--white);
    transition: background-color 0.15s ease;
  }
  .projects-box {
    text-decoration: none;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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
    display: block;
    position: relative;
    border-radius: 0.25rem;
    overflow: hidden;
    padding-bottom: 50%;

    &:hover {
      * {
        transform: scale(1.05);
      }
    }

    * {
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      max-width: 100%;
      aspect-ratio: 16/8;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
  }
  .projects-title {
    font-size: 2rem;
    font-weight: 700;
  }
  .projects-descr {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.25rem;
    font-weight: 700;
    text-decoration: none;
    margin-top: 1rem;
    margin-bottom: 2rem;
    span {
      padding: 0.2rem 0.5rem;
      border-radius: 0.25rem;
      display: block;
      margin-left: 1rem;
      font-size: 0.75rem;
      background-color: var(--white);
      white-space: nowrap;
      color: var(--main);
    }
  }
</style>