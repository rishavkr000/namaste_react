const Recommended = ({ menuItem }) => {
    console.log(menuItem);
    console.log(menuItem?.carousel);
  return (
    <div className="menu-item-box">
      <h3>{menuItem?.title} ({menuItem?.carousel?.length})</h3>
      <div>
        {menuItem.carousel.map((item) => (
            <div className="menu-item" key={item?.card?.info?.id}>
            <p>
              {item?.dish?.info?.name} - ₹{item?.dish?.info?.price / 100 || item?.dish?.info?.defaultPrice / 100}
            </p>
            {/* <p>
              ⭐ {item?.dish?.info?.ratings?.aggregatedRating?.rating} (
              {item?.dish?.info?.ratings?.aggregatedRating?.ratingCountV2})
            </p> */}
            <p className="description">{item?.dish?.info?.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommended;
