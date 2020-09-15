const resultSection = document.querySelector(".result-section");

const url =
  "https://t9jt3myad3.execute-api.eu-west-2.amazonaws.com/api/breakingbad";

async function callApi() {
  try {
    const response = await fetch(url);
    const json = await response.json();
    createResult(json.data);
  } catch (error) {
    console.log(error);
  }
}

callApi();

function createResult(result) {
  resultSection.innerHTML = ``;

  for (let i = 0; i < result.length; i++) {
    if (i >= 7) {
      break;
    }

    resultSection.innerHTML += `
      <div class="sections">
        <span>ID: ${result[i].id}</span>
        <span>Name: ${result[i].name}</span>
        <span>Birthday: ${result[i].birthday}</span>
        <span>Nickname: ${result[i].nickname}</span>
      </div>`;
  }
}
