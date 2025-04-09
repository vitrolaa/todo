import { PlusCircle } from "@phosphor-icons/react";
import "./style.css";

export function Form() {
  return (
    <form action="">
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button type="submit">
        Criar
        <PlusCircle size={20} />
      </button>
    </form>
  );
}
