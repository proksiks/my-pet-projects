<template>
  <div class="map">
    <div class="map__body">
      <div
        class="map__content"
        @wheel="handleScroll"
        @mousedown="handleMouseDown"
        @mousemove="handleMouseMove"
        @mouseup="handleMouseUp"
        @mouseleave="handleMouseUp"
        ref="parentEl"
      >
        <!-- Допилить, добавить возможность 
            ограничения области передвигаемого элемента
            зум двумя тапами + тачпад
            можно перенести в канвас
            цифровой паспорт
            добавить всплытие эвенты
          -->
        
        <div
          class="map__wrap"
          ref="zoomElement"
          :style="{
            transform: `translate(${pointX}px, ${pointY}px) scale(${scale})`,
            cursor: isGrabbing ? 'grabbing' : 'grab',
          }"
        >
          <img src="/images/zoom/map.svg" alt="svg Карта" width="400" height="400" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  useHead({
    bodyAttrs: {
      class: "clear-inner",
    },
  });

  const scale = ref(1);
  const pointX = ref(0);
  const pointY = ref(0);
  const isGrabbing = ref(false);
  const start = ref({ x: 0, y: 0 });
  const zoomElement = ref(null);
  const parentEl = ref(null);
  const visibleClientWidth = ref(0);
  const visibleClientHeight = ref(0);

  const handleMouseDown = (e) => {
    e.preventDefault();

    start.value = {
      x: e.clientX - pointX.value,
      y: e.clientY - pointY.value,
    };

    isGrabbing.value = true;
  };

  const handleMouseUp = () => {
    isGrabbing.value = false;
  };

  const handleMouseMove = (e) => {
    if (!isGrabbing.value) return;
    e.preventDefault();

    let paddingLeft = 116;
    let widthEl = zoomElement.value.offsetWidth;
    let heightEl = zoomElement.value.offseHeight;

    let differendWidth = visibleClientWidth.value - widthEl - paddingLeft;
    let differendHeight = visibleClientHeight.value - heightEl;

    pointX.value = e.clientX - start.value.x;
    let isPositiveX = pointX.value > 0;

    if (isPositiveX) {
      if (pointX.value > 0) {
        pointX.value = 0;
      }
    } else {
      if (differendWidth > pointX.value) {
        pointX.value = differendWidth;
      }
    }

    pointY.value = e.clientY - start.value.y;
    let isPositiveY = pointY.value > 0;

    if (isPositiveY) {
      if (pointY.value > 0) {
        pointY.value = 0;
      }
    } else {
      if (differendHeight > pointY.value) {
        pointY.value = differendHeight;
      }
    }
  };

  onMounted(() => {
    setTimeout(() => {
      visibleClientWidth.value = document.querySelector(".content").offsetWidth;
      visibleClientHeight.value = document.querySelector(".content").offsetHeight;
    }, 1);
  });
</script>

<style lang="scss">
  .map {
    overflow: hidden;
    height: 100vh; 
    
    // .map__title
    &__title {
      margin-bottom: 24px;
      padding-left: 112px;
    }

    // .map__body

    &__body {
      position: relative;
    }

    // .map__content

    &__content {
      overflow: hidden;
      padding-left: 112px;
    }

    // .map__holder

    &__holder {
      position: absolute;
      inset: 0;
      z-index: 1;
      background-color: var(--white);
      opacity: 0.6;
    }

    // .map__buttons

    &__buttons {
      margin-top: 24px;
      margin-bottom: 54px;
      padding-left: 112px;
    }
  }
</style>
