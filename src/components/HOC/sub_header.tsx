import { useDispatch } from 'react-redux';
import { Input } from '../ui/input'
import { search } from '@/redux/reducers';
const SubHeader = () => {
  const dispatch = useDispatch();
  function setSearchQuery(e : React.ChangeEvent){
    let tar = e.target as HTMLInputElement;
    dispatch(search(tar.value));
  }
  return (
    <div className="w-full md:flex-row gap-4 flex flex-col items-center justify-between my-4 py-4 px-8 h-16">
        <h1 className='text-3xl w-fit text-secondary-100 sm:m-4'>All Pokemons</h1>
        <Input onChange={setSearchQuery} className='max-w-xl border-none text-secondary-200 bg-primary-200 placeholder:[color : #ff0000]' placeholder='search by name' />
    </div>
  )
}

export default SubHeader;