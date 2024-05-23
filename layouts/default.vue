<template>
  <div class="wrapper">
    <NavMenu />
    <main class="main">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
  useHead({
    meta: [{ name: "description", content: "My amazing site." }],
    link: [{ rel: "icon", type: "image/x-icon", href: "/my-pet-projects/favicon.ico" }],
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

    --main: #0e1011;
    --main-2: #161a1d;
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
    @media (min-width: 420px) {
      display: flex;
    }
  }
  .main {
    width: 100%;
    min-height: 100vh;
    padding: var(--default-padding);
    background-color: var(--main-2);
  }
</style>
