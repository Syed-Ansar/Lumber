import EmptyList from "../../Common/EmptyList";
import ListItem from "./ListItem";


const List = ({ list }: any) => {
  return (
    <>
      <div className='grid justify-center items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {
          list.length ? list.map((item: any) => (
            <ListItem key={item.id} item={item} />
          )) :
            <div className='flex justify-center items-center w-[70vw] h-[400px]  flex-1'>
              <EmptyList />
            </div>
        }
      </div>
    </>
  )
}

export default List