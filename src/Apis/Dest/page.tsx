import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI('AIzaSyCTEMg29SKSk0ENrvm-txH2fE7rQVGmrQs');

export default async function run(query:string) {
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

  const prompt = `top 50 destinations in ${query} ,give them in a proper way don't write any preinfo or postinfo directly give the names of destinations (i want to show it on my website) just give a heading  ,give it as list one below another `

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text =response.text;
  console.log(text);
  return text;
}

