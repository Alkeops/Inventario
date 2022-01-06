import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

describe("Test <Button />", () => {
  const label = "Click";
  const onClick = jest.fn();

  test("Should show the label", () => {
    render(<Button label={label} onClick={onClick} />);
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  test("Should respond to the click", () => {
    render(<Button label={label} onClick={onClick} />);
    userEvent.click(screen.getByText(label));
    expect(onClick).toHaveBeenCalled();
  });
  test("Should show the children", () => {
    const children = "children";
    render(
      <Button label={label} onClick={onClick}>
        {children}
      </Button>
    );
    expect(screen.getByText(children)).toBeInTheDocument();
  });
});
