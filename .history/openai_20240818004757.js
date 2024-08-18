import { OpenAIApi } from "openai";

const openai = new OpenAIApi({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateFlashcards(topic) {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Generate flashcards for the topic: ${topic}.`,
    max_tokens: 100,
  });

  return response.data.choices[0].text.split("\n").filter(Boolean);
}
