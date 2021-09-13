import { render, screen } from "@testing-library/react";
import Message from "./Message";

describe("Message", () => {
  const props = { message: "new message", isError: true };

  it("renders without crashing", () => {
    render(<Message />);

    let message = screen.getByText(/view vessels daily historical position/i);
    expect(message).toBeInTheDocument();
  });

  it("renders with props", () => {
    render(<Message {...props} />);

    let message = screen.getByText(props.message);
    expect(message).toBeInTheDocument();
  });
});
