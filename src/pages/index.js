import { QueryClient, QueryClientProvider } from "react-query";
import Main from "../components/Main";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      // staleTime: 20000,
    },
  },
});

const Index = () => (
  <>
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  </>
);

export default Index;
