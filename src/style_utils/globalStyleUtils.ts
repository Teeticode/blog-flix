import { color } from "framer-motion";

const theme = localStorage.getItem("theme") ?? "light";
export const themeTextStyles = {
  color: `${theme === "dark" ? "text-[white]" : "text-[black]"}`,
};
