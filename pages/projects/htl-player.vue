<template>
  <div class="player-page">
    <div class="player" @mousemove="showControls">
      <div class="player__wrapper" ref="player">
        <video class="player__video" ref="video" playsinline></video>
        <div class="player__controls" :class="{ player__controls_show: controls }">
          <div class="player__buttons">
            <button
              class="player__button player__play-pause"
              :class="{ 'player__play-pause_active': play }"
              @click="playPause"
            >
            </button>
            <button class="player__button player__fullscreen" @click="fullScreen">fullscreen</button>
          </div>
          <div class="player__timeline">
            <div class="player__time"><span>7:00</span> / <span>10:00</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from "vue";
  import Hls from "hls.js";

  const video = ref(null);
  const videoSrc = ref(
    "https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_ts/master.m3u8"
  );
  const play = ref(false);
  const player = ref(null);
  const timeout = ref(6000);
  const controls = ref(false);

  const playPause = () => {
    if (video.value.paused || video.value.ended) {
      play.value = true;
      video.value.play();
    } else {
      video.value.pause();
      play.value = false;
    }
  };

  const fullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      player.value.requestFullscreen();
    }
  };

  const showControls = () => {
    controls.value = true;
    if (timeout.value) clearTimeout(timeout.value);
    timeout.value = setTimeout(() => {
      controls.value = false;
    }, timeout.value);
  };

  onMounted(() => {
    let hls = new Hls();
    hls.loadSource(videoSrc.value);
    hls.attachMedia(video.value);
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
      video.value.pause();
      initVideoQualityOptions(hls);
    });
  });
</script>

<style lang="scss" scoped>
  .player-page {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .player {
    border-radius: var(--small-radius);
    background-color: var(--el-background);
    padding: var(--default-padding);
    max-width: 80rem;
    width: 100%;
  }
  .player__wrapper {
    position: relative;
    overflow: hidden;
  }
  .player__video {
    display: block;
    max-width: 100%;
    width: 100%;
  }
  .player__controls {
    padding: var(--default-padding);
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    //opacity: 0;
    //transform: translate3d(0, 100%, 0);
    transition: transform 0.3s ease, opacity 0.3s ease;
  }
  //.player__controls_show {
  //  opacity: 1;
  //  transform: translate3d(0, 0, 0);
  //}
  .player__buttons {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .player__button {
    cursor: pointer;
    border: none;
    padding: 0;
    margin: 0;
    position: relative;
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    background-color: var(--white);
    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
  .player__play-pause {
  }
  .player__play-pause_active {
  }
</style>
