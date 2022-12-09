export interface ISearch {
  sampleTextProp: string;
}

const Search: React.FC<ISearch> = ({ sampleTextProp }) => {
  return (
    <div className="mx-auto flex min-h-screen max-w-screen-sm items-center justify-center">
      <div className="h-36 w-full rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
        <div className="flex h-full w-full items-center justify-center bg-gray-800 back">
          <form className="flex flex-row justify-center">
            <input
              type="text"
              className="border-2 w-5/6 sm:w-96 h-12 px-6 ml-2 rounded-l-lg"
            />
            <div className="space-x-3">
              <button
                type="submit"
                className="border-2 h-12 px-6 mr-2 rounded-r-lg bg-gradient-to-r from-yellow-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500"
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
