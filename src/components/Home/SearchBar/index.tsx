

const SearchBar = ({ value, changeInput, styles, handleInputChange }: any) => (
  <div className={`border-b-[1px] border-black py-1 flex items-center bg-white`}>
    <input
      type='text'
      placeholder='Search for products...'
      value={value}
      onChange={changeInput}
      onKeyDown={handleInputChange}
      className='outline-none flex-1 sm:w-[300px] md:w-[500px] font-semibold text-black placeholder:text-lg placeholder:font-semibold'
    />
  </div>
);

export default SearchBar;