export default defineEventHandler(async (event) => {
  const ai = hubAI()
  return (await ai.run('@cf/meta/llama-3.2-3b-instruct', {
    prompt: `A concise (1-2 short sentences) fun conversation starter question.
## Examples
Prompt: The question:
Response: What pizza topping would you be?

Prompt: The question:
Response: If spiders carried little guitars and strummed them, would they be less scary?

Prompt: The question:
Response: Can you visualize an apple clearly in your head?

The question:`,
    max_tokens: 50,
    stream: false
  })).response?.trim()
})
