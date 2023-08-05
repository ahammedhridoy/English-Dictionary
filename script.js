const input = document.getElementById("input");
const infoText = document.getElementById("info-text");
const meaningContainer = document.getElementById("meaning-container");
const title = document.getElementById("title");
const meaning = document.getElementById("meaning");
const audio = document.getElementById("audio");

const fetchAPI = async (word) => {
  try {
    infoText.style.display = "block";
    meaningContainer.style.display = "none";
    infoText.innerText = `Searching the meaning of ${word}`;
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const result = await fetch(url).then((res) => res.json());

    infoText.style.display = "none";
    meaningContainer.style.display = "block";

    title.innerText = result[0].word;
    meaning.innerText = result[0].meanings[0].definitions[0].definition;
    audio.src = result[0].phonetics[0].audio;
  } catch (error) {
    console.log(error);
  }
};

input.addEventListener("keyup", (e) => {
  if (e.target.value && e.key === "Enter") {
    fetchAPI(e.target.value);
  }
});
