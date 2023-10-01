import "./style.scss";
import List from "../../components/Home/List";
import SearchBar from "../../components/Home/SearchBar";
import { dataList } from "../../constants";
import {
  filterItemsData,
  filterPriceRangeData,
  filterTypeData,
  filterItemsGenderData,
} from "../../constants";
import { useEffect, useState } from "react";
import { FunnelIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import SearchIcon from "@material-ui/icons/Search";
import Filter from "../../components/Common/Filter/Filter";

const Home = () => {
  const [list, setList] = useState(dataList);
  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const [filterItems, setFilterItems] = useState(filterItemsData);
  const [filterGenderItems, setFilterGenderItems] = useState(
    filterItemsGenderData
  );
  const [filterPriceRange, setFilterPriceRange] =
    useState(filterPriceRangeData);
  const [filterType, setFilterType] = useState(filterTypeData);

  const handleChangeItemsChecked = (id: number) => {
    const filterListState = filterItems;
    const changeCheckedCuisines = filterListState.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setFilterItems(changeCheckedCuisines);
  };
  const handleChangeItemsGenderChecked = (id: number) => {
    const filterListState = filterGenderItems;
    const changeCheckedCuisines = filterListState.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setFilterGenderItems(changeCheckedCuisines);
  };
  const handleChangePriceChecked = (id: number) => {
    const filterListState = filterPriceRange;
    const changeCheckedCuisines = filterListState.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setFilterPriceRange(changeCheckedCuisines);
  };
  const handleChangeTypeChecked = (id: number) => {
    const filterListState = filterType;
    const changeCheckedCuisines = filterListState.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setFilterType(changeCheckedCuisines);
  };

  const applyFilters = () => {
    let updatedList = dataList;

    let CheckedFilters = filterItems
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    let CheckedFiltersType = filterType
      .filter((item) => item.checked)
      .map((item) => item.label);

    let CheckedFiltersGender = filterGenderItems
      .filter((item) => item.checked)
      .map((item) => item.label);

    let CheckedFiltersPrice = filterPriceRange
      .filter((item) => item.checked)
      .map((item) => item.label);

    if (CheckedFilters.length) {
      updatedList = updatedList.filter((item) => {
        return CheckedFilters.includes(item.color.toLowerCase());
      });
    }
    if (CheckedFiltersType.length) {
      updatedList = updatedList.filter((item) => {
        return CheckedFiltersType.includes(item.type);
      });
    }
    if (CheckedFiltersGender.length) {
      updatedList = updatedList.filter((item) => {
        return CheckedFiltersGender.includes(item.gender);
      });
    }
    if (CheckedFiltersPrice.length) {
      // Price Filter
      const minPrice = CheckedFiltersPrice[0];

      updatedList = updatedList.filter((item) =>
        minPrice === 0
          ? item.price <= 250
          : item.price >= 251 && item.price < 450
      );

      updatedList = updatedList.filter((item) =>
        minPrice >= 450 ? item.price === 450 : item.price <= 450
      );
    }

    // Search Filter
    if (searchInput) {
      const searchTerms = searchInput.toLowerCase().split(" ");
      updatedList = updatedList.filter((item) => {
        return searchTerms.every((term) => {
          return (
            item.name.toLowerCase().includes(term) ||
            item.color.toLowerCase().includes(term) ||
            item.type.toLowerCase().includes(term)
          );
        });
      });
    }

    setList(updatedList);

    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };

  const changePassword = async () => {
    console.log("first");
  };

  const handleInputChange = async (event: any) => {
    if (event.key === "Enter") {
      await changePassword();
    }
  };

  useEffect(() => {
    applyFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    filterItems,
    filterPriceRange,
    filterType,
    filterGenderItems,
    searchInput,
  ]);

  return (
    <div className="home">
      <div className="flex justify-between items-center">
        <div className="bg-gray-900 w-fit pl-10 sm:pl-4 pr-2 sm:pr-4 mt-5 mb-4 sm:ml-12 sm:bg-gray-500 ">
          <h4 className="text-white sm:text-xl sm:font-bold sm:text-black">
            Lumber Store
          </h4>
        </div>
        <div className="flex items-center">
          <a
            href="/"
            className="text-black mr-5 font-semibold underline underline-offset-4 hidden sm:block"
          >
            Products
          </a>
          <div className="bg-gray-500 mr-6 p-1 rounded-sm">
            <ShoppingCartIcon className="w-6 h-6 cursor-pointer text-black" />
          </div>
        </div>{" "}
      </div>
      {/* Search Bar */}
      <div className="w-full flex justify-center items-center mt-5">
        <div className="mb-5 flex justify-center text-center items-center">
          <SearchBar
            styles="border-gray-400"
            value={searchInput}
            changeInput={(e: any) => setSearchInput(e.target.value)}
            handleInputChange={handleInputChange}
          />
          <div className="bg-black w-8 h-8 flex justify-center items-center rounded-md ml-4 md:ml-10">
            <SearchIcon className="text-white w-16 h-16 cursor-pointer" />
          </div>
          <div className="bg-black w-8 h-8 flex justify-center items-center rounded-md ml-3 sm:hidden">
            <FunnelIcon className="w-5 h-5 cursor-pointer text-white" onClick={() => setIsOpen(true)} />
          </div>
        </div>
      </div>

      <div
        className={`w-full h-full bg-white absolute left-0 z-20 pt-5 ${
          !isOpen ? "hidden" : "block"
        }`}
      >
        <Filter
          filterGenderItems={filterGenderItems}
          filterItems={filterItems}
          filterPriceRange={filterPriceRange}
          filterType={filterType}
          handleChangeItemsChecked={handleChangeItemsChecked}
          handleChangeItemsGenderChecked={handleChangeItemsGenderChecked}
          handleChangePriceChecked={handleChangePriceChecked}
          handleChangeTypeChecked={handleChangeTypeChecked}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>

      <div className="home_panelList-wrap">
        {/* Filter Panel */}
        <div className="hidden sm:block">
          <Filter
            filterGenderItems={filterGenderItems}
            filterItems={filterItems}
            filterPriceRange={filterPriceRange}
            filterType={filterType}
            handleChangeItemsChecked={handleChangeItemsChecked}
            handleChangeItemsGenderChecked={handleChangeItemsGenderChecked}
            handleChangePriceChecked={handleChangePriceChecked}
            handleChangeTypeChecked={handleChangeTypeChecked}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </div>

        {/* List & Empty View */}
        <div className="p-4 w-full">
          <List list={list} resultsFound={resultsFound} />
        </div>
      </div>
    </div>
  );
};

export default Home;
