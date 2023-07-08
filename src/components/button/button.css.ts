import { cva } from "@styled/css";
import { token } from "@styled/tokens";

export const buttonStyle = cva({
  base: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  variants: {
    size: {
      small: {
        minHeight: token("sizes.24px"),
      },
    },
    type: {
      primary: {
        backgroundColor: token("colors.primary"),
      },
      secondary: {
        background: "white",
      },
      accent: {
        background: "yellow-500",
      },
      danger: {
        background: "red-500",
      },
    },
  },
});
