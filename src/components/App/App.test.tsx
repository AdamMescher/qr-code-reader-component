import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  it("Should render without errors", () => {
    render(<App />);
    expect(
      screen.getByText(/improve your front-end skills by building projects/i)
    ).toBeInTheDocument();
  });
});
