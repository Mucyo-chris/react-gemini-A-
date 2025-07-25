import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyCF8ZELqo1L9I9UEMgin0juRZoCrvkBo_M");

async function main() {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const result = await model.generateContent("Explain how AI works in a few words");

  const response = await result.response;
  const text = response.text();

  console.log(text);
}

main();
