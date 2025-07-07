<script setup lang='ts'>
const { count, inc, dec } = useCount()
</script>

<template>
  <div class="my-3 inline-flex">
    <Button @click="dec()">
      <div i-carbon-subtract />
    </Button>
    <div class="font-mono m-auto w-15 inline-block">
      {{ count }}
    </div>
    <Button @click="inc()">
      <div i-carbon-add />
    </Button>
  </div>
</template>
