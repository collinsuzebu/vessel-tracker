import { render } from "@testing-library/react";
import Panel from "./Panel";

describe("Panel", () => {
  const props = { setFilters: jest.fn() };

  it("renders without crashing", () => {
    render(<Panel {...props} />);
  });
});
