// openai.js
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function generateFlashcards(topic) {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Generate flashcards for the topic: ${topic}.`,
    max_tokens: 100,
  });

  return response.data.choices[0].text.split("\n").filter(Boolean);
}
