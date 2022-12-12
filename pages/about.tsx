import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';

const About: NextPageWithLayout = () => {
  return (
    <section>
      <h1>About</h1>
      <h2>TBC</h2>
    </section>
  );
};

export default About;

About.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
