export default defineTask({
  meta: {
    name: "generate-conversation-starter",
    description: "Generates the latest conversation starter",
  },
  async run({ payload, context }) {
    const conversationStarter = await $fetch('/api/conversation-starters/generate')
    
    await $fetch('/api/conversation-starters', {
      method: 'POST',
      body: {
        text: conversationStarter
      }
    })

    return {
      result: 'Success'
    }
  },
});