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
  @import "~/assets/css/index.css";
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
