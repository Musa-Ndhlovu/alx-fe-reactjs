import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { QueryClient, QueryClientProvider } from 'react-query';
import react from "react";
import { useQuery } from "react-query";
import PostsComponent from '../PostsComponent';
import formikForm from '../../form-handling-react/src/components/formikForm';

const queryClient = new QueryClient();

function App() {
  const [count, setCount] = useState(0)

  return (
    <QueryClientProvider client={queryClient}>
        <PostsComponent />
      </QueryClientProvider>
    );
  }
  
export default App;
