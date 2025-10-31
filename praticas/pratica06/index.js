import readline from "readline-sync";
import * as controlador from "./controlador.js";

function menu() {
  console.log("\n===== MENU PRINCIPAL =====");
  console.log("1 - Adicionar tarefa");
  console.log("2 - Buscar tarefa");
  console.log("3 - Atualizar tarefa");
  console.log("4 - Remover tarefa");
  console.log("5 - Sair");
}

async function escolherOpcao(opcao) {
  switch (opcao) {
    case "1":
      const nomeAdd = readline.question("Digite o nome da tarefa: ");
      await controlador.adicionarTarefa(nomeAdd);
      console.log("✅ Tarefa adicionada com sucesso!");
      break;

    case "2":
      const nomeBusca = readline.question("Digite o nome da tarefa para buscar: ");
      const tarefa = await controlador.buscarTarefa(nomeBusca);
      if (tarefa.id) {
        console.log("\n📋 Tarefa encontrada:");
        console.log(`ID: ${tarefa.id}`);
        console.log(`Nome: ${tarefa.nome}`);
        console.log(`Concluída: ${tarefa.concluida ? "Sim" : "Não"}`);
      } else {
        console.log("❌ Tarefa não encontrada!");
      }
      break;

    case "3":
      const nomeAlt = readline.question("Digite o nome da tarefa que deseja atualizar: ");
      const concluidaAlt = readline.question("A tarefa foi concluída? (s/n): ");
      const concluida = concluidaAlt.toLowerCase() === "s";
      await controlador.atualizarTarefa(nomeAlt, concluida);
      console.log("🔄 Tarefa atualizada (se existente).");
      break;

    case "4":
      const nomeDel = readline.question("Digite o nome da tarefa que deseja remover: ");
      await controlador.removerTarefa(nomeDel);
      console.log("🗑️ Tarefa removida (se existente).");
      break;

    case "5":
      console.log("👋 Encerrando o programa...");
      process.exit(0);

    default:
      console.log("❗ Opção inválida! Tente novamente.");
      break;
  }
}

async function main() {
  while (true) {
    menu();
    const opcao = readline.question("Escolha uma opção: ");
    await escolherOpcao(opcao);
  }
}

main();
