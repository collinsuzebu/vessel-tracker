import { renderWithClient } from "../test-utils";
import Main from "./Main";

describe("Main", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  it("renders without crashing", async () => {
    renderWithClient(<Main />);
  });

  it("creates openlayer map", async () => {
    const main = renderWithClient(<Main />);

    const openlayerMap = main.container.querySelector(".leaflet-layer");

    expect(openlayerMap).toBeDefined();
    expect(openlayerMap).toBeInTheDocument();
  });
});
