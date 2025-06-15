<script lang="ts" setup>
const { data: conversationStarter, refresh } = await useFetch('/api/conversation-starters/latest')
const isGenerating = ref(false)

const generateNew = async () => {
  isGenerating.value = true
  try {
    await $fetch('/api/conversation-starters/generate-and-save', {
      method: 'POST'
    })
    await refresh()
  } finally {
    isGenerating.value = false
  }
}
</script>

<template>
  <div class="flex flex-col items-center justify-center px-8 gap-12">
    <p class="text-3xl md:text-4xl font-medium text-balance max-w-[40ch] leading-tight">{{ conversationStarter.text }}</p>
    
    <button 
      @click="generateNew"
      :disabled="isGenerating"
      class="px-6 py-3 bg-violet-600 hover:bg-violet-700 disabled:bg-violet-400 text-white rounded-lg font-medium transition-colors"
    >
      {{ isGenerating ? 'Generating...' : 'Generate' }}
    </button>
  </div>
</template>
