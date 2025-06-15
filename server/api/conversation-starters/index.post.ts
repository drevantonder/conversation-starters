import { z } from 'zod'

export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, z.object({
    text: z.string()
  }).parse)

  const conversationStarter = (await useDrizzle().insert(tables.conversationStarters).values({
    text: body.text
  }).returning())[0]

  return conversationStarter
})
