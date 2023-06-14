<template>
  <div class="player-page">
    <div class="player" @mousemove="showControls">
      <div class="player__wrapper" ref="player">
        <video class="player__video" ref="video" playsinline></video>
        <div class="player__controls" :class="{ player__controls_show: controls }">
          <div class="player__buttons">
            <button class="player__button" :class="{ player__button_active: play }" @click="togglePlayPause">
              <IconPlay class="player__svg" />
              <IconPause class="player__svg" />
            </button>
            <button class="player__button" :class="{ player__button_active: fullscreen }" @click="toggleFullScreen">
              <IconFullScreen class="player__svg" />
              <IconFullScreenExit class="player__svg" />
            </button>
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

  import IconPlay from "~/assets/icons/player/play.svg?component";
  import IconPause from "~/assets/icons/player/pause.svg?component";
  import IconFullScreen from "~/assets/icons/player/fullscreen.svg?component";
  import IconFullScreenExit from "~/assets/icons/player/fullscreenexit.svg?component";

  import Hls from "hls.js";

  const video = ref(null);
  const videoSrc = ref("https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_ts/master.m3u8");
  const play = ref(false);
  const fullscreen = ref(false);
  const player = ref(null);
  const timeout = ref(6000);
  const controls = ref(false);

  const togglePlayPause = () => {
    if (video.value.paused || video.value.ended) {
      play.value = true;
      video.value.play();
    } else {
      video.value.pause();
      play.value = false;
    }
  };

  const toggleFullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      fullscreen.value = false;
    } else {
      player.value.requestFullscreen();
      fullscreen.value = true;
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
    overflow: hidden;
    cursor: pointer;
    border: none;
    padding: 0;
    margin: 0;
    position: relative;
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    background-color: var(--white);
    transition: transform 0.15s ease, box-shadow 0.15s ease;
    &:hover {
      transform: scale(1.1);
      box-shadow: 0px 0px 0 3px rgba(255, 255, 255, 0.3);
    }
    &:active {
      transform: scale(1);
      box-shadow: 0px 0px 0 5px rgba(255, 255, 255, 0.3);
    }
    &_active {
      .player__svg {
        &:first-child {
          opacity: 0;
          transform: translate3d(200%, -50%, 0);
        }
        &:last-child {
          opacity: 1;
          transform: translate3d(-50%, -50%, 0);
        }
      }
    }
  }
  .player__svg {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1.3rem;
    height: 1.3rem;
    transition: transform 0.3s ease, opacity 0.4s ease;
    &:first-child {
      transform: translate3d(-50%, -50%, 0);
      opacity: 1;
    }
    &:last-child {
      opacity: 0;
      transform: translate3d(-150%, -50%, 0);
    }
  }
</style>
