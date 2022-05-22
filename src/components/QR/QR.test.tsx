import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import QR from "./QR";

describe("QR Code Component", () => {
  it("Should render without errors", () => {
    render(<QR />);
  });
});
