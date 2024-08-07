'use client';
import { Button } from "@/_components/ui/button";
import { FaSearch } from "react-icons/fa";

 const Search = () => {
  return (
    <div className='flex items-center gap-2 px-5'>
      <input type='search' placeholder=' Buscar ' className='bg-gray-01 w-full block text-sm border border-gray-03 rounded-lg text-white focus:ring-primary-purple focus:border-primary-purple h-9'/>
      <Button variant="default" size="icon" className='bg-primary-purple h-9'>
        <FaSearch size={20} className='text-white bg-primary-purple ' /></Button>
    </div>
  );
};
export default Search;
