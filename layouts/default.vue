<template>
  <div class="wrapper">
    <ui-navigation-menu />
    <main class="main">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
  useHead({
    meta: [{ name: "description", content: "My amazing site." }],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/my-pet-projects/favicon.ico" },
      { rel: "stylesheet", href: "https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" },
    ],
  });
  useSeoMeta({
    title: "My Amazing Site",
    ogTitle: "My Amazing Site",
    description: "This is my amazing site, let me tell you all about it.",
    ogDescription: "This is my amazing site, let me tell you all about it.",
    ogImage: "https://example.com/image.png",
    twitterCard: "summary_large_image",
  });
</script>

<style lang="scss">
  :root {
    --white: white;
    --global: #ffffff;
    --global-invert: #050c13;

    --main: rgb(14, 16, 17);
    --main-2: rgb(22, 26, 29);
    --main-3: #52616d;

    --second: #678299;

    --default-padding: 1rem;
    --default-radius: 1rem;
    --small-radius: 0.5rem;

    --cyanide: #77f8da;
    --cyanide-dark: #77f8da;
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    --main-color: 22, 26, 29;
    --dark: rgb(var(--main-color));
    --dark-75: rgba(var(--main-color), 0.75);
    --dark-20: rgba(var(--main-color), 0.2);
    --dark-0: rgba(var(--main-color), 0);
    --light: #00ffff;
    --white: white;
    --gray-light: #ebebeb;
    --gray-second: #b6b6b6;
    --shadow-horizontal: linear-gradient(180deg, var(--dark), var(--dark-0));
    --shadow-vertical: linear-gradient(90deg, var(--dark), var(--dark-0));
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    font-family: var(--notosans);
    margin: 0;
    padding: 0;
    color: var(--global);
  }

  a {
    color: var(--global);
  }
  a:hover {
    text-decoration: none;
  }

  .page-enter-active,
  .page-leave-active {
    transition: all 0.3s;
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    filter: blur(1rem);
  }

  .wrapper {
    overflow: hidden;
    @media (min-width: 420px) {
      display: flex;
    }
    &:has(.sidebar.active) .main {
      padding-left: 166px;
    }
  }
  .main {
    width: 100%;
    min-height: 100vh;
    padding-top: var(--default-padding);
    padding-bottom: var(--default-padding);
    padding-right: var(--default-padding);
    padding-left: 88px;
    background-color: var(--main-2);
    transition: padding 0.6s ease;
  }
</style>
