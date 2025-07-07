<script setup lang="ts">
import CarbonMoon from '~icons/carbon/moon'
import CarbonSun from '~icons/carbon/sun'

const color = useColorMode()

useHead({
  meta: [{
    id: 'theme-color',
    name: 'theme-color',
    content: () => color.value === 'dark' ? '#222222' : '#ffffff',
  }],
})

function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <Button class="!outline-none" @click="toggleDark">
    <template #default>
      <template v-if="color.value === 'dark'">
        <CarbonMoon />
      </template>
      <template v-else>
        <CarbonSun />
      </template>
    </template>
  </Button>
</template>
