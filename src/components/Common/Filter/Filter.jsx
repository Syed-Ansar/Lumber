import { XMarkIcon } from "@heroicons/react/24/solid";
import FilterPanel from "../../Home/FilterPanel";

const Filter = ({
  filterItems,
  filterGenderItems,
  filterPriceRange,
  filterType,
  handleChangeItemsChecked,
  handleChangeItemsGenderChecked,
  handleChangePriceChecked,
  handleChangeTypeChecked,
  isOpen,
  setIsOpen,
}) => {

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`sm:flex sticky`}>
      <div className="home_panel-wrap p-4 pr-5 md:p-2 md:pl-4 md:w-[280px] md:block">
        <div className="text-md sm:text-md md:text-xl font-bold uppercase mb-2 ml-3">
          <h1>Filters</h1>
          <div className="sm:hidden absolute right-4 top-4">
            <XMarkIcon
              className="w-6 h-6 cursor-pointer text-black"
              onClick={toggleDrawer}
            />
          </div>
        </div>
        <FilterPanel
          topLabel="Color"
          filterItems={filterItems}
          changeChecked={handleChangeItemsChecked}
        />
        <FilterPanel
          topLabel="Gender"
          filterItems={filterGenderItems}
          changeChecked={handleChangeItemsGenderChecked}
        />
        <FilterPanel
          topLabel="Price"
          filterItems={filterPriceRange}
          changeChecked={handleChangePriceChecked}
        />
        <FilterPanel
          topLabel="Type"
          filterItems={filterType}
          changeChecked={handleChangeTypeChecked}
        />
      </div>
    </div>
  );
};

export default Filter;
