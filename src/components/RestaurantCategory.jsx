import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems(!showItems);
  };

  const { data } = props;
  const { title, itemCards } = data;

  return (
    <div>
      {/* Header */}
      <div className="bg-gray-50 shadow-lg p-4 w-6/12 mx-auto my-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {title} ({itemCards.length}){" "}
          </span>
          <span>⬇️</span>
        </div>

        {showItems && <ItemList items={itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
