import { useDispatch } from "react-redux";
import { addItems, removeItems } from "../utils/cartSlice";

const ItemInfo = ({ data, buttonType }) => {
  const FOOD_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";

  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItems(item));
  };

  const handleRemoveItem = (index) => {
    dispatch(removeItems(index))
  }

  return (
    <div>
      {data?.map((item, index) => (
        <div
          key={item?.card?.info?.id}
          className="border-b border-gray-400 p-2"
        >
          <div className="flex justify-between gap-4 mb-6">
            {/* Text Content */}
            <div className="flex-1">
              <h3 className="font-bold">{item?.card?.info?.name}</h3>
              <p>
                ₹
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </p>

              {item?.card?.info?.ratings?.aggregatedRating?.rating && (
                <p className="text-orange-500">
                  ⭐ {item.card.info.ratings.aggregatedRating.rating} (
                  {item.card.info.ratings.aggregatedRating.ratingCountV2})
                </p>
              )}

              <p className="text-sm text-gray-700 mt-2">
                {item?.card?.info?.description}
              </p>
            </div>

            {/* Image */}
            <div className="w-28 flex-shrink-0 text-center">
              <img
                src={FOOD_URL + item?.card?.info?.imageId}
                alt={item?.card?.info?.name}
                className="w-28 h-28 object-cover rounded-lg mx-auto"
              />
              {buttonType === "Add" ? (
                <button
                  className="mt-2 px-4 py-1 text-green-600 font-bold border border-gray-400 rounded shadow-sm hover:shadow-md"
                  onClick={() => handleAddItem(item)}
                >
                  ADD
                </button>
              ) : (
                <button
                  className="mt-2 px-4 py-1 text-green-600 font-bold border border-gray-400 rounded shadow-sm hover:shadow-md"
                  onClick={() => handleRemoveItem(index)}
                >
                  Remove
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemInfo;
