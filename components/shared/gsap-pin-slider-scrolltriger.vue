<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)
gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
  data: Object,
})

const container = ref(null)

onMounted(() => {
  setupAnimation()
})

const { height } = useWindowSize()
const slides = computed(() => {
  const firstSlide = {
    id: 1,
    title: props.data?.title,
    description: '',
    image: '',
    chart: [39, 55, 65, 37],
  }
  const anotherSlide = props.data?.items.map((item: any, i: number) => {
    const chartRandom = []
    for (let i = 0; i < 4; i++) {
      const randomIntFrom30to70 = 30 + Math.floor(Math.random() * 40)
      chartRandom.push(randomIntFrom30to70)
    }
    return {
      id: i + 2,
      title: item.title,
      description: item.description,
      image: item.picture.data.attributes.url,
      chart: chartRandom,
    }
  })

  return [firstSlide, ...anotherSlide]
})

const currentTitle = ref(slides.value[0]?.title || '')
const currentImage = ref('')
const currentDescription = ref('')
const currentId = ref(slides.value[0]?.id || 0)
const currentChart = ref([
  {
    name: 'vue-apexchart',
    data: slides.value[0]?.chart || [],
  },
])

const timeLine = computed(() => slides.value.length * height.value)

const setupAnimation = () => {
  if (!props.data?.items) return

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container.value,
      start: 'top top',
      end: `+=${timeLine.value}`,
      scrub: true,
      pin: true,
      pinSpacing: true,
      onUpdate: (self) => {
        const progress = Math.min(self.progress, 0.9999)
        const index = Math.min(
          Math.floor(progress * slides.value.length),
          slides.value.length - 1,
        )
        currentTitle.value = slides.value[index]?.title || ''
        currentImage.value = slides.value[index]?.image || ''
        currentDescription.value = slides.value[index]?.description || ''
        currentId.value = slides.value[index]?.id || 0
        currentChart.value[0].data = slides.value[index]?.chart || []
      },
      snap: {
        snapTo: 1 / (slides.value.length - 1),
        duration: 0.5,
        delay: 0.1,
        ease: 'power1.inOut',
        inertia: false,
      },
    },
  })

  slides.value.forEach((item, index) => {
    tl.to({}, { duration: 1 })
  })
}

const goToItem = (id: number) => {
  const index = slides.value.findIndex((item) => item.id === id)
  if (index !== -1) {
    currentTitle.value = slides.value[index]?.title || ''
    currentImage.value = slides.value[index]?.image || ''
    currentDescription.value = slides.value[index]?.description || ''
    currentId.value = slides.value[index]?.id || 0
  }
}
</script>

<template>
  <div ref="container" class="relative z-[10001] h-screen w-full bg-matteblack">
    <ClientOnly>
      <div
        class="absolute flex w-full flex-col items-center justify-center sm:top-[35%] lg:top-0 xl:top-0 2xl:top-[-124px]"
      >
        <ChartYellowLine :chartSeries="currentChart" />
      </div>
    </ClientOnly>
    <div
      class="absolute right-0 top-0 flex h-full w-[5rem] flex-col justify-center gap-4 py-10 max-lg:hidden"
    >
      <button
        v-for="slide in slides"
        :key="slide.id"
        @click="goToItem(slide.id)"
        class="text-white transition-all"
        :class="currentId === slide.id ? 'opacity-100' : ' opacity-50'"
      >
        0{{ slide.id }}
      </button>
    </div>
    <div
      class="relative z-20 flex h-full w-full flex-col items-center justify-center p-4 text-white lg:p-10"
    >
      <div
        class="flex w-full flex-col items-center text-center md:max-w-5xl 2xl:max-w-6xl"
      >
        <transition name="fade" mode="out-in">
          <h2 :key="currentTitle" class="akrobat-uppercase-heading text-center">
            {{ currentTitle }}
          </h2>
        </transition>
        <div
          class="relative mb-2 mt-3 w-full max-w-2xl transition-all duration-1000 lg:-mt-3"
          :class="
            currentImage
              ? 'h-[calc(100vh-70vh)] lg:h-[calc(100vh-40vh)]'
              : 'h-[0vh]'
          "
        >
          <transition name="expand" mode="in-out">
            <NuxtImg
              v-if="currentImage"
              :src="currentImage"
              :key="currentImage"
              provider="strapi"
              class="absolute inset-0 left-0 top-0 h-full w-full object-cover object-top"
            />
          </transition>
        </div>
        <transition name="fade-scale-up" mode="out-in">
          <div
            :key="currentDescription"
            class="medium-opacity70-caption min-h-[60px] max-w-xl text-white"
          >
            {{ currentDescription }}
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<style>
.expand-enter-active,
.expand-leave-active {
  transition: height 1s cubic-bezier(0.32, 0.72, 0, 1);
}
.expand-enter-from,
.expand-leave-to {
  height: 0;
}
.expand-enter-to,
.expand-leave-from {
  height: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.9);
}

.fade-scale-up-enter-active,
.fade-scale-up-leave-active {
  transition: all 0.5s ease;
}

.fade-scale-up-enter-from,
.fade-scale-up-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(0.9);
}
</style>
