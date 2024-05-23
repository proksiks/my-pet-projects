<template>
  <div>
    <div class="projects-head">
      <h1 class="projects-title">Проекты {{ filteredWorks.length }} шт</h1>
      <button class="projects-filter" @click="toggleMenu">Фильтр</button>
    </div>
    <TransitionGroup
      class="projects-list"
      tag="ul"
      :css="false"
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @leave="onLeave"
      v-if="list"
    >
      <li class="projects-item" v-for="(item, index) in filteredWorks" :key="item.link" :data-index="index">
        <div class="projects-box">
          <NuxtLink class="projects-card" :to="item.link" :target="isExternalLink(item.link)">
            <NuxtPicture
              class="projects-img"
              :src="item.img"
              v-if="item.title"
              :alt="item.title"
              format="avif"
              loading="lazy"
              width="383"
              height="192"
            />
            <Transition mode="out-in">
              <img
                class="projects-feedback"
                :src="item.feedback"
                v-show="item.feedbackShow"
                :alt="item.title"
                loading="lazy"
              />
            </Transition>
          </NuxtLink>
          <NuxtLink class="projects-descr" :to="item.link" v-if="item.title" :target="isExternalLink(item.link)">
            {{ item.title }}
            <span v-if="false">Затраченное время {{ item.time }}ч</span>
          </NuxtLink>
          <ul class="projects-list-items">
            <li class="projects-list-item"><p class="projects-subtitle" v-if="item.tags">Теги</p></li>
            <li class="projects-list-item">
              <span class="projects-tag" v-for="tag in item.tags" :key="tag.title">{{ tag }}</span>
            </li>
            <li class="projects-list-item"><p class="projects-subtitle" v-if="item.technologies">Технологии</p></li>
            <li class="projects-list-item">
              <span class="projects-tag" v-for="technolgy in item.technologies">{{ technolgy }}</span>
            </li>
          </ul>
          <button class="projects-button" v-if="item.feedback" @click="item.feedbackShow = !item.feedbackShow">
            Отзыв
          </button>
        </div>
      </li>
    </TransitionGroup>

    <div class="projects-menu" :class="{ 'projects-menu-open': isOpenMenu }">
      <div>
        <small><small>Меню в разработке</small></small>
      </div>
      <div class="projects-menu-title">Технологии</div>
      <ul class="projects-menu-list">
        <li class="projects-menu-item" v-for="tech in uniqueData.technologies">
          <label class="projects-menu-label">
            <input class="projects-menu-checkbox" v-model="filter" :value="tech" type="checkbox" placeholder="text" />
            <span class="projects-menu-text">{{ tech }}</span>
          </label>
        </li>
      </ul>
      <div class="projects-menu-title">Теги</div>
      <ul class="projects-menu-list">
        <li class="projects-menu-item" v-for="tag in uniqueData.tags">
          <label class="projects-menu-label">
            <input class="projects-menu-checkbox" v-model="filter" :value="tag" type="checkbox" placeholder="text" />
            <span class="projects-menu-text">{{ tag }}</span>
          </label>
        </li>
      </ul>
      <div class="projects-menu-footer">
        <button class="projects-menu-reset" @click="clearFilter">Очистить</button>
      </div>
      <button class="projects-menu-burger" @click="isOpenMenu = false" aria-label="Открыть меню с фильтрами">
        <span></span>
        <span></span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import gsap from "gsap";
  import { shuffle as _shuffle } from 'lodash-es'
  import { list } from "~/content/Projects.json";

  const isOpenMenu = ref(false);
  const reactiveList = reactive(list);
  const filter = ref([]);

  const isExternalLink = (Link: string) => {
    return Link.includes("http") ? "_blank" : "";
  };

  const uniqueData = computed(() => {
    let tags: any = [];
    let technologies: any = [];

    list.forEach((item) => {
      item.tags.forEach((element) => {
        tags.push(element);
      });
      item.technologies.forEach((element) => {
        technologies.push(element);
      });
    });

    const result = {
      tags: Array.from(new Set(tags)),
      technologies: Array.from(new Set(technologies)),
    };

    return result;
  });

  const filteredWorks = computed(() => {
    let filtered = reactiveList.filter((item) => {
      let valid = false;
      if (filter.value.length > 0) {
        for (let n = 0; n < item.tags.length; n++) {
          if (filter.value.includes(item.tags[n])) {
            valid = true;
            break;
          }
        }
        for (let n = 0; n < item.technologies.length; n++) {
          if (filter.value.includes(item.technologies[n])) {
            valid = true;
            break;
          }
        }
        if (!valid) return false;
      }
      return true;
    });
    return filtered;
  });

  const toggleMenu = () => {
    isOpenMenu.value = !isOpenMenu.value;
  };

  const clearFilter = () => {
    filter.value = []
  }

  function onEnter(el: gsap.TweenTarget, done: any) {
    gsap.to(el, {
      scale: 1,
      opacity: 1,
      onComplete: done,
    });
  }

  function onLeave(el: gsap.TweenTarget, done: any) {
    gsap.to(el, {
      scale: 0,
      opacity: 0,
      onComplete: done,
    });
  }
