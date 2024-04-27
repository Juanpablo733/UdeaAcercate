import { OpenAI } from "openai";

export async function GenerateAndSaveSentiment(comment: string): Promise<string> {
    try {
        const response = await requestChatgptSentimentAnalysis(comment)
        console.log("Response:", response)
        const responseString = response.choices[0].message.content
        console.log("Response message:", responseString)
        return responseString
    } catch (error: any) {
        console.error(error)
    }
}

const config = {
    apiKey: process.env.OPENAI_API_KEY,
}
const openai = new OpenAI(config);
const systemPrompt = "You will be provided with a tweet, and your task is to classify its sentiment " +
    "as positive, neutral, or negative, and the percentage in a decimal between 0 and" +
    " 1 of each sentiment, in a json format"

function requestChatgptSentimentAnalysis(comment: string) {
    return openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
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
    });
}

