<template>
  <div class="loaderK">
    <span class="loaderK__element"></span>
    <span class="loaderK__element"></span>
    <span class="loaderK__element"></span>
  </div>
</template>

<script>
export default {};
</script>

<style>
:root {
  --main-color: #ecf0f1;
  --point-color: #555;
  --size: 5px;
}

.loaderK {
  background-color: var(--main-color);
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  z-index: 100000;
}

.loaderK__element {
  border-radius: 100%;
  border: var(--size) solid var(--point-color);
  margin: calc(var(--size) * 2);
}

.loaderK__element:nth-child(1) {
  animation: preloader 0.8s ease-in-out alternate 0.4s infinite;
}
.loaderK__element:nth-child(2) {
  animation: preloader 0.8s ease-in-out alternate 0.8s infinite;
}

.loaderK__element:nth-child(3) {
  animation: preloader 0.8s ease-in-out alternate 1.2s infinite;
}

@keyframes preloader {
  100% {
    transform: scale(1.75);
  }
}
</style>
