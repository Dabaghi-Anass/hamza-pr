import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "./api/queryClient.ts"
import './index.css'
import store from './redux/store.ts'
import {Provider} from "react-redux"
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
)
