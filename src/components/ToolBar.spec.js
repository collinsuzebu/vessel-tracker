import { render, screen, fireEvent } from "@testing-library/react";
import ToolBar from "./ToolBar";

describe("ToolBar", () => {
  const props = { setAntOptions: jest.fn(), setToggleIcon: jest.fn() };

  it("renders without crashing", () => {
    render(<ToolBar {...props} />);
  });

  it("renders all tools", () => {
    render(<ToolBar {...props} />);

    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(4);
  });

  it("triggers `setToggleIcon` on tool click", () => {
    render(<ToolBar {...props} />);

    const toggleMarkerButton = screen.getByRole("button", {
      name: /Toggle marker icon/i,
    });

    fireEvent.click(toggleMarkerButton);
    expect(props.setToggleIcon).toBeCalled();
  });

  it("triggers `setAntOptions` on tool click", () => {
    render(<ToolBar {...props} />);

    const ReverseAntButton = screen.getByRole("button", {
      name: /Reverse matching ants/i,
    });

    fireEvent.click(ReverseAntButton);
    expect(props.setAntOptions).toBeCalled();
  });
});
