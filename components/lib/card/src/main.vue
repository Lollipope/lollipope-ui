<template>
  <div class="card" :style="width ? { width: width + 'px' } : ''">
    <div
      class="card-img"
      :style="imgHeight ? { height: imgHeight + 'px' } : ''"
    >
      <img :src="imgSrc" alt="img" />
    </div>
    <div v-if="summary" class="card-summary">{{ summary }}</div>
    <div v-else class="card-summary">
      <slot></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: 'LCard',
  props: {
    width: {
      type: Number,
      default: 0,
    },
    imgSrc: {
      type: String,
      default: '',
    },

    imgHeight: {
      type: Number,
      default: 0,
    },
    summary: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
