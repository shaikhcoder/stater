import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter as Router, } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from "@/components/ui/theme-provider"

createRoot(document.getElementById('root')).render(
  
    
    <Router>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
          >
      <App />
       </ThemeProvider>
    </Router>
   

);
