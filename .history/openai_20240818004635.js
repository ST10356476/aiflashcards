import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});


// Function to generate flashcards using OpenAI
export async function generateFlashcards(topic) {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Generate flashcards for the topic: ${topic}.`,
      max_tokens: 100,
      temperature: 0.7, // Optional: Adjusts creativity/randomness
    });

    // Split the generated text into an array of flashcards
    return response.data.choices[0].text.split("\n").filter(Boolean);
  } catch (error) {
    console.error("Error generating flashcards:", error);
    return [];
  }
}
