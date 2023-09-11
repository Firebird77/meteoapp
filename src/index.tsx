import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import ReactDOM from 'react-dom/client';
import App from './App';


const BASE_URL = 'https://api.openweathermap.org/data'
const API_KEY = '1406c92defd0cc2d46d00a5a4aabd5f0';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: ({ queryKey }) =>
        fetch(`${BASE_URL}${queryKey}${API_KEY}`).then(
          (res) => res.json(),)
    }
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);

