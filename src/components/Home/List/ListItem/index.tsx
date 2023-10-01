const ListItem = ({ item }: any) => {
  return (
    <div
      className="relative md:w-56 wrapper mb-8 bg-white p-4 shadow-md cursor-pointer"
      key={item.id}
    >
      <div>
        <img
          src={item.imageURL}
          className="rounded-sm w-48 md:w-56 h-48 mt-5"
          alt=""
        />
        <h1 className="font-semibold text-xl absolute left-3 top-2">
          {item.name}
        </h1>
        <div className="flex items-center justify-between mt-3">
          <h1 className="mr-2 font-bold text-lg">Rs. {item.price}</h1>
          <div className="text-white bg-black px-2 py-1 rounded-sm text-sm font-semibold">Add to Cart</div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
