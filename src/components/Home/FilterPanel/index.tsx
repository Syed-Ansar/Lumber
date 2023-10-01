import CheckboxProton from '../../Common/CheckboxProton'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

const FilterPanel = ({ filterItems, changeChecked, topLabel }: any) => {
  const [dropdown, setDropdown] = useState(true)
  return (
    <div className=''>
      <div className='flex items-center justify-between'>
        <h1 className='text-sm sm:text-lg font-semibold uppercase mb-2 mt-3 ml-3'>{topLabel}</h1>
        {dropdown ? <ChevronDownIcon onClick={() => setDropdown(!dropdown)} className='w-5 h-5 cursor-pointer' /> : <ChevronUpIcon onClick={() => setDropdown(!dropdown)} className='w-5 h-5 cursor-pointer' />}
      </div>
      {dropdown && filterItems.map((item: any) => (
        <div key={item.id}>
          <CheckboxProton
            key={item.id}
            items={item}
            changeChecked={changeChecked}
          />
        </div>
      ))}

    </div>
  )
}

export default FilterPanel