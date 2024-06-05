import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ClerkProvider } from "@clerk/clerk-react"

const PUBLISH_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if(!PUBLISH_KEY){
  throw new Error("Missing Publishable Key!")
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISH_KEY}>
    <App />
    </ClerkProvider>
  </React.StrictMode>,
)
