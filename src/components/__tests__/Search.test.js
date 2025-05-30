import { fireEvent, render, screen, act } from "@testing-library/react";
import Body from "../Body";
import { BrowserRouter } from "react-router";
import MOCK_DATA from "../mocks/RestaurantCardMockData.json";

// When we test the Body component, this is rendering the Body component, but it's not rendering it on the browser, it rendering it on jsdom, that is browser like, it does not have all the powers of browser and fetch is given by browser to javascript. fetch function is not a part of javascript, it is given by browser. And when we render the Body component, it render on browser like thing jsdom, not on browser, and jsdom or jest does not understand what is fetch. So what we do, we will write the mock function for fetch

// We replace the fetch function by creating my own dummy fetch function.
// By jest.fn(), we get the fetch function. This will give me a mock fetch function.
// This function basically takes a callback function. Now inside that function I mock exactly like fetch function work.
// Actually fetch function are returns promise, so in this mock function I return Promise, to make this mock function to exactly similar to my original fetch function, by using Promise.resolve. This fetch function resolves the json, similar to original fetch function.
// And what happens this json is again a function that returns a Promise.resolve and this Promise.resolve actually has data.

// global is the global object where the component is rendered.

  global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve(MOCK_DATA);
      },
    });
  });


test("Should Search Res List with Berger input", async () => {

  // When testing, code that causes React state updates should be wrapped into act(...), act return promise, so we use async-await.

  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

//   const cardsBeforeSearch = screen.getAllByTestId("resCard");
//   expect(cardsBeforeSearch).toBeInTheDocument(4);

  const searchBtn = screen.getByRole("button", { name: "Search" });
  expect(searchBtn).toBeInTheDocument();

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "Burger" } }); // The object is simulating what is inside the onChange function value "e".
  fireEvent.click(searchBtn);

//   const cardsAfterSearch = screen.getAllByTestId("resCard");
//   expect(cardsAfterSearch.length).toBe(1);
});


// it("Should filter top rated restaurant", async () => {
//   await act(async() => render(
//     <BrowserRouter>
//       <Body/>
//     </BrowserRouter>
// ))

//     const cardBeforeFilter = screen.getAllByTestId("resCard")
//     expect(cardBeforeFilter).toBe(8);

//     const topRatedRestaurantButton = screen.getByRole("button", {name: "Top Rated Restaurants"});
//     fireEvent.click(topRatedRestaurantButton);

//     const cardAfterFilter = screen.getAllByTestId("resCard");
//     expect(cardAfterFilter).toBe(2)
// })