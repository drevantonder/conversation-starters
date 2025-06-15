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
    prompt: `Generate a creative conversation starter question that sparks interesting discussion.

FOR CONTEXT (recent questions generated - aim for natural variety):
- ${recentQuestions}

REQUIREMENTS:
- Create something that feels fresh but not forced to be different
- Keep it engaging and accessible to everyone
- 1-2 sentences maximum
- No prefixes like "The question:", "Here's a conversation starter:", or similar
- Make it thought-provoking but light and fun

GOOD EXAMPLES:
What pizza topping would you be and why?
If spiders carried little guitars and strummed them, would they be less scary?
Which household appliance do you think has the most attitude?
What would your signature dance move be called?
If colors had personalities, which one would be your best friend?

Generate one unique conversation starter:`,
    max_tokens: 50,
    stream: false
  })).response?.trim()
})
