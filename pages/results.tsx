import { GetServerSideProps } from 'next';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import SearchResult from '../components/utility/search-result/SearchResult';
import { ISearchData } from '../lib/search/types';
import { IApiSearchResponseData } from './api/search';
import { NextPageWithLayout } from './page';

export interface IResults {
  searchResults: ISearchData[];
}

export const getServerSideProps: GetServerSideProps<IResults> = async ({
  query,
}) => {
  let searchResults: IApiSearchResponseData = [];
  const searchTerm = query.search;

  if (searchTerm && searchTerm.length > 0) {
    const response = await fetch(
      `https://ratemylandlord.vercel.app/api/search`,
      {
        body: JSON.stringify({ searchTerm }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      }
    );

    searchResults = await response.json();
  }

  return {
    props: {
      searchResults,
    },
  };
};

const Results: NextPageWithLayout<IResults> = ({ searchResults }) => {
  const hasResults = searchResults.length > 0;

  return (
    <>
      <section className="flex flex-col items-center gap-y-5 mt-3">
        {hasResults ? (
          <div className={`flex flex-col space-y-8`}>
            {searchResults.map((result, idx) => {
              // 4
              return <SearchResult key={idx} {...result} />;
            })}
          </div>
        ) : (
          <h5>No results found.</h5>
        )}
      </section>
    </>
  );
};

export default Results;

Results.getLayout = (page) => {
  return <PrimaryLayout justify="items-start">{page}</PrimaryLayout>;
};
