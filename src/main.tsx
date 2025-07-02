import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SidebarProvider } from "./components/ui/sidebar.tsx";

const queryclient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryclient}>
    <BrowserRouter>
      <SidebarProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </SidebarProvider>
    </BrowserRouter>
  </QueryClientProvider>
);
