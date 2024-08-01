import "./style.css";

import { handleClickButtons, showNumberOfAttempts } from "./ui";

document.addEventListener("DOMContentLoaded", () => {
  showNumberOfAttempts();
});

handleClickButtons();
