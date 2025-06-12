import { desc } from 'drizzle-orm'

export default defineEventHandler(async (event) => {
  return (await useDrizzle().select().from(tables.conversationStarters).orderBy(desc(tables.conversationStarters.id)).limit(1))[0]
})
