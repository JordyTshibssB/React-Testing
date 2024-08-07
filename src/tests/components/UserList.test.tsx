import { render, screen } from "@testing-library/react";
import UserList from "../../components/UserList";
import { User } from "../../entities";

describe("UserList", () => {
  it("should render not user when the users array is empty", () => {
    render(<UserList users={[]} />);
    expect(screen.getByText(/No users/)).toBeInTheDocument();
  });

  it("should render  users when the users array is not empty", () => {
    const users: User[] = [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
      { id: 3, name: "Bob" },
    ];
    render(<UserList users={users} />);

    users.forEach((user) => {
      const link = screen.getByRole("link", { name: user.name });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", `/users/${user.id}`);
    });
  });
});
