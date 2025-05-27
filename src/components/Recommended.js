const Recommended = ({ menuItem }) => {
  const FOOD_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";
  // console.log(menuItem);
  return (
    <div className="mt-8 space-y-4 w-[750px]">
      <h3 className="font-bold">
        {menuItem?.title} ({menuItem?.itemCards?.length})
      </h3>

      <div>
        {menuItem.itemCards.map((item, index) => (
          <div
            className="py-4 flex justify-between items-start gap-4 border-b border-gray-200"
            key={item?.card?.info?.id || index}
          >
            {/* Text section */}
            <div className="flex-1">
              <p className="font-bold">
                {item?.card?.info?.itemAttribute?.vegClassifier === "VEG"
                  ? "🟢"
                  : "🔴"}{" "}
                {item?.card?.info?.name}
              </p>
              <span>
                ₹
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </span>

              {item?.card?.info?.ratings?.aggregatedRating?.rating && (
                <p className="text-orange-500 mt-1">
                  ⭐ {item.card.info.ratings.aggregatedRating.rating} (
                  {item.card.info.ratings.aggregatedRating.ratingCountV2})
                </p>
              )}

              <p className="mt-3 text-sm text-gray-700">
                {item?.card?.info?.description}
              </p>
            </div>

            {/* Image section */}
            <div className="w-32 flex-shrink-0 text-center">
              <img
                src={FOOD_URL + item.card.info.imageId}
                alt={item.card.info.name}
                className="w-full object-cover rounded-2xl mx-auto border border-transparent bg-orange-200"
              />
              <button className="-mt-4 px-4 py-1 text-green-600 font-bold border border-gray-200 rounded shadow-sm hover:shadow-md text-green-500">
                ADD
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommended;
