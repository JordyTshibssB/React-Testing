import { render, screen } from "@testing-library/react";
import ExpandableText from "../../components/ExpandableText";
import userEvent from "@testing-library/user-event";

describe("ExpandableText", () => {
  const user = userEvent.setup();
  const limit = 255;
  const longText = "a".repeat(limit + 1);
  const shortText = "a".repeat(10);
  const truncatedText = longText.substring(0, limit) + "...";

  it("should render full text when text is less than 255", () => {
    render(<ExpandableText text={shortText} />);
    expect(screen.getByText(shortText)).toBeInTheDocument();
  });

  it("should truncate text when text is more than 255", () => {
    render(<ExpandableText text={longText} />);

    expect(screen.getByText(truncatedText)).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent(/show more/i);
  });

  it("should show all text content when user clicks on show more", async () => {
    render(<ExpandableText text={longText} />);

    await user.click(screen.getByRole("button"));

    expect(screen.getByText(longText)).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent(/show less/i);
  });

  it("should collapse and not show all text content when user clicks on show more", async () => {
    render(<ExpandableText text={longText} />);

    await user.click(screen.getByRole("button"));
    await user.click(screen.getByRole("button"));

    expect(screen.getByText(truncatedText)).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent(/show more/i);
  });
});
