import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const conversationStarters = sqliteTable('conversation_starters', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  text: text('text').notNull()
})
