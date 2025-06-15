export default defineEventHandler(async () => {
  const generatedText = await $fetch('/api/conversation-starters/generate')

  if (!generatedText) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to generate conversation starter'
    })
  }

  const conversationStarter = (await useDrizzle().insert(tables.conversationStarters).values({
    text: generatedText
  }).returning())[0]

  return conversationStarter
})