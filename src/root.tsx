// @refresh reload
import "./index.css";
import RootInner from "./root-inner";
import { ThemeContext } from "./context/Theme";

export default function Root() {
  return (
    <ThemeContext.Provider value={{ mode: "light", theme: "" }}>
      <RootInner />
    </ThemeContext.Provider>
  );
}