</script>

<style lang="scss">
  .v-enter-active,
  .v-leave-active {
    transition: transform 0.5s ease, opacity 0.3s ease;
    position: absolute;
  }

  .v-enter-from {
    opacity: 0;
    transform: translateY(100%);
  }
  .v-leave-to {
    opacity: 1;
    transform: translateY(100%);
  }

  .slide-up-enter-active,
  .slide-up-leave-active {
    transition: all 0.25s ease-out;
  }

  .slide-up-enter-from {
    opacity: 0;
    transform: translateY(30px);
  }

  .slide-up-leave-to {
    opacity: 0;
    transform: translateY(-30px);
  }
  .projects-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .projects-menu-reset,
  .projects-filter {
    cursor: pointer;
    color: var(--white);
    background-color: var(--main-3);
    border: none;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    &:hover {
      background-color: var(--second);
    }
    &:active {
      background-color: var(--main-3);
    }
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
    position: relative;
    display: block;
    width: 100%;
    text-decoration: none;
    overflow: hidden;
    border-radius: 0.25rem;
    &:hover {
      .projects-img {
        * {
          transform: scale(1.05);
        }
      }
    }
  }
  .projects-feedback {
    position: absolute;
    bottom: 0;
    display: block;
    max-width: 100%;
    width: 100%;
    border-radius: 0.25rem;
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
    color: var(--white);
  }
  .projects-descr {
    font-size: 1.25rem;
    font-weight: 700;
    text-decoration: none;
    margin-top: 1rem;
    margin-bottom: 2rem;
    transition: color 0.3s ease, text-shadow 0.15s ease;

    &:hover {
      color: var(--cyanide);
      text-shadow: 0 0 0.1875rem #fff, 0 0 0.25rem rgb(0, 195, 255), 0 0 0.75rem rgb(0, 195, 255);
    }

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

  .projects-menu {
    display: flex;
    flex-direction: column;
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 99;
    padding: 3rem 1rem 1rem 1rem;
    overflow: auto;
    background-color: var(--main);
    transform: translateX(100%);
    transition: transform 0.3s ease;
    &-open {
      transform: translateX(0);
    }
  }
  .projects-menu-title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  .projects-menu-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-bottom: 1rem;
  }
  .projects-menu-label {
    cursor: pointer;
    &:hover {
      color: var(--cyanide);
    }
  }
  .projects-menu-checkbox {
    margin-right: 0.5rem;
    position: absolute;
    opacity: 0;
    width: 0.1rem;
    height: 0.1rem;
    pointer-events: none;
    left: -1000rem;
    &:checked {
      ~ .projects-menu-text {
        color: var(--cyanide);
        text-shadow: 0 0 0.1875rem #fff, 0 0 0.25rem rgb(0, 195, 255), 0 0 0.75rem rgb(0, 195, 255);
      }
    }
  }
  .projects-menu-text {
    transition: color 0.3s ease, text-shadow 0.3s ease;
  }
  .projects-menu-footer {
    margin-top: auto;
    display: flex;
    justify-content: flex-end;
  }

  .projects-menu-burger {
    cursor: pointer;
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 2rem;
    height: 2rem;
    background-color: white;
    padding: 0;
    margin: 0;
    border: none;
    background-color: transparent;
    transition: transform 0.3s ease;
    &:hover {
      transform: rotate(90deg);
      span {
        background-color: var(--cyanide);
      }
    }
    &:active {
      transform: scale(0.9) rotate(90deg);
      span {
        background-color: var(--cyanide);
      }
    }
    span {
      position: absolute;
      display: block;
      width: 100%;
      top: 50%;
      left: 50%;
      height: 0.25rem;
      background-color: var(--white);
      border-radius: 1rem;
      transition: background-color 0.3s ease;
      &:first-child {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
      &:last-child {
        transform: translate(-50%, -50%) rotate(45deg);
      }
    }
  }
</style>
