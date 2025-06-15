export default defineTask({
  meta: {
    name: "generate-conversation-starter",
    description: "Generates the latest conversation starter",
  },
  async run({ payload, context }) {
    const conversationStarter = await $fetch('/api/conversation-starters/generate-and-save', {
      method: 'POST'
    })

    return {
      result: 'Success',
      conversationStarter
    }
  },
});