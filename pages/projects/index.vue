<template>
  <div>
    <h1>Проекты</h1>
    <ul>
      <li>
        <NuxtLink to="/projects/hls-player/">HLS-Player (Плеер для проигрывания потокового видео)</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/projects/zoom/">Zoom (Alpha) (Масштабирование и перемещение элемента альфа версия)</NuxtLink>
      </li>
      <li>
        <a href="https://proksiks.github.io/nero/" target="_blank">Демо экран для производителя жидкостей 20т.р</a>
      </li>
      <li>
        <a href="https://proksiks.github.io/movies/" target="_blank">Список фильмов с формой (работа с api)</a>
      </li>
      <li>
        <a href="https://proksiks.github.io/modal/" target="_blank">Модальное окно</a>
      </li>
      <li>
        <a href="https://proksiks.github.io/panagency/index.html" target="_blank">Лендинг для строительной компании</a>
      </li>
      <li>
        <a href="https://proksiks.github.io/idaproject/" target="_blank">Тестовое задание</a>
      </li>
      <li>
        <a href="https://kdi-samara.ru/" target="_blank">Вёрстка для стаматологической клинники</a>
      </li>
      <li>
        <a href="https://cosmettrade.ru/" target="_blank">Вёрстка для продажи косметики</a>
      </li>
      <li>
        <a href="https://www.haulmont.ru/" target="_blank">Разработка корпоративного сайта</a>
      </li>
      <li>
        <a href="https://proksiks.github.io/portfolio/app/index.html" target="_blank">Вёрстка бесплатного макета из интернета</a>
      </li>
      <li>
        <a href="https://codesandbox.io/p/sandbox/todolist-forked-5xgcwt?file=%2Fsrc%2Fmain.js" target="_blank">Тудушка на vue2 codesandbox</a>
      </li>
      <!--<li>
        <NuxtLink to="/projects/todo/">Todo</NuxtLink>
      </li>-->
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
