import type { NextApiRequest, NextApiResponse } from 'next';

// Mock AI generation function - replace with actual AI integration
const generateFlashcardsFromAI = async () => {
  // Simulating an AI service response with example data
  // In a real-world scenario, you might call an external API or service here
  return [
    { id: '11', question: "What is the atomic number of Helium?", answer: "2" },
    { id: '12', question: "What is the chemical symbol for Silver?", answer: "Ag" },
    { id: '13', question: "Who is the author of '1984'?", answer: "George Orwell" },
    { id: '14', question: "What is the capital of Japan?", answer: "Tokyo" },
    { id: '15', question: "What planet is known as the Morning Star?", answer: "Venus" },
    { id: '16', question: "What is the largest ocean on Earth?", answer: "Pacific Ocean" },
    { id: '17', question: "Which element is represented by the symbol 'O'?", answer: "Oxygen" },
    { id: '18', question: "Who painted the Mona Lisa?", answer: "Leonardo da Vinci" },
    { id: '19', question: "What is the smallest prime number?", answer: "2" },
    { id: '20', question: "What gas makes up most of the Earth's atmosphere?", answer: "Nitrogen" }
  ];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // Call the AI generation function (or external service)
      const newFlashcards = await generateFlashcardsFromAI();
      res.status(200).json(newFlashcards);
    } catch (error) {
      console.error('Error generating flashcards:', error);
      res.status(500).json({ message: 'Error generating flashcards' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: 'Method not allowed' });
  }
}
