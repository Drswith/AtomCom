<script setup lang="ts">
definePageMeta({
  layout: 'home',
})

const online = useOnline()
</script>

<template>
  <div>
    <Logos mb-6 />
    <ClientOnly>
      <Suspense>
        <PageView v-if="online" />
        <div v-else class="text-gray-80">
          You're offline
        </div>
        <template #fallback>
          <div class="opacity-50 italic">
            <span class="animate-pulse">Loading...</span>
          </div>
        </template>
      </Suspense>
      <template #fallback>
        <div class="opacity-50">
          <span class="animate-pulse">Loading...</span>
        </div>
      </template>
    </ClientOnly>
    <InputEntry />
  </div>
</template>
