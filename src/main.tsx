import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Theme } from "@radix-ui/themes";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@radix-ui/themes/styles.css";
import { Toaster } from "sonner";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <NextUIProvider>
        <Theme accentColor="purple">
          <QueryClientProvider client={queryClient}>
            <Toaster richColors />
            <App />
          </QueryClientProvider>
        </Theme>
      </NextUIProvider>
    </BrowserRouter>
  </StrictMode>
);
