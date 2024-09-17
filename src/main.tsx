import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Theme } from "@radix-ui/themes";
import { NextUIProvider } from "@nextui-org/react";

import "@radix-ui/themes/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <NextUIProvider>
        <Theme accentColor="purple">
          <App />
        </Theme>
      </NextUIProvider>
    </BrowserRouter>
  </StrictMode>
);
