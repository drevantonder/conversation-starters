<script lang="ts" setup>
const { data: conversationStarter } = await useFetch('/api/conversation-starters/latest')
</script>

<template>
  <div class="flex flex-col items-center justify-center px-8">
    <p class="text-3xl md:text-4xl font-medium text-balance max-w-[40ch] leading-tight">{{ conversationStarter.text }}</p>
  </div>
</template>
