import { JSX } from "solid-js";
import { buttonStyle } from "./button.css";

type ButtonProps = {
  styleType: "primary" | "secondary" | "tertiary";
  type: "button" | "submit";
  children: JSX.Element | string;
};

export default function Button(props: ButtonProps) {
  return (
    <button
      type={props.type}
      class={buttonStyle({ size: "small", type: "primary" })}
    >
      {props.children}
    </button>
  );
}
