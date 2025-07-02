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
}
