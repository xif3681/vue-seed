<template>
  <div class="loading">
    <img src="@/assets/loading.svg">
  </div>
</template>

<script>
export default {
  name: 'Loading'
}
</script>

<style lang="scss" scoped>
.loading {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999999;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
