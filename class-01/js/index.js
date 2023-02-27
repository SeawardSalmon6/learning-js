function meuEscopo() {
  const form = document.querySelector("#form");
  const resultado = document.querySelector("#resultado");
  const pessoas = [];

  const recebeEventoForm = (e) => {
    e.preventDefault();

    const nome = document.querySelector("#nome").value || "";
    const sobrenome = document.querySelector("#sobrenome").value || "";
    const peso = document.querySelector("#peso").value || "";
    const altura = document.querySelector("#altura").value || "";
    const pessoa = {
      nome,
      sobrenome,
      peso,
      altura,
    };

    pessoas.push(pessoa);
    resultado.innerHTML += `<p>${nome}; ${sobrenome}; ${peso}; ${altura}</p>`;
  };

  form.addEventListener("submit", recebeEventoForm);
}

meuEscopo();
