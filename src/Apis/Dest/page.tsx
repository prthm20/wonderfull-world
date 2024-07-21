import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI('AIzaSyCTEMg29SKSk0ENrvm-txH2fE7rQVGmrQs');

export default async function run(query:string) {
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    generationConfig: { responseMimeType: "application/json" }
  });

  let prompt = `
  Give list of 25 top tourist destinations in ${query}:

  {
    "places": [25 top destinations]
  } 
`;
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text =response.text();
  const data = JSON.parse(text);
  
  console.log(data);
  return data;
}

