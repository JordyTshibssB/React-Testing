import { render, screen } from "@testing-library/react";
import UserAccount from "../../components/UserAccount";
import { User } from "../../entities";

describe("group", () => {
  it(" should render user name", () => {
    const user: User = { id: 1, name: "John", isAdmin: false };
    render(<UserAccount user={user} />);
    expect(screen.getByText("John")).toHaveTextContent(user.name);
  });

  it("should render edit button if user is admin", () => {
    const user: User = { id: 1, name: "John", isAdmin: true };
    render(<UserAccount user={user} />);
    const editButton = screen.getByRole("button");
    expect(editButton).toBeInTheDocument();
    expect(editButton).toHaveTextContent(/Edit/);
  });

  it("should not render edit button if user is admin", () => {
    const user: User = { id: 1, name: "John", isAdmin: false };
    render(<UserAccount user={user} />);
    const editButton = screen.queryByRole("button");
    expect(editButton).not.toBeInTheDocument();
  });
});
