<template>
  <div>
    <h1>Проекты</h1>
    <ul>
      <li>
        <NuxtLink to="/projects/hls-player/">HLS-Player</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/projects/todo/">Todo</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  ul {
    li {
      + li {
        margin-top: 1rem;
      }
    }
  }
</style>
