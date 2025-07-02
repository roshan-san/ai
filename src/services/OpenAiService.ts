import openaiobj from "../config/openAiConfig";

export class OpenAIService {
  static async generateText(prompt: string): Promise<string> {
    try {
      const response = await openaiobj.responses.create({
        model: "o3-mini",
        input:prompt
      });
      return response.output_text || 'No response generated';
    } catch (error) {
      console.error('Error generating text from OpenAI:', error);
      throw new Error('Failed to generate text');
    }
  }
  static async sayhello():Promise<string>{
      try {
      const response = await openaiobj.responses.create({
        model:"gpt-3.5-turbo",
        input:"say hello andwelcom them in a indianway "
      })
      return response.output_text
  } catch (error) {
      throw new Error("error on greeting user ")
  }
}
}
