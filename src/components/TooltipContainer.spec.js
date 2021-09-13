import { render, screen } from "@testing-library/react";
import TooltipContainer from "./TooltipContainer";

describe("TooltipContainer", () => {
  const marker = {
    SHIP_ID: "12345",
    SPEED: "35",
    STATUS: "0",
    TIMESTAMP: "",
  };

  it("renders without crashing", () => {
    render(<TooltipContainer marker={marker} />);
  });

  it("renders tooltip properties", () => {
    render(<TooltipContainer marker={marker} />);
    const shipId = screen.getByText(/12345/i);
    const speed = screen.getByText(/35/i);
    const status = screen.getByText(/0/i);

    expect(shipId).toBeInTheDocument();
    expect(speed).toBeInTheDocument();
    expect(status).toBeInTheDocument();
  });
});
