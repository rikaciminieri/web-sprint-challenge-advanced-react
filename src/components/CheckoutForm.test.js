import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
  const header = document.querySelector("h2");
  expect(header).toBeInTheDocument;
});

test("form shows success message on submit with form details", async () => {
  render(<CheckoutForm />);
  const submitButton = screen.getByRole("button");
  await fireEvent.click(submitButton);
  const successMessage = screen.getByTestId("successMessage");
  expect(successMessage).toBeVisible;
});
