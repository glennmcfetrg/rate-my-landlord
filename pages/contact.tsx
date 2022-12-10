import ContactCard from '../components/cards/contact/ContactCard';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';

const contact: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
      <ContactCard />
    </div>
  );
};

export default contact;

contact.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
