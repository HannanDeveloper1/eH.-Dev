// Imports
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import './styles/index.css'
import App from './App.tsx'

// A function that renders the main App components in html `main` tag
createRoot(document.querySelector("main")!).render(
  <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </StrictMode>,
)
