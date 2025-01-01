import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-4 text-left flex justify-between"
        >
          <div className="flex flex-col w-8/12">
            <span className="pb-2">{item.card.info.name}</span>
            <span className="pb-2">
              ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </span>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={CDN_URL + item.card.info.imageId}
              alt="item"
              className="w-[156px] h-[144px] rounded-lg"
            />
            <button className="px-8 m-24 font-bold rounded-md bg-white text-black absolute border shadow-md">
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
