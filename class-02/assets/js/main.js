function main() {
  const form = document.querySelector("#imc-form");
  const resultados = document.querySelector("#resultados");

  const calcularIMC = (peso, altura) => {
    const imc = peso / altura ** 2;

    let label = "";
    if (imc < 18.5) {
      label = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
      label = "Peso normal";
    } else if (imc >= 25 && imc < 30) {
      label = "Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
      label = "Obesidade grau 1";
    } else if (imc >= 35 && imc < 40) {
      label = "Obesidade grau 2";
    } else {
      label = "Obesidade grau 3";
    }

    return [imc, label];
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const peso = Number(document.querySelector("#peso").value);
    const altura = Number(document.querySelector("#altura").value);
    resultados.classList.remove("error");

    if (!peso) {
      resultados.innerHTML = "<p>Insira um peso válido!</p>";
      resultados.classList.add("error");
      return;
    }

    if (!altura) {
      resultados.innerHTML = "<p>Insira uma altura válida!</p>";
      resultados.classList.add("error");
      return;
    }

    const [imc, label] = calcularIMC(peso, altura);

    resultados.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (${label})</p>`;
  };

  form.addEventListener("submit", onSubmit);
}

main();
