import { useRouter } from 'next/navigation';
import { useState } from 'react';

export interface ISearch {}

const Search: React.FC<ISearch> = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>('');
  return (
    <div className="mx-auto flex max-w-screen-md">
      <div className="h-20 w-full rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
        <div className="flex h-full w-full rounded-md items-center justify-center bg-zinc-800 back">
          <form
            className="flex flex-row justify-center"
            onSubmit={(e) => {
              e.preventDefault();
              router.push(`/results?search=${searchTerm}`);
            }}
          >
            <input
              type="text"
              className="border border-black text-black w-5/6 sm:w-128 h-12 px-6 ml-2 rounded-l-lg focus:outline-none"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
            <div className="space-x-3">
              <button
                type="submit"
                className="border border-black text-white h-12 px-6 mr-2 rounded-r-lg bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] hover:from-[#ff00c6] hover:via-[#ff5478] hover:to-[#ff8a05]"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
