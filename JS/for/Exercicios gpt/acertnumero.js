const numeroSecreto = 3;

for (let tentativas = 1; tentativas <= 3; tentativas++) {
  const chute = Number(prompt(`Tentativa ${tentativas}: Adivinhe um número de 1 a 5`));

  if (chute === numeroSecreto) {
    alert("🎉 Parabéns! Você acertou!");
    break; // Para o jogo se acertar
  } else {
    alert("❌ Errado! Tente novamente.");
  }

  if (tentativas === 3) {
    alert("😢 Suas tentativas acabaram! O número era " + numeroSecreto);
  }
}