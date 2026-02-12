export const environment = {
  production: false,
  openaiApiKey: import.meta.env.VITE_OPENAI_API_KEY || '',
  apiUrl: import.meta.env.VITE_API_URL || '/api',
};
