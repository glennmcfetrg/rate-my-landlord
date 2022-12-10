import { useState } from 'react';

export interface ISearch {}

const Search: React.FC<ISearch> = () => {
  const [searchTerm, setSearchTerm] = useState<string>();
  return (
    <div className="mx-auto flex max-w-screen-sm items-center justify-center">
      <div className="h-36 w-full rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
        <div className="flex h-full w-full items-center justify-center bg-zinc-800 back">
          <form
            className="flex flex-row justify-center"
            onSubmit={(e) => {
              e.preventDefault();
              alert(searchTerm);
            }}
          >
            <input
              type="text"
              className="border border-black w-5/6 sm:w-96 h-12 px-6 ml-2 rounded-l-lg"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
            <div className="space-x-3">
              <button
                type="submit"
                className="border border-black h-12 px-6 mr-2 rounded-r-lg bg-gradient-to-r from-yellow-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500"
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
