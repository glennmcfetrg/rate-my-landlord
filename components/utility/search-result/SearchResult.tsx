import Link from 'next/link';
import { ISearchData } from '../../../lib/search/types';

export type ISearchResult = ISearchData & React.ComponentPropsWithoutRef<'div'>;

const SearchResult: React.FC<ISearchResult> = ({
  url,
  title,
  text,
  className,
  ...divProps
}) => {
  return (
    <div
      {...divProps}
      className={`flex flex-col w-5/6 max-w-screen-md space-y-1 ${className} `}
    >
      <Link
        href={url}
        className="cursor:pointer hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h5>{url}</h5>
        <p className="text-blue-600 text-xl ">{title}</p>
      </Link>
      <h5>{text}</h5>
    </div>
  );
};

export default SearchResult;
