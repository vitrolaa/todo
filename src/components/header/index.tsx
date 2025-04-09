import logoImg from "../../assets/logo (1).svg";
import { Form } from "../form";
import "./style.css";

export function Header() {
  return (
    <header>
      <img src={logoImg} alt="" />
      <Form />
    </header>
  );
}
