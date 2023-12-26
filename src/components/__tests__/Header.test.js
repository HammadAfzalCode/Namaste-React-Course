import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should load my header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", {
    name: "login",
  }); /*it is more descriptive */

  //   const loginButton = screen.getByRole("button");

  //   const loginButton = screen.getByText("login");
  expect(loginButton).toBeInTheDocument();
});

it("Should load my header component with cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItem = screen.getByText("Cart (0 items)");
  expect(cartItem).toBeInTheDocument();
});

it("Should load my header component with cart item", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItem = screen.getByText(/Cart/);
  expect(cartItem).toBeInTheDocument();
});
it("Should change login button to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", {
    name: "login",
  });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", {
    name: "logout",
  });
  expect(logoutButton).toBeInTheDocument();
});
