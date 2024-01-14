import logo from './logo.svg';
import './App.css';
import TableBox from './components/TableBox';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TableBox />
    </QueryClientProvider>
    
  );
}

export default App;
