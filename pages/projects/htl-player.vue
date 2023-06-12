<template>
  <div class="player-page">
    <div class="player">
      <video class="player__video" ref="video" width="500" height="300" autoplay muted></video>
    </div>
    <button @click="playPause()">play/Pause</button>
  </div>
</template>

<script setup>
  import { ref, onMounted } from "vue";
  import Hls from "hls.js";

  const video = ref(null);
  const videoSrc = ref(
    "https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_ts/master.m3u8"
  );

  const playPause = () => {
    if (video.value.paused || video.value.ended) {
      video.value.play();
    } else video.value.pause();
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

<style lang="scss" scoped></style>
