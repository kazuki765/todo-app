import { createContext } from "solid-js";

export const ColorMode = {
  Dark: "dark",
  Light: "light",
} as const;
export type ColorMode = (typeof ColorMode)[keyof typeof ColorMode];

export const ThemeContext = createContext({
  mode: ColorMode.Light,
  theme: "",
});
