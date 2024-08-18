import axios from 'axios';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

export async function generateFlashcards(topic) {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        model: "text-davinci-003",
        prompt: `Generate flashcards for the topic: ${topic}.`,
        max_tokens: 100,
      },
      {
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data.choices[0].text.split("\n").filter(Boolean);
  } catch (error) {
    console.error("Error generating flashcards:", error);
    return [];
  }
}
