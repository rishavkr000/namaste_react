import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "./../RestaurantMenu";
import { BrowserRouter } from "react-router";
import MOCK_DATA_NAME from "../mocks/RestaurantMenuMockData.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from './../Header';
import Cart from "./../Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_NAME),
  })
);

it("Should load res menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart/>
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Steam Momo (14)");
  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(14);

  const addButton = screen.getAllByRole("button", { name: "ADD" });
  fireEvent.click(addButton[0]);
  expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();

  fireEvent.click(addButton[2])
  expect(screen.getByText("Cart (2 items)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(16);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }))

  expect(screen.getAllByTestId("foodItems").length).toBe(14);

  expect(screen.getByText("Your cart is empty. Add something from the menu")).toBeInTheDocument();
});
