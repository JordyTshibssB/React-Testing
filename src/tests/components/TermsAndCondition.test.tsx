import { render, screen } from "@testing-library/react";
import TermsAndConditions from "../../components/TermsAndConditions";
import userEvent from "@testing-library/user-event";

const user = userEvent;

describe("TermsAndCondition", () => {
  function renderComponent() {
    render(<TermsAndConditions />);

    return {
      heading: screen.getByRole("heading"),
      button: screen.getByRole("button"),
      input: screen.getByRole("checkbox"),
    };
  }
  it("should render", () => {
    const { heading, button, input } = renderComponent();

    expect(heading).toHaveTextContent(/Terms & Conditions/);

    expect(input).not.toBeChecked();

    expect(button).toHaveTextContent(/Submit/);
    expect(button).toBeDisabled();
  });

  it("should enable button when checkbox is clicked", async () => {
    const { button, input } = renderComponent();

    await user.click(input);

    expect(button).toBeEnabled();
  });
});
