document.addEventListener("DOMContentLoaded", () => {
  const botao = document.getElementById("getDataBotao");
  const text = document.getElementById("dataDisplay");

  botao.addEventListener("click", () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        text.value = JSON.stringify(response.data, null, 2);
      })
      .catch((error) => {
        text.value = "Error ao obter os dados da API";
        console.log(error);
      });
  });
});
