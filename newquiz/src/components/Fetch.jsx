export default async function fetchQuestions(url, onFetch) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      onFetch(data);
    } catch (error) {
      console.error(error.message);
    }
  }
  