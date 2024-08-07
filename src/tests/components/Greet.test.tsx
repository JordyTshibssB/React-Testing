import { render, screen } from "@testing-library/react";
import Greet from "../../components/Greet";

describe("Greet", () => {
  it("should render Hello with name provided", () => {
    render(<Greet name="John" />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/Hello /);
  });
});
