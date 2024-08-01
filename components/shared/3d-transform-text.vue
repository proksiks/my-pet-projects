<template>
    <div class="xl:pt-26 pt-25 xl:px-10 px-2.5 md:pb-25">
      <div
        id="about"
        class="font-benzin grid sm:grid-cols-8 grid-cols-2 text-nowrap 2xl:leading-[7.3125rem] leading-none tracking-tighter 2xl:text-[8.125rem] xl:text-xl md:text-[3.25rem] text-[2.1875rem] uppercase"
      >
        <div class="heading whitespace-nowrap sm:col-start-3 col-end-9">
          <span char> харизмы </span>
          <span charClone> харизмы </span>
        </div>
        <!--<div class="whitespace-nowrap sm:col-start-4 col-end-9 sm:ml-0 ml-8 text-orange" char>
          в том <br />
          что делаем
        </div>-->
      </div>
      <div class="font-benzin grid sm:grid-cols-8 grid-cols-2">
        <div class="font-medium sm:col-start-4 col-end-9 xl:pt-24 pt-20 sm:ml-0">
          <div class="promo-text md:min-h-[10.75rem] min-h-[2.75rem]">
            <span class="2xl:text-xl md:text-[1.5rem] text-sm md:leading-tight leading-none">
              Мы верим, что истинная сила кроется в том, как мы делаем свою работу — с любовью, страстью и харизмой.
              <br />
            </span>
          </div>
          <div class="promo-text md:min-h-[8.125rem] 2xl:min-h-[20.75rem] min-h-[5.25rem]">
            <span class="promo-text 2xl:text-xl md:text-[1.5rem] text-sm md:leading-tight leading-none">
              <br />
              Мы делаем все возможное, чтобы наша работа оставляла яркие следы в сердцах клиентов. Каждый проект — это
              возможность дать нечто большее, чем они ожидают.
            </span>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script setup>
    import SplitType from "split-type";
  
    const { $gsap: gsap } = useNuxtApp();
  
    onMounted(() => {
      const tl = gsap.timeline();
  
      new SplitType("[char]", {
        types: "chars",
        tagName: "span",
      });
      new SplitType("[charClone]", {
        types: "chars",
        tagName: "span",
      });
  
      new SplitType(".promo-text", {
        types: "words",
        tagName: "span",
      });
  
      tl.to("[char] .char", {
        yPercent: -100,
        opacity: 0,
        rotationX: 90,
        transformOrigin: "50% 50% -50",
        duration: 2,
        ease: "sine.out",
        stagger: 0.2,
      });
      tl.to(
        "[charClone] .char",
        {
          yPercent: -100,
          opacity: 1,
          rotationX: 0,
          transformOrigin: "50% 50% -50",
          duration: 2,
          ease: "sine.out",
          stagger: 0.2,
        },
        0
      );
  
      tl.from(".promo-text .word", {
        y: 50,
        opacity: 0,
        duration: 2,
        ease: "sine.out",
        stagger: 0.075,
        scrollTrigger: {
          trigger: ".promo-text",
          scrub: true,
        },
      });
    });
  </script>
  
  <style>
    .heading > * {
      perspective: 56.25rem;
      line-height: 0.5;
      display: block;
    }
    .heading [charClone] span {
      opacity: 0;
      transform: rotateX(-90deg);
    }
  </style>