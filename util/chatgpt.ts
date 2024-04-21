import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { saveCommentSentiment } from "@/graphql/server/utils/commentUtil";
// Le decimos a Vercel dónde queremos ejecutar este endpoint 
export const runtime = 'edge'

// -> edge tiene mejor rendimiento y soporta streaming de datos, no puede durar tanto la request usando la CPU (ms)

// -> default tiene peor rendimiento, no soporta el streaming de datos
// pero tiene mayor compatibilidad con paquetes de Node, la request puede durar más tiempo usando la CPU (seg)     

// Crear el cliente de OpenAI
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(config);
const systemPrompt = "You will be provided with a tweet, and your task is to classify its sentiment " +
  "as positive, neutral, or negative, and the percentage in a decimal between 0 and" +
  " 1 of each sentiment, in a json format"


export async function GenerateAndSaveSentiment(comment: string) {

  // const { messages } = await request.json();
  // const userMessage = messages[messages.length - 1]
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: [
      {
        "role": "system",
        "content": systemPrompt
      },
      {
        "role": "user",
        "content": comment
      }
    ],
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 1,
    presence_penalty: 1,
  })
  console.log(response.body)
  // return response.body 
  const stream = OpenAIStream(response, {
    onCompletion: async (completion: string) => {
      // This callback is called when the stream completes
      // You can use this to save the final completion to your database
      await saveCommentSentiment(completion);
    },
  });

  stream.getReader().read()
}
