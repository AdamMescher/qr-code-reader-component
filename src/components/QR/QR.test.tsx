import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import QR from "./QR";

describe("QR Code Component", () => {
  it("Should render without errors", () => {
    render(<QR />);
    expect(
      screen.getByText(/improve your front-end skills by building projects/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /scan the qr code to visit frontend mentor and take your coding skills to the next level/i
      )
    ).toBeInTheDocument();
  });
});
