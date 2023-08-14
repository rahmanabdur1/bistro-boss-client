import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';
import AuthProvider from './context/AuthProvider';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


// Create a client
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
        <div className='max-w-screen-lg  mx-auto'>
          <RouterProvider router={router} />
          </div>
        </QueryClientProvider>
      </AuthProvider>  
  </React.StrictMode>,
)
