import { rest } from "msw";
import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";

export const testData = [
  {
    MMSI: "249598000",
    STATUS: "0",
    SPEED: "146",
    LON: "-6.730358",
    LAT: "36.625410",
    COURSE: "151",
    HEADING: "150",
    TIMESTAMP: "2021-08-30T20:45:00",
    SHIP_ID: "289191",
  },
];

export const handlers = [
  rest.get("https://services.marinetraffic.com/api/*", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(testData));
  }),
];

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

export function renderWithClient(ui) {
  const testQueryClient = createTestQueryClient();
  const { rerender, ...result } = render(
    <QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>,
  );
  return {
    ...result,
    rerender: (rerenderUi) =>
      rerender(
        <QueryClientProvider client={testQueryClient}>
          {rerenderUi}
        </QueryClientProvider>,
      ),
  };
}

export function createWrapper() {
  const testQueryClient = createTestQueryClient();
  return ({ children }) => (
    <QueryClientProvider client={testQueryClient}>
      {children}
    </QueryClientProvider>
  );
}
