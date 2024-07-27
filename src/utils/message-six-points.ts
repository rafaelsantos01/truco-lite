export default async function speak(team: string) {
  window.speechSynthesis.cancel();

  const text = `${team} vamos começar a jogar?`;

  const utterance = new SpeechSynthesisUtterance(text);

  utterance.lang = "Google português do Brasil pt-BR";

  return window.speechSynthesis.speak(utterance);
}
