import { desc } from 'drizzle-orm'

export default defineEventHandler(async () => {
  const ai = hubAI()
  
  // Get recent conversation starters for context
  const recent = await useDrizzle()
    .select({ text: tables.conversationStarters.text })
    .from(tables.conversationStarters)
    .orderBy(desc(tables.conversationStarters.id))
    .limit(8)
  
  const recentQuestions = recent.map(r => r.text).join('\n- ')
  
  return (await ai.run('@cf/meta/llama-3.2-3b-instruct', {
    prompt: `Generate ONLY a short conversation starter question. No explanations, no commentary, no analysis - just the question.

RECENT QUESTIONS - DO NOT REPEAT THESE TOPICS:
- ${recentQuestions}

STRICTLY AVOID:
- Any topic similar to recent questions above

Requirements: Maximum 15 words, easy to say aloud, casual group conversation.

Examples (notice the format - QUESTION ONLY):
What pizza topping would you be?
Which appliance has the most attitude?
What sound does silence make?
Which emotion would make the worst roommate?
What would your theme song genre be?

Return ONLY the question, nothing else:`,
    max_tokens: 50,
    temperature: 0.9,
    stream: false
  })).response?.trim()
})
