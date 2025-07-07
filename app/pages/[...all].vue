<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <main class="teal-700 dark:gray-200 p-x4 p-y10 text-center">
    <div class="text-4xl">
      <div i-carbon-warning inline-block />
    </div>
    <div>Not found</div>
    <div>
      <button class="t-8 text-sm btn m-3" @click="router.back()">
        Back
      </button>
    </div>
  </main>
</template>
