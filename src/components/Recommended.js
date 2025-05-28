import { useState } from "react";
import ItemInfo from "./ItemInfo";

const Recommended = ({ menuItem, showItem, setShowItem }) => {
  // console.log(menuItem);

  const handleClick = () => {
    setShowItem();
  };

  return (
    <div>
      <div className="mt-8 p-4 w-[750px] bg-gray-200 items-center rounded-xl">
        <div
          className=" flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg p-2">
            {menuItem?.title} ({menuItem?.itemCards?.length})
          </span>
          <span className="p-2">{showItem ? "⬆️" : "⬇️"}</span>
        </div>
        {showItem && <ItemInfo data={menuItem?.itemCards} buttonType={"Add"} />}
      </div>
    </div>
  );
};

export default Recommended;
