export default function useConfig() {
  const apiBaseUrl: string = 'http://localhost:8080';
  const config: string = apiBaseUrl;
  return {
    apiBaseUrl,
    config,
  };
}
