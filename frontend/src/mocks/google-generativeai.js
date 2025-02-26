
export class GoogleGenerativeAI {
  constructor(publicKey) {
    this.publicKey = publicKey;
  }
  getGenerativeModel({ model, safetySettings }) {
    // Return a dummy model object with a startChat method
    return {
      startChat: (config) => ({
        // This is a mock for sendMessageStream
        sendMessageStream: async function* (messages) {
          // Yield a dummy chunk. In production, this should be replaced with actual streaming data.
          yield {
            text: () => "This is a mock response from the generative AI model.",
          };
        },
      }),
    };
  }
}

export const HarmBlockThreshold = {
  BLOCK_LOW_AND_ABOVE: "block_low_and_above",
};

export const HarmCategory = {
  HARM_CATEGORY_HARASSMENT: "harassment",
  HARM_CATEGORY_HATE_SPEECH: "hate_speech",
};
