import Cat from '../components/cards/cat/Cat';
import { mockCatProps } from '../components/cards/cat/Cat.mocks';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import SidebarLayout from '../components/layouts/sidebar/SidebarLayout';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <section className="bg-gradient-to-r from-cyan-500 to-blue-500">
      <h1>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <Cat {...mockCatProps.base} />
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
};
