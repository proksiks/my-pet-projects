<template>
  <div class="_layout">
    <NavigationMenu />
    <div class="wrapper">
      <div class="inner">
        <slot />
      </div>
      <FooterAboutInfo />
    </div>
  </div>
</template>

<style lang="scss">
@import "~/assets/styles/scss/components/default-layout";
</style>
