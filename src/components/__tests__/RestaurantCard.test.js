import { render, screen } from "@testing-library/react";
import RestaurantCard, { withOpenedLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/RestaurantCardMockData.json";

it("Should render RestaurantCard component with props data", () => {
    render(<RestaurantCard resData={MOCK_DATA}/>)

    const name = screen.getByText("Third Wave Coffee");

    expect(name).toBeInTheDocument();
})

// ✅ Test for HOC: withOpenedLabel
it("Should render RestaurantCard component with Open label using HOC", () => {
  const RestaurantCardWithOpen = withOpenedLabel(RestaurantCard); // wrap the component using HOC

  render(<RestaurantCardWithOpen resData={MOCK_DATA} />); // pass props as usual

  // test the HOC's label
  const label = screen.getByText("Open");
  expect(label).toBeInTheDocument();

  // test that RestaurantCard content is also present
  const name = screen.getByText("Third Wave Coffee");
  expect(name).toBeInTheDocument();
});